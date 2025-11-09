
  import type { Metadata } from 'next';
  export const metadata: Metadata = {
    title: 'LeenAI — Pilot Catalog (SKUs & Acceptance)',
    openGraph: { images: ['/og/catalog.png'] }
  };

export default function Page() {
  return (
    <div className="container section">
      <h1>Pilot Catalog — SKUs & Acceptance</h1>
      <p className="lead">Productized pilots you can sign this week. Clear KPIs, PDPL-ready, and a 6–8 week timeline.</p>

      <div className="sku">
        <h2 className="h2">SmartQuote — RFQ→Quote Copilot</h2>
        <ul>
          <li>Reads RFQs (email/portal), OCRs PDFs, maps catalog & pricing, drafts email/PDF.</li>
          <li><strong>Acceptance (8 weeks):</strong> TTQ −50%; OCR ≥95%; ≤2% critical errors; ≤60s first pass; ≥20 RFQs processed.</li>
          <li><strong>Dependencies:</strong> read‑only ERP/price lists; 20–50 historical RFQs; owner for UAT.</li>
          <li><strong>Price:</strong> Full‑Pilot 60–80k SAR; Mini 20–30k SAR; Support 6–15k SAR/mo.</li>
        </ul>
        <p><a className="btn" href="/contact" data-ga="cta_click" data-label="catalog_smartquote_cta">Book a scoped demo</a></p>
      </div>

      <div className="sku">
        <h2 className="h2">OpsRAG — Answers from your docs & ERP</h2>
        <ul>
          <li>Retrieves authoritative paragraph/table then composes a short answer with the citation.</li>
          <li><strong>Acceptance:</strong> ≥85% accuracy on a 30‑question eval set; ≤5s answer; ≥90% coverage.</li>
          <li><strong>Dependencies:</strong> organized Drive/SharePoint folder; access/RBAC; golden set.</li>
          <li><strong>Price:</strong> Full‑Pilot 60–80k SAR; Mini 20–30k SAR; Support 6–15k SAR/mo.</li>
        </ul>
        <p><a className="btn" href="/contact" data-ga="cta_click" data-label="catalog_opsrag_cta">Discuss scope</a></p>
      </div>

      <div className="sku">
        <h2 className="h2">CoffeeBrain — CX on WhatsApp/Web</h2>
        <ul>
          <li>Channels assistant for FAQs, order status, simple actions; confidence thresholds + HITL handoff.</li>
          <li><strong>Acceptance:</strong> FCR ≥60%; AHT −25%; Latency ≤2s; 50–100 UAT scenarios.</li>
          <li><strong>Dependencies:</strong> channel API key; KB indexing; escalation roster.</li>
          <li><strong>Price:</strong> Full‑Pilot 60–80k SAR; Mini 20–30k SAR; Support 6–15k SAR/mo.</li>
        </ul>
        <p><a className="btn" href="/contact" data-ga="cta_click" data-label="catalog_coffeebrain_cta">See channel options</a></p>
      </div>
    </div>
  );
}