
  import type { Metadata } from 'next';
  export const metadata: Metadata = {
    title: 'LeenAI — Café Data Platform',
    description: 'Hospitality copilots: demand forecasts, inventory reorder suggestions, and RAG on SOPs/invoices. Acceptance: accuracy ≥ 85%.',
    openGraph: { images: ['/og/logo-card.svg'] }
  };

export default function Page() {
  return (
    <div className="container section">
      <h1>Café Data Platform</h1>
      <p>Hospitality data copilots — forecasts, inventory reorder suggestions, and RAG on SOPs/invoices.</p>
      <h2 className="h2">Modules</h2>
      <ul>
        <li>Daily demand forecasts (weather/week patterns)</li>
        <li>Inventory reorder suggestions</li>
        <li>RAG answers from SOPs and invoices</li>
      </ul>
    </div>
  );
}
