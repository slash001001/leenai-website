
  import type { Metadata } from 'next';
  export const metadata: Metadata = {
    title: 'LeenAI — AI Pilot Studio (6–8 weeks)',
    description: 'From idea to measurable AI pilot in 6–8 weeks with KPIs, guardrails, UAT, and handover. PDPL-ready with on‑prem options.',
    openGraph: { images: ['/og/logo-card.svg'] }
  };

export default function Page() {
  return (
    <div className="container section">
      <h1>AI Pilot Studio</h1>
      <p>From idea to measurable pilot in 6–8 weeks. We prioritize revenue/time‑to‑value, build agent workflows with guardrails, and hand over playbooks.</p>
      <h2 className="h2">What you get</h2>
      <ul>
        <li>Discovery & KPI framing (impact/effort driven)</li>
        <li>Connectors + quick dashboards</li>
        <li>Agentic workflow with tools & guardrails</li>
        <li>UAT, playbooks, and handover</li>
      </ul>
      <h2 className="h2">Acceptance examples</h2>
      <ul>
        <li>KPI delta vs. baseline (TtQ ↓ ≥ 50%)</li>
        <li>Production‑grade logs and RBAC</li>
        <li>PDPL consent text & retention policy embedded</li>
      </ul>
    </div>
  );
}
