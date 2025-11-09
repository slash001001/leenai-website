
  import type { Metadata } from 'next';
  export const metadata: Metadata = {
    title: 'LeenAI — Blog (AI Pilots)',
    description: 'Updates and guides on AI pilots in KSA: scope, KPIs, guardrails, and acceptance best practices.',
    openGraph: { images: ['/og/home.png'] }
  };

export default function Page() {
  return (
    <div className="container section">
      <h1>Blog</h1>
      <ul>
        <li><a href="/blog/ai-pilot-studio-ksa">AI Pilot Studio in KSA: What to expect in 6–8 weeks</a></li>
      </ul>
    </div>
  );
}
