"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

/** Glossy, slowly morphing core with a wireframe shell around it. */
function Core({ reduced }: { reduced: boolean }) {
  const core = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);

  useFrame((_, dt) => {
    if (reduced) return;
    if (core.current) {
      core.current.rotation.x += dt * 0.12;
      core.current.rotation.y += dt * 0.18;
    }
    if (shell.current) {
      shell.current.rotation.x -= dt * 0.05;
      shell.current.rotation.y -= dt * 0.08;
    }
  });

  return (
    <Float speed={reduced ? 0 : 1.4} rotationIntensity={0.5} floatIntensity={reduced ? 0 : 1.1}>
      <mesh ref={core}>
        <icosahedronGeometry args={[1.25, 32]} />
        <MeshDistortMaterial
          color="#2f6bff"
          emissive="#1d2fa8"
          emissiveIntensity={0.45}
          roughness={0.12}
          metalness={0.65}
          distort={reduced ? 0.2 : 0.36}
          speed={reduced ? 0 : 1.6}
        />
      </mesh>
      <mesh ref={shell} scale={1.85}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#7dd3fc" wireframe transparent opacity={0.16} />
      </mesh>
    </Float>
  );
}

/** Tilted rings that spin like orbits. */
function Rings({ reduced }: { reduced: boolean }) {
  const a = useRef<THREE.Mesh>(null);
  const b = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (reduced) return;
    if (a.current) a.current.rotation.z += dt * 0.25;
    if (b.current) b.current.rotation.z -= dt * 0.18;
  });
  return (
    <>
      <mesh ref={a} rotation={[1.15, 0.2, 0]}>
        <torusGeometry args={[2.35, 0.012, 16, 160]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.55} />
      </mesh>
      <mesh ref={b} rotation={[1.35, -0.55, 0.4]}>
        <torusGeometry args={[2.8, 0.008, 16, 160]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.4} />
      </mesh>
    </>
  );
}

/** Small glowing "service nodes" travelling along the orbits. */
function Orbiters({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const nodes = [
    { r: 2.35, speed: 0.55, phase: 0, tilt: [1.15, 0.2, 0], color: "#38bdf8" },
    { r: 2.35, speed: 0.55, phase: Math.PI, tilt: [1.15, 0.2, 0], color: "#60a5fa" },
    { r: 2.8, speed: -0.38, phase: 1.2, tilt: [1.35, -0.55, 0.4], color: "#a78bfa" },
    { r: 2.8, speed: -0.38, phase: 4.1, tilt: [1.35, -0.55, 0.4], color: "#c4b5fd" },
  ] as const;
  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame(({ clock }) => {
    const t = reduced ? 0 : clock.getElapsedTime();
    nodes.forEach((n, i) => {
      const m = refs.current[i];
      if (!m) return;
      const angle = n.phase + t * n.speed;
      m.position.set(Math.cos(angle) * n.r, Math.sin(angle) * n.r, 0);
    });
  });

  return (
    <group ref={group}>
      {nodes.map((n, i) => (
        <group key={i} rotation={n.tilt as unknown as THREE.Euler}>
          <mesh ref={(el) => { refs.current[i] = el; }}>
            <sphereGeometry args={[0.07, 24, 24]} />
            <meshBasicMaterial color={n.color} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/** Camera drifts toward the pointer for a parallax feel. */
function Rig({ reduced }: { reduced: boolean }) {
  useFrame(({ camera, pointer }) => {
    if (reduced) return;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.9, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.6, 0.04);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  const reduced = usePrefersReducedMotion();
  const wrapper = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  // Stop rendering when the hero is scrolled out of view.
  useEffect(() => {
    const el = wrapper.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapper} className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        frameloop={visible ? "always" : "never"}
        eventSource={typeof document !== "undefined" ? document.body : undefined}
        eventPrefix="client"
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 5, 5]} intensity={2.2} color="#dbeafe" />
        <pointLight position={[-5, -2, 3]} intensity={30} color="#8b5cf6" />
        <pointLight position={[4, -3, -2]} intensity={25} color="#06b6d4" />
        {/* Overall size of the 3D object; lower = smaller */}
        <group scale={0.7}>
          <Core reduced={reduced} />
          <Rings reduced={reduced} />
          <Orbiters reduced={reduced} />
        </group>
        <Sparkles
          count={90}
          scale={[11, 7, 6]}
          size={2.2}
          speed={reduced ? 0 : 0.35}
          opacity={0.7}
          color="#93c5fd"
        />
        <Rig reduced={reduced} />
      </Canvas>
    </div>
  );
}
