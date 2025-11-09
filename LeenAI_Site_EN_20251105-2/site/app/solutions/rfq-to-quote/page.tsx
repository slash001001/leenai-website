
  import type { Metadata } from 'next';
  export const metadata: Metadata = {
    title: 'LeenAI — SmartQuote (RFQ → Quote)',
    description: 'CPQ-light pilot: from ERP/Excel to branded PDF in minutes with audit trail and approval gates. Target: TtQ ↓ 50%+',
    openGraph: { images: ['/og/logo-card.svg'] }
  };

export default function Page() {
  return (
    <div className="container section">
      <h1>RFQ → Quote (CPQ‑light)</h1>
      <p>Quotes in minutes — from ERP/Excel to branded PDF, with audit trail and approval gates.</p>
      <h2 className="h2">Features</h2>
      <ul>
        <li>Template engine (brand‑safe DOCX/PDF)</li>
        <li>Accessory and pricing rules</li>
        <li>Audit trail + optional approval gates</li>
      </ul>
      <h2 className="h2">Expected Impact</h2>
      <p>Time‑to‑Quote ↓ 50%+, win‑rate ↑ 5–8% (pilot scope).</p>
    </div>
  );
}
