
  import type { Metadata } from 'next';
  export const metadata: Metadata = {
    title: 'LeenAI — Case Studies',
    description: 'Pilot outcomes with objective, approach, data/tools, KPI delta, and next steps. SmartQuote V1 placeholder included.',
    openGraph: { images: ['/og/case-studies.png'] }
  };

export default function Page() {
  return (
    <div className="container section">
      <h1>Case Studies</h1>
      <p>Template-driven stories: Objective → Approach → Data & tools → KPI delta → Next steps.</p>
    </div>
  );
}
