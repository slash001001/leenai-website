export default function Page() {
  return (
    <div className="container section">
      <h1>Privacy & PDPL (Saudi)</h1>
      <p>We follow <strong>Privacy‑by‑Design</strong>: data minimization, encryption in transit/at rest, role‑based access, audit logs, and <strong>human approval</strong> for high‑risk actions.</p>

      <h2 className="h2">What we collect</h2>
      <ul>
        <li><strong>Contact form:</strong> name, company, email, optional phone, and your message.</li>
        <li><strong>Analytics:</strong> aggregate usage (GA4). No personal data in logs by default.</li>
      </ul>

      <h2 className="h2">Lawful basis & purpose</h2>
      <p>Consent for contacting you about a pilot and measuring site performance; legitimate interest for basic security/anti‑abuse.</p>

      <h2 className="h2">Retention</h2>
      <p>Contact form submissions are retained for <strong>≤ 90 days</strong> unless we sign a contract; then records follow the contract’s retention policy. Analytics data follows GA4 defaults.</p>

      <h2 className="h2">Data residency</h2>
      <p>Default hosting is in KSA or on‑prem (client VPC) for pilots. Cross‑border transfers require explicit approval.</p>

      <h2 className="h2">Your rights (DSAR)</h2>
      <p>To access, correct, or delete your data, email <a href="mailto:privacy@leenai.sa">privacy@leenai.sa</a>. We respond within 10 business days.</p>

      <h2 className="h2">Security</h2>
      <p>Least‑privilege RBAC, managed secrets/rotation, encryption, audit logs. Write operations stay <strong>disabled</strong> during pilots until security gates are passed.</p>

      <p className="small">Last updated: {new Date().toISOString().slice(0,10)}</p>
    </div>
  );
}