export interface BlogPost {
  slug: string;
  title: string;
  /** One or two sentences, used for the meta description and the post list. */
  description: string;
  /** ISO date the post was first published (on LinkedIn or here). */
  date: string;
  tags: string[];
  /**
   * Plain text. Blank lines separate blocks. A block whose lines all start with "1. ", "2. "…
   * is a numbered list, one whose lines all start with "- " or "→ " is a bullet list,
   * a block starting with "## " is a subheading, anything else is a paragraph.
   */
  body: string;
  /** Where the post first appeared, if it was republished from LinkedIn. */
  originalUrl?: string;
}

export const POSTS: BlogPost[] = [
  {
    slug: "building-trust-into-a-marketplace-with-escrow",
    title: "Building trust into a marketplace: why Mini Mart started with escrow",
    description:
      "The biggest problem with buying from small online sellers isn't price, it's trust. How Mini Mart holds every payment in escrow until delivery.",
    date: "2026-11-19",
    tags: ["Mini Mart", "escrow", "marketplace", "Laravel", "React Native", "fintech"],
    body: `The biggest problem with buying from small online sellers in Nigeria isn't price. It's trust.

"What if I pay and nothing comes?"

So when I built Mini Mart, I started with the money, not the storefront.

Every paid order on Mini Mart is held in escrow. The seller only gets paid after the buyer's order is delivered. Buyers stop gambling, and honest sellers stop losing sales to people who are scared to pay first.

## What's live today

- Multi-vendor: each seller runs their own store, from kitchenware to native fashion
- Search and browse by store, category and price
- A React web app, plus native apps on Google Play and the App Store built with React Native
- A Laravel backend handling orders, payments and escrow release

## The hard part

The hardest part wasn't the UI. It was the order and payment states: paid, held, delivered, released, disputed. Every transition has to be correct, because it's real money.

You can try it at minimart.vetristech.com.

If you're building marketplaces or payment flows, I'd like to hear how you handle escrow and disputes.`,
  },
  {
    slug: "design-for-the-failed-transfer-first",
    title: "Design for the failed transfer first: what slows digital payments in Northern Nigeria",
    description:
      "Traders have moved from cash to transfers and POS, but one thing still slows adoption: trust when a transfer fails. What fintechs should build for.",
    date: "2026-11-23",
    tags: ["fintech", "payments", "Northern Nigeria", "digital payments", "product design"],
    body: `Two years ago, many traders around me in Gombe only took cash.

Today, most of them take transfers and POS every day.

But one thing still slows adoption in the North more than anything else: trust when a transfer "fails".

The customer says "I've sent it." The trader says "I haven't received it." Then the money takes days to come back, and both of them go back to cash next time.

That's not a technology problem. It's a confidence problem.

## What the winning fintechs will do

The fintechs that win here won't just have the best app. They'll be the ones that:

→ show clearly where the money is, right now
→ resolve failed transfers in hours, not days
→ have real people customers can talk to, which is why Moniepoint opening physical offices matters

If you're building for Northern Nigeria, design for the failed transfer first. That's the moment you win or lose trust.`,
  },
  {
    slug: "when-should-a-seller-get-paid-escrow-rules",
    title: "When should a seller get paid? Mini Mart's escrow release rules",
    description:
      "Delivery codes, a 48-hour inspection window, disputes and refunds: the rules that decide when Mini Mart releases a buyer's money to the seller.",
    date: "2026-11-24",
    tags: ["Mini Mart", "escrow", "marketplace", "product design", "e-commerce"],
    body: `When should a seller get paid?

On Mini Mart, buyers pay into escrow, not straight to the seller. Here are the rules today:

1. The buyer pays and the money is held.
2. At handover, the buyer gives the seller a 4-digit delivery code. The seller enters it and gets paid.
3. If the buyer never confirms, the money is released automatically after a 48-hour inspection window, unless they open a dispute.
4. If the seller goes quiet for 48 hours, the buyer can cancel and get a full refund to their wallet.

## The 48-hour question

48 hours is the number I keep going back and forth on.

Sellers want their money faster. Buyers want time to check what they received.

Is 48 hours fair to both sides, or is it too short or too long? It's the trade-off every escrow marketplace has to settle.`,
  },
  {
    slug: "a-payment-webhook-is-not-proof",
    title: "A payment webhook is not proof: 6 checks before any money moves",
    description:
      "Signature, amount, API confirmation, replays, reversals and data minimisation: the six checks Mini Mart runs on every Paystack payout webhook.",
    date: "2026-11-26",
    tags: ["webhooks", "Paystack", "Laravel", "payment security", "fintech"],
    body: `A payment webhook is a message that says "this happened". It isn't proof.

When Paystack tells Mini Mart a seller payout succeeded or failed, here's what happens before any money moves:

1. Check the signature. If it's wrong, nothing changes.
2. Check the amount. If Paystack reports a different amount than we recorded, nothing changes.
3. Ask Paystack's API directly. If a correctly signed event says "success" but the API says the transfer failed, the API wins.
4. Survive replays. If the same "failed" event arrives twice, the seller's money is returned once, not twice.
5. Handle reversals. If a transfer is marked paid and later reversed, the money goes back to the seller's balance.
6. Store less. Seller BVNs are verified, never stored in full.

Each of these is an automated test, because "it worked when I tried it" isn't good enough for money.`,
  },
];

/** Newest first. */
export function getPosts(): BlogPost[] {
  return [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
