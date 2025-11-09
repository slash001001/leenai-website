
  import type { Metadata } from 'next';
  export const metadata: Metadata = {
    title: 'LeenAI — Case Study V1 (SmartQuote)',
    openGraph: { images: ['/og/case-studies.png'] }
  };

export default function Page() {
  return (
    <div className="container section">
      <h1>Case Study V1 — SmartQuote (RFQ→Quote)</h1>
      <p className="lead">Early results from the first pilot. (Numbers will be updated after ≥20 live RFQs.)</p>
      <h2 className="h2">Objective</h2>
      <p>Cut Time‑to‑Quote and reduce manual hours on RFQs with multi‑doc attachments.</p>
      <h2 className="h2">Baseline → After</h2>
      <table className="table">
        <thead><tr><th>Metric</th><th>Baseline</th><th>Pilot</th><th>Target</th></tr></thead>
        <tbody>
          <tr><td>Time‑to‑Quote (median)</td><td>8h</td><td>≤4h</td><td>−50%</td></tr>
          <tr><td>OCR Accuracy</td><td>—</td><td>≥95%</td><td>≥95%</td></tr>
          <tr><td>Critical Errors</td><td>—</td><td>≤2%</td><td>≤2%</td></tr>
          <tr><td>First Draft Latency</td><td>—</td><td>≤60s</td><td>≤60s</td></tr>
        </tbody>
      </table>
      <p>Method: evaluation set (≥30 cases), JSON logs per RFQ, HITL approvals on price override.</p>
      <p><a className="btn" href="/contact" data-ga="cta_click" data-label="case_contact_cta">Discuss similar pilot</a></p>
    </div>
  );
}