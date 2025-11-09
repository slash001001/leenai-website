
export default function Page() {
  const connectors = [
    {name:'Odoo', notes:'Sales/Inventory/Manufacturing modules; API & CSV'},
    {name:'Zoho', notes:'CRM/Books/Inventory; OAuth & webhooks'},
    {name:'SAP/Oracle', notes:'Gateway/API or flat files; staging adapters'},
    {name:'MS 365/SharePoint', notes:'Documents, Excel, approvals; Graph API'},
    {name:'Google Workspace', notes:'Drive/Sheets/Gmail; service account'},
    {name:'WhatsApp Business', notes:'Quote updates & support; templates'},
    {name:'n8n/Make', notes:'Orchestration for PDF/email/archives'}
  ];
  return (
    <div className="container section">
      <h1>Integrations</h1>
      <p>We integrate with common ERPs, productivity suites, and messaging. Each connector ships with a data‑flow diagram and security notes.</p>
      <ul>
        {connectors.map((c, i) => (<li key={i}><strong>{c.name}:</strong> {c.notes}</li>))}
      </ul>
    </div>
  );
}
