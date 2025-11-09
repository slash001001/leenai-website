
  import type { Metadata } from 'next';
  export const metadata: Metadata = {
    title: 'LeenAI — About & Compliance',
    description: 'LeenAI team and approach: operating-partner model, evidence-first pilots, PDPL-by-design, and on‑prem/VPC options in KSA.',
    openGraph: { images: ['/og/logo-card.svg'] }
  };

export default function Page() {
  return (
    <div className="container section">
      <h1>About LeenAI</h1>
      <p>Operating‑partner model for AI pilots in KSA; evidence‑first; privacy‑by‑design. We prefer small wins that compound.</p>
      <h2 className="h2">Compliance</h2>
      <ul>
        <li>PDPL‑aware by default (consent text, retention ≤ 90 days unless contracted)</li>
        <li>On‑prem/VPC options; KSA cloud residency by default</li>
        <li>RBAC, audit logs, encryption at rest/in transit</li>
      </ul>
    </div>
  );
}
