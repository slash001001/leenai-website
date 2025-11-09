
export default function Page() {
  return (
    <div>
      <section className="hero container">
        <h1>Practical AI pilots for Saudi businesses — measurable in 6–8 weeks.</h1>
        <p className="small">We design focused pilots that cut Time‑to‑Quote, reduce manual hours, and unlock faster decisions — with PDPL built in.</p>
        <p><a className="btn" href="/contact" data-ga="cta_click" data-label="home_hero_cta">Book a 30‑minute assessment</a></p>
        <div className="kpi">
          <div className="item"><strong>50%</strong><div>Faster Time‑to‑Quote</div></div>
          <div className="item"><strong>70%</strong><div>Manual hours reduced</div></div>
          <div className="item"><strong>6–8</strong><div>Weeks to measurable impact</div></div>
        </div>
      </section>

      <section className="section container">
        <p><a href="/resources" data-ga="cta_click" data-label="home_to_resources">Download SOW & Profile</a></p>
      </section>

      <section className="section container">
        <h2 className="h2">Why pilots</h2>
        <p>Short cycles, clear KPIs, and guardrails. You keep control of data, and we build only what moves revenue and operations.</p>
        <ul>
          <li>Scoped to 1–2 measurable KPIs.</li>
          <li>Agent workflows with observability and RBAC.</li>
          <li>On‑prem or KSA cloud; PDPL by default.</li>
        </ul>
      </section>

      <section className="section container">
        <p><a href="/resources" data-ga="cta_click" data-label="home_to_resources">Download SOW & Profile</a></p>
      </section>

      <section className="section container">
        <h2 className="h2">How it works (6–8 weeks)</h2>
        <ol>
          <li><strong>Week 0:</strong> Data intake + success criteria</li>
          <li><strong>Week 1–2:</strong> Connectors & baseline (KPIs, dashboards)</li>
          <li><strong>Week 3–4:</strong> Model + guardrails; human‑in‑the‑loop</li>
          <li><strong>Week 5–6:</strong> UAT + playbooks + handover</li>
        </ol>
      </section>

      <section className="section container">
        <p><a href="/resources" data-ga="cta_click" data-label="home_to_resources">Download SOW & Profile</a></p>
      </section>

      <section className="section container">
        <h2 className="h2">Tracks</h2>
        <div className="grid">
          <div className="card" style={{gridColumn:'span 6'}}>
            <h3>AI Pilot Studio</h3>
            <p>Design, build, and measure a business pilot in 6–8 weeks.</p>
            <a href="/solutions/ai-pilot-studio">Learn more →</a>
          </div>
          <div className="card" style={{gridColumn:'span 6'}}>
            <h3>RFQ → Quote (CPQ‑light)</h3>
            <p>ERP/Excel to branded PDF in minutes with audit trail.</p>
            <a href="/solutions/rfq-to-quote">Learn more →</a>
          </div>
          <div className="card" style={{gridColumn:'span 6'}}>
            <h3>Café Data Platform</h3>
            <p>Hospitality forecasts, inventory suggestions, and RAG.</p>
            <a href="/solutions/cafe-data-platform">Learn more →</a>
          </div>
          <div className="card" style={{gridColumn:'span 6'}}>
            <h3>Architecture</h3>
            <p>Manager agent + tools + guardrails + observability + RBAC.</p>
            <a href="/architecture">See how it works →</a>
          </div>
        </div>
      </section>

      <section className="section container">
        <p><a href="/resources" data-ga="cta_click" data-label="home_to_resources">Download SOW & Profile</a></p>
      </section>

      <section className="section container">
        <h2 className="h2">FAQs</h2>
        <dl className="faq">
          <dt>Will data leave KSA?</dt>
          <dd>Default is on‑prem or KSA cloud with data minimization and RBAC.</dd>
          <dt>How long is a pilot?</dt>
          <dd>6–8 weeks with defined KPIs and acceptance tests.</dd>
          <dt>What do you need from us?</dt>
          <dd>One data owner, read‑only access, and a champion to sign off acceptance tests.</dd>
        </dl>
      </section>
    </div>
  );
}
