
export default function Page() {
  return (
    <div className="container section">
      <h1>Hospitality</h1>
      <h2 className="h2">Top quick wins</h2>
      <ul>
        <li>Daily demand forecasts (weather covariates)</li><li>Inventory reorder & waste reduction</li><li>SOP RAG for floor/kitchen</li>
      </ul>
      <h2 className="h2">Metrics & acceptance</h2>
      <ul>
        <li>MAPE ≤ 20%</li><li>Waste ↓ ≥ 10%</li><li>Answer &lt; 3s with citations</li>
      </ul>
      <p><a className="btn" href="/contact">Book a 30‑minute assessment</a></p>
    </div>
  );
}
