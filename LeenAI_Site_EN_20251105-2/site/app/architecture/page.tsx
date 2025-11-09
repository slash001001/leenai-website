
export default function Page() {
  return (
    <div className="container section">
      <h1>Architecture — Agents with Guardrails</h1>
      <p>Our Manager Agent orchestrates domain tools (CPQ, RAG, Forecast) with guardrails and observability. RBAC gates sensitive actions; PDPL is built in.</p>
      <h2 className="h2">Core components</h2>
      <ul>
        <li><strong>Manager Agent:</strong> orchestrates tasks, delegates to tools, aggregates results.</li>
        <li><strong>Tools:</strong> CPQ generator, RAG retriever, forecasting models, OR solvers.</li>
        <li><strong>Guardrails:</strong> relevance checks, PII filters, human‑in‑the‑loop approvals.</li>
        <li><strong>Observability:</strong> logs, traces, and citations; audit reports on demand.</li>
        <li><strong>RBAC & PDPL:</strong> role scopes, consent text, retention 60–90 days, on‑prem options.</li>
      </ul>
      <h2 className="h2">Hosting</h2>
      <p>On‑prem or KSA cloud by default; data minimization across all flows.</p>
    </div>
  );
}
