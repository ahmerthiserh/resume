"use client";

import { useState } from "react";
import { Info, Sparkles, Activity } from "lucide-react";

interface ArchitectureDiagramProps {
  projectId: string;
}

interface NodeDetail {
  id: string;
  name: string;
  type: string;
  protocol?: string;
  desc: string;
}

export function ArchitectureDiagram({ projectId }: ArchitectureDiagramProps) {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  if (projectId === "mini-mart") {
    const nodes: Record<string, NodeDetail> = {
      client: {
        id: "client",
        name: "Flutter Client",
        type: "Mobile App",
        protocol: "Dart / Riverpod",
        desc: "Renders optimistic UI catalog & instant checkout. Dispatches mutations locally first without awaiting network latency.",
      },
      cache: {
        id: "cache",
        name: "Hive / SQLite Cache",
        type: "Local Storage",
        protocol: "AES-256 Encrypted",
        desc: "Persists cart items, product catalog, and offline pending order queues with instant sub-10ms key-value retrieval.",
      },
      worker: {
        id: "worker",
        name: "Sync Engine Worker",
        type: "Background Daemon",
        protocol: "Delta Reconciler",
        desc: "Monitors connectivity; automatically batches and replays queued offline sales with last-write-wins timestamp validation.",
      },
      api: {
        id: "api",
        name: "Node.js REST Gateway",
        type: "Backend API",
        protocol: "HTTPS / JSON",
        desc: "Express cluster performing token auth, rate limiting, and business validation before distributed persistence.",
      },
      db: {
        id: "db",
        name: "PostgreSQL & Cloud CDN",
        type: "Data Layer",
        protocol: "ACID Relational",
        desc: "Primary source of truth for vendor inventories, order fulfillment, and asset CDN distributions.",
      },
    };

    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-1.5 font-medium text-neutral-300">
            <Activity className="w-3.5 h-3.5 text-blue-400" />
            <span>Interactive Data Flow & Cache Topology</span>
          </div>
          <span className="text-[11px] text-neutral-500 font-mono">Hover nodes for system specs</span>
        </div>

        {/* Diagram Card Container */}
        <div className="relative overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/90 p-4 text-white">
          <div className="min-w-[620px]">
            <svg viewBox="0 0 740 230" className="w-full h-auto select-none font-mono">
              <defs>
                <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>
                <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
                <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#60a5fa" />
                </marker>
                <marker id="arrow-emerald" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#34d399" />
                </marker>
                <marker id="arrow-neutral" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#71717a" />
                </marker>
              </defs>

              {/* Background Flow Path */}
              {/* Client -> Cache */}
              <path d="M 140 75 L 185 75" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
              <text x="162" y="65" textAnchor="middle" fill="#93c5fd" fontSize="9">Optimistic</text>

              {/* Cache <-> Sync Worker */}
              <path d="M 325 75 L 365 75" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-emerald)" />
              <path d="M 365 85 L 325 85" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-emerald)" />
              <text x="345" y="65" textAnchor="middle" fill="#6ee7b7" fontSize="9">Bi-Sync</text>

              {/* Worker -> Node API */}
              <path d="M 495 75 L 535 75" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="515" y="65" textAnchor="middle" fill="#93c5fd" fontSize="9">HTTPS</text>

              {/* Node API -> Postgres */}
              <path d="M 645 75 L 675 75" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrow-emerald)" />
              <text x="660" y="65" textAnchor="middle" fill="#6ee7b7" fontSize="9">SQL</text>

              {/* Offline fallback loop */}
              <path d="M 75 120 C 75 180, 255 180, 255 120" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="165" y="195" textAnchor="middle" fill="#fbbf24" fontSize="10">⚡ Offline Fallback & Local Queue Execution</text>

              {/* Node 1: Client */}
              <g
                className="cursor-pointer transition-transform duration-150 hover:scale-[1.02]"
                onMouseEnter={() => setActiveNode("client")}
                onMouseLeave={() => setActiveNode(null)}
              >
                <rect
                  x="20"
                  y="35"
                  width="120"
                  height="80"
                  rx="10"
                  fill="#1a1a1a"
                  stroke={activeNode === "client" ? "#3b82f6" : "#2e2e2e"}
                  strokeWidth={activeNode === "client" ? "2" : "1.2"}
                />
                <rect x="30" y="45" width="45" height="14" rx="4" fill="#1e3a5f" />
                <text x="52" y="55" textAnchor="middle" fill="#93c5fd" fontSize="8" fontWeight="bold">CLIENT</text>
                <text x="30" y="78" fill="#ffffff" fontSize="11" fontWeight="bold">Flutter App</text>
                <text x="30" y="94" fill="#a1a1aa" fontSize="9">iOS & Android</text>
              </g>

              {/* Node 2: Cache */}
              <g
                className="cursor-pointer transition-transform duration-150 hover:scale-[1.02]"
                onMouseEnter={() => setActiveNode("cache")}
                onMouseLeave={() => setActiveNode(null)}
              >
                <rect
                  x="190"
                  y="35"
                  width="135"
                  height="80"
                  rx="10"
                  fill="#181818"
                  stroke={activeNode === "cache" ? "#3b82f6" : "#2e2e2e"}
                  strokeWidth={activeNode === "cache" ? "2" : "1.2"}
                />
                <rect x="200" y="45" width="48" height="14" rx="4" fill="#1e293b" />
                <text x="224" y="55" textAnchor="middle" fill="#38bdf8" fontSize="8" fontWeight="bold">CACHE</text>
                <text x="200" y="78" fill="#ffffff" fontSize="11" fontWeight="bold">Hive / SQLite</text>
                <text x="200" y="94" fill="#a1a1aa" fontSize="9">Optimistic State</text>
              </g>

              {/* Node 3: Sync Worker */}
              <g
                className="cursor-pointer transition-transform duration-150 hover:scale-[1.02]"
                onMouseEnter={() => setActiveNode("worker")}
                onMouseLeave={() => setActiveNode(null)}
              >
                <rect
                  x="370"
                  y="35"
                  width="125"
                  height="80"
                  rx="10"
                  fill="#181818"
                  stroke={activeNode === "worker" ? "#10b981" : "#2e2e2e"}
                  strokeWidth={activeNode === "worker" ? "2" : "1.2"}
                />
                <rect x="380" y="45" width="55" height="14" rx="4" fill="#064e3b" />
                <text x="407" y="55" textAnchor="middle" fill="#34d399" fontSize="8" fontWeight="bold">RECONCILE</text>
                <text x="380" y="78" fill="#ffffff" fontSize="11" fontWeight="bold">Sync Worker</text>
                <text x="380" y="94" fill="#a1a1aa" fontSize="9">Delta Conflict Res</text>
              </g>

              {/* Node 4: API */}
              <g
                className="cursor-pointer transition-transform duration-150 hover:scale-[1.02]"
                onMouseEnter={() => setActiveNode("api")}
                onMouseLeave={() => setActiveNode(null)}
              >
                <rect
                  x="540"
                  y="35"
                  width="110"
                  height="80"
                  rx="10"
                  fill="#181818"
                  stroke={activeNode === "api" ? "#60a5fa" : "#2e2e2e"}
                  strokeWidth={activeNode === "api" ? "2" : "1.2"}
                />
                <rect x="550" y="45" width="45" height="14" rx="4" fill="#1e3a5f" />
                <text x="572" y="55" textAnchor="middle" fill="#93c5fd" fontSize="8" fontWeight="bold">GATEWAY</text>
                <text x="550" y="78" fill="#ffffff" fontSize="11" fontWeight="bold">Node.js API</text>
                <text x="550" y="94" fill="#a1a1aa" fontSize="9">Express REST</text>
              </g>

              {/* Node 5: DB */}
              <g
                className="cursor-pointer transition-transform duration-150 hover:scale-[1.02]"
                onMouseEnter={() => setActiveNode("db")}
                onMouseLeave={() => setActiveNode(null)}
              >
                <rect
                  x="680"
                  y="35"
                  width="50"
                  height="80"
                  rx="10"
                  fill="#161616"
                  stroke={activeNode === "db" ? "#10b981" : "#2e2e2e"}
                  strokeWidth={activeNode === "db" ? "2" : "1.2"}
                />
                <circle cx="705" cy="55" r="10" fill="#064e3b" />
                <text x="705" y="58" textAnchor="middle" fill="#34d399" fontSize="8" fontWeight="bold">DB</text>
                <text x="705" y="85" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Postgres</text>
                <text x="705" y="98" textAnchor="middle" fill="#a1a1aa" fontSize="8">ACID</text>
              </g>
            </svg>
          </div>
        </div>

        {/* Dynamic Node Detail Explainer Banner */}
        <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 transition-all">
          <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
          {activeNode && nodes[activeNode] ? (
            <div>
              <span className="font-semibold text-white mr-1.5">{nodes[activeNode].name}</span>
              <span className="text-[11px] text-blue-400 font-mono mr-2">[{nodes[activeNode].protocol}]</span>
              <span>{nodes[activeNode].desc}</span>
            </div>
          ) : (
            <span className="text-neutral-400">
              Hover over any architectural node above to inspect its protocol boundaries, offline fallback guarantees, and data flows.
            </span>
          )}
        </div>
      </div>
    );
  }

  if (projectId === "v-pay") {
    const nodes: Record<string, NodeDetail> = {
      gateway: {
        id: "gateway",
        name: "API Gateway (Node.js/Laravel)",
        type: "Ingress",
        protocol: "HTTPS / TLS 1.3",
        desc: "Authenticates merchant calls, inspects signature headers, and verifies client rate-limit quotas.",
      },
      idempotency: {
        id: "idempotency",
        name: "Redis Idempotency Guard",
        type: "Distributed Cache",
        protocol: "SETNX / TTL Lock",
        desc: "Executes atomic idempotency key validation. Instantly rejects or dedupes duplicate retry webhooks within a 300s sliding window.",
      },
      queue: {
        id: "queue",
        name: "BullMQ / Redis Message Queue",
        type: "Message Broker",
        protocol: "Worker Pipeline",
        desc: "Decouples transaction ingestion from processing to guarantee sub-30ms client response without waiting for ledger disk writes.",
      },
      ledger: {
        id: "ledger",
        name: "Core Ledger Service",
        type: "Accounting Engine",
        protocol: "Double-Entry Ledger",
        desc: "Calculates balance deductions, generates signed debit/credit vouchers, and handles multi-party wallet settlements.",
      },
      webhooks: {
        id: "webhooks",
        name: "Bank & Partner Webhooks",
        type: "Payment Gateways",
        protocol: "HMAC-SHA256",
        desc: "Connects with Paystack, Stripe, and banking switches with automated exponential retry policies on transient network timeouts.",
      },
      db: {
        id: "db",
        name: "PostgreSQL / MySQL ACID DB",
        type: "Persistent Vault",
        protocol: "Row-Level Locking",
        desc: "Enforces STRICT isolation levels with write-ahead logs (WAL) to ensure complete auditability with zero balance discrepancy.",
      },
    };

    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-1.5 font-medium text-neutral-300">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>Idempotent Transaction Pipeline & Webhook Ledger</span>
          </div>
          <span className="text-[11px] text-neutral-500 font-mono">Hover nodes for system specs</span>
        </div>

        {/* Diagram Card Container */}
        <div className="relative overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/90 p-4 text-white">
          <div className="min-w-[620px]">
            <svg viewBox="0 0 740 230" className="w-full h-auto select-none font-mono">
              <defs>
                <marker id="arrow-vpay" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#10b981" />
                </marker>
                <marker id="arrow-reject" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#ef4444" />
                </marker>
                <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#60a5fa" />
                </marker>
              </defs>

              {/* Gateway -> Idempotency Check */}
              <path d="M 125 75 L 165 75" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-vpay)" />
              <text x="145" y="65" textAnchor="middle" fill="#6ee7b7" fontSize="9">POST Payload</text>

              {/* Idempotency Check -> Message Queue */}
              <path d="M 290 75 L 330 75" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-vpay)" />
              <text x="310" y="65" textAnchor="middle" fill="#6ee7b7" fontSize="9">Unique Key</text>

              {/* Rejection path on duplicate key */}
              <path d="M 230 115 L 230 160" stroke="#ef4444" strokeWidth="1.8" strokeDasharray="3 3" markerEnd="url(#arrow-reject)" />
              <rect x="170" y="165" width="120" height="40" rx="6" fill="#311212" stroke="#7f1d1d" />
              <text x="230" y="180" textAnchor="middle" fill="#fca5a5" fontSize="9" fontWeight="bold">409 Conflict Rejection</text>
              <text x="230" y="195" textAnchor="middle" fill="#f87171" fontSize="8">Duplicate webhook dropped</text>

              {/* Queue -> Core Ledger */}
              <path d="M 445 75 L 485 75" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#arrow-blue)" />
              <text x="465" y="65" textAnchor="middle" fill="#93c5fd" fontSize="9">Job Dispatch</text>

              {/* Ledger -> Bank Webhooks / Postgres */}
              <path d="M 600 65 L 635 50" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-vpay)" />
              <path d="M 600 85 L 635 100" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#arrow-blue)" />

              {/* Node 1: Ingress Gateway */}
              <g
                className="cursor-pointer transition-transform duration-150 hover:scale-[1.02]"
                onMouseEnter={() => setActiveNode("gateway")}
                onMouseLeave={() => setActiveNode(null)}
              >
                <rect
                  x="15"
                  y="35"
                  width="110"
                  height="80"
                  rx="10"
                  fill="#1a1a1a"
                  stroke={activeNode === "gateway" ? "#10b981" : "#2e2e2e"}
                  strokeWidth={activeNode === "gateway" ? "2" : "1.2"}
                />
                <rect x="25" y="45" width="48" height="14" rx="4" fill="#064e3b" />
                <text x="49" y="55" textAnchor="middle" fill="#34d399" fontSize="8" fontWeight="bold">INGRESS</text>
                <text x="25" y="78" fill="#ffffff" fontSize="11" fontWeight="bold">API Gateway</text>
                <text x="25" y="94" fill="#a1a1aa" fontSize="9">Node / Laravel</text>
              </g>

              {/* Node 2: Idempotency Cache */}
              <g
                className="cursor-pointer transition-transform duration-150 hover:scale-[1.02]"
                onMouseEnter={() => setActiveNode("idempotency")}
                onMouseLeave={() => setActiveNode(null)}
              >
                <rect
                  x="170"
                  y="35"
                  width="120"
                  height="80"
                  rx="10"
                  fill="#181818"
                  stroke={activeNode === "idempotency" ? "#ef4444" : "#2e2e2e"}
                  strokeWidth={activeNode === "idempotency" ? "2" : "1.2"}
                />
                <rect x="180" y="45" width="45" height="14" rx="4" fill="#450a0a" />
                <text x="202" y="55" textAnchor="middle" fill="#f87171" fontSize="8" fontWeight="bold">ATOMIC</text>
                <text x="180" y="78" fill="#ffffff" fontSize="11" fontWeight="bold">Redis Lock</text>
                <text x="180" y="94" fill="#a1a1aa" fontSize="9">Idempotency Key</text>
              </g>

              {/* Node 3: Message Queue */}
              <g
                className="cursor-pointer transition-transform duration-150 hover:scale-[1.02]"
                onMouseEnter={() => setActiveNode("queue")}
                onMouseLeave={() => setActiveNode(null)}
              >
                <rect
                  x="335"
                  y="35"
                  width="110"
                  height="80"
                  rx="10"
                  fill="#181818"
                  stroke={activeNode === "queue" ? "#60a5fa" : "#2e2e2e"}
                  strokeWidth={activeNode === "queue" ? "2" : "1.2"}
                />
                <rect x="345" y="45" width="45" height="14" rx="4" fill="#1e3a5f" />
                <text x="367" y="55" textAnchor="middle" fill="#93c5fd" fontSize="8" fontWeight="bold">QUEUE</text>
                <text x="345" y="78" fill="#ffffff" fontSize="11" fontWeight="bold">BullMQ / Redis</text>
                <text x="345" y="94" fill="#a1a1aa" fontSize="9">Async Workers</text>
              </g>

              {/* Node 4: Core Ledger */}
              <g
                className="cursor-pointer transition-transform duration-150 hover:scale-[1.02]"
                onMouseEnter={() => setActiveNode("ledger")}
                onMouseLeave={() => setActiveNode(null)}
              >
                <rect
                  x="490"
                  y="35"
                  width="110"
                  height="80"
                  rx="10"
                  fill="#181818"
                  stroke={activeNode === "ledger" ? "#10b981" : "#2e2e2e"}
                  strokeWidth={activeNode === "ledger" ? "2" : "1.2"}
                />
                <rect x="500" y="45" width="48" height="14" rx="4" fill="#064e3b" />
                <text x="524" y="55" textAnchor="middle" fill="#34d399" fontSize="8" fontWeight="bold">LEDGER</text>
                <text x="500" y="78" fill="#ffffff" fontSize="11" fontWeight="bold">Settlements</text>
                <text x="500" y="94" fill="#a1a1aa" fontSize="9">Double-Entry</text>
              </g>

              {/* Node 5: External Webhook Outbound */}
              <g
                className="cursor-pointer transition-transform duration-150 hover:scale-[1.02]"
                onMouseEnter={() => setActiveNode("webhooks")}
                onMouseLeave={() => setActiveNode(null)}
              >
                <rect
                  x="640"
                  y="20"
                  width="85"
                  height="50"
                  rx="8"
                  fill="#161616"
                  stroke={activeNode === "webhooks" ? "#10b981" : "#2e2e2e"}
                  strokeWidth="1.2"
                />
                <text x="650" y="42" fill="#ffffff" fontSize="9" fontWeight="bold">Gateways</text>
                <text x="650" y="56" fill="#a1a1aa" fontSize="8">Paystack / Stripe</text>
              </g>

              {/* Node 6: Persistent Acid DB */}
              <g
                className="cursor-pointer transition-transform duration-150 hover:scale-[1.02]"
                onMouseEnter={() => setActiveNode("db")}
                onMouseLeave={() => setActiveNode(null)}
              >
                <rect
                  x="640"
                  y="85"
                  width="85"
                  height="50"
                  rx="8"
                  fill="#161616"
                  stroke={activeNode === "db" ? "#60a5fa" : "#2e2e2e"}
                  strokeWidth="1.2"
                />
                <text x="650" y="107" fill="#ffffff" fontSize="9" fontWeight="bold">Postgres / SQL</text>
                <text x="650" y="121" fill="#34d399" fontSize="8">ACID Balances</text>
              </g>
            </svg>
          </div>
        </div>

        {/* Dynamic Node Detail Explainer Banner */}
        <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 transition-all">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          {activeNode && nodes[activeNode] ? (
            <div>
              <span className="font-semibold text-white mr-1.5">{nodes[activeNode].name}</span>
              <span className="text-[11px] text-emerald-400 font-mono mr-2">[{nodes[activeNode].protocol}]</span>
              <span>{nodes[activeNode].desc}</span>
            </div>
          ) : (
            <span className="text-neutral-400">
              Hover over any architectural node above to inspect its idempotency locks, worker queues, and ACID guarantees.
            </span>
          )}
        </div>
      </div>
    );
  }

  if (projectId === "pos-engine") {
    const nodes: Record<string, NodeDetail> = {
      terminal: {
        id: "terminal",
        name: "POS Cashier Terminal",
        type: "Physical Device",
        protocol: "Local Hardware & Scanner",
        desc: "Conducts instant barcode scan, generates encrypted receipt numbers, and prints offline customer vouchers.",
      },
      sqlite: {
        id: "sqlite",
        name: "Local Embedded SQLite Node",
        type: "Edge Storage",
        protocol: "Offline Ledger",
        desc: "Maintains local transaction queue and immediate stock inventory decrements with zero dependence on WAN internet.",
      },
      poller: {
        id: "poller",
        name: "Network Health Poller",
        type: "Heartbeat Service",
        protocol: "Exponential Backoff Ping",
        desc: "Continuously probes connection health and triggers automated sync gateway handshakes as soon as uplink is detected.",
      },
      gateway: {
        id: "gateway",
        name: "Sync Gateway (Laravel API)",
        type: "Cloud Receiver",
        protocol: "Batch REST Endpoint",
        desc: "Receives signed multi-transaction payload arrays, applies rollback protections, and resolves SKU conflict discrepancies.",
      },
      central: {
        id: "central",
        name: "Central Tenant Database",
        type: "Cloud Master DB",
        protocol: "Multi-Store Ledger",
        desc: "Consolidates multi-branch stock audits, daily gross sales metrics, and updates central enterprise inventory books.",
      },
    };

    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-1.5 font-medium text-neutral-300">
            <Activity className="w-3.5 h-3.5 text-amber-400" />
            <span>Dual-Mode Offline / Online Reconnection Flow</span>
          </div>
          <span className="text-[11px] text-neutral-500 font-mono">Hover nodes for system specs</span>
        </div>

        {/* Diagram Card Container */}
        <div className="relative overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/90 p-4 text-white">
          <div className="min-w-[620px]">
            <svg viewBox="0 0 740 230" className="w-full h-auto select-none font-mono">
              <defs>
                <marker id="arrow-amber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#f59e0b" />
                </marker>
                <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#10b981" />
                </marker>
              </defs>

              {/* Mode Zones */}
              <rect x="10" y="10" width="360" height="205" rx="10" fill="#18140c" stroke="#3d2c12" strokeWidth="1" strokeDasharray="4 4" />
              <text x="25" y="28" fill="#fbbf24" fontSize="10" fontWeight="bold">● OFFLINE MODE (Air-Gapped Retail)</text>

              <rect x="390" y="10" width="340" height="205" rx="10" fill="#0d1814" stroke="#123d2b" strokeWidth="1" strokeDasharray="4 4" />
              <text x="405" y="28" fill="#34d399" fontSize="10" fontWeight="bold">● ONLINE MODE (Cloud Reconciliation)</text>

              {/* Terminal -> SQLite */}
              <path d="M 125 90 L 165 90" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-amber)" />
              <text x="145" y="80" textAnchor="middle" fill="#fbbf24" fontSize="9">Write Sale</text>

              {/* SQLite -> Poller */}
              <path d="M 285 90 L 325 90" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-amber)" />
              <text x="305" y="80" textAnchor="middle" fill="#fbbf24" fontSize="9">Queue</text>

              {/* Poller -> Cloud Gateway (Boundary transition) */}
              <path d="M 375 120 C 375 160, 440 160, 440 120" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrow-green)" />
              <text x="410" y="180" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">On Reconnect ➔ Batch Sync</text>

              {/* Gateway -> Central Master */}
              <path d="M 540 90 L 595 90" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-green)" />
              <text x="568" y="80" textAnchor="middle" fill="#34d399" fontSize="9">Audit & Reconcile</text>

              {/* Node 1: Terminal */}
              <g
                className="cursor-pointer transition-transform duration-150 hover:scale-[1.02]"
                onMouseEnter={() => setActiveNode("terminal")}
                onMouseLeave={() => setActiveNode(null)}
              >
                <rect
                  x="20"
                  y="50"
                  width="105"
                  height="75"
                  rx="10"
                  fill="#201a0e"
                  stroke={activeNode === "terminal" ? "#f59e0b" : "#453213"}
                  strokeWidth="1.2"
                />
                <rect x="28" y="58" width="45" height="13" rx="4" fill="#451a03" />
                <text x="50" y="67" textAnchor="middle" fill="#fed7aa" fontSize="8" fontWeight="bold">TERMINAL</text>
                <text x="28" y="88" fill="#ffffff" fontSize="10" fontWeight="bold">Cashier UI</text>
                <text x="28" y="103" fill="#d4d4d8" fontSize="8">Receipt Printing</text>
              </g>

              {/* Node 2: SQLite */}
              <g
                className="cursor-pointer transition-transform duration-150 hover:scale-[1.02]"
                onMouseEnter={() => setActiveNode("sqlite")}
                onMouseLeave={() => setActiveNode(null)}
              >
                <rect
                  x="170"
                  y="50"
                  width="115"
                  height="75"
                  rx="10"
                  fill="#201a0e"
                  stroke={activeNode === "sqlite" ? "#f59e0b" : "#453213"}
                  strokeWidth="1.2"
                />
                <rect x="178" y="58" width="45" height="13" rx="4" fill="#451a03" />
                <text x="200" y="67" textAnchor="middle" fill="#fed7aa" fontSize="8" fontWeight="bold">LOCAL DB</text>
                <text x="178" y="88" fill="#ffffff" fontSize="10" fontWeight="bold">SQLite Node</text>
                <text x="178" y="103" fill="#d4d4d8" fontSize="8">Offline Ledger</text>
              </g>

              {/* Node 3: Poller */}
              <g
                className="cursor-pointer transition-transform duration-150 hover:scale-[1.02]"
                onMouseEnter={() => setActiveNode("poller")}
                onMouseLeave={() => setActiveNode(null)}
              >
                <rect
                  x="330"
                  y="50"
                  width="50"
                  height="75"
                  rx="10"
                  fill="#201a0e"
                  stroke={activeNode === "poller" ? "#f59e0b" : "#453213"}
                  strokeWidth="1.2"
                />
                <circle cx="355" cy="72" r="10" fill="#78350f" />
                <text x="355" y="75" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="bold">⚡</text>
                <text x="355" y="98" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">Poller</text>
                <text x="355" y="112" textAnchor="middle" fill="#d4d4d8" fontSize="7">Ping</text>
              </g>

              {/* Node 4: Gateway */}
              <g
                className="cursor-pointer transition-transform duration-150 hover:scale-[1.02]"
                onMouseEnter={() => setActiveNode("gateway")}
                onMouseLeave={() => setActiveNode(null)}
              >
                <rect
                  x="430"
                  y="50"
                  width="110"
                  height="75"
                  rx="10"
                  fill="#0e2017"
                  stroke={activeNode === "gateway" ? "#10b981" : "#134e32"}
                  strokeWidth="1.2"
                />
                <rect x="438" y="58" width="48" height="13" rx="4" fill="#064e3b" />
                <text x="462" y="67" textAnchor="middle" fill="#a7f3d0" fontSize="8" fontWeight="bold">INGRESS</text>
                <text x="438" y="88" fill="#ffffff" fontSize="10" fontWeight="bold">Laravel API</text>
                <text x="438" y="103" fill="#d4d4d8" fontSize="8">Batch Sync Gateway</text>
              </g>

              {/* Node 5: Central Database */}
              <g
                className="cursor-pointer transition-transform duration-150 hover:scale-[1.02]"
                onMouseEnter={() => setActiveNode("central")}
                onMouseLeave={() => setActiveNode(null)}
              >
                <rect
                  x="600"
                  y="50"
                  width="120"
                  height="75"
                  rx="10"
                  fill="#0e2017"
                  stroke={activeNode === "central" ? "#10b981" : "#134e32"}
                  strokeWidth="1.2"
                />
                <rect x="608" y="58" width="45" height="13" rx="4" fill="#064e3b" />
                <text x="630" y="67" textAnchor="middle" fill="#a7f3d0" fontSize="8" fontWeight="bold">MASTER</text>
                <text x="608" y="88" fill="#ffffff" fontSize="10" fontWeight="bold">Central DB</text>
                <text x="608" y="103" fill="#d4d4d8" fontSize="8">Multi-Store Audit</text>
              </g>
            </svg>
          </div>
        </div>

        {/* Dynamic Node Detail Explainer Banner */}
        <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 transition-all">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          {activeNode && nodes[activeNode] ? (
            <div>
              <span className="font-semibold text-white mr-1.5">{nodes[activeNode].name}</span>
              <span className="text-[11px] text-amber-400 font-mono mr-2">[{nodes[activeNode].protocol}]</span>
              <span>{nodes[activeNode].desc}</span>
            </div>
          ) : (
            <span className="text-neutral-400">
              Hover over any architectural node above to inspect offline local SQLite durability, poller heuristics, and cloud conflict resolution.
            </span>
          )}
        </div>
      </div>
    );
  }

  return null;
}
