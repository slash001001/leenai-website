  import type { Metadata } from 'next';
  export const metadata: Metadata = {
    title: 'لينAI — الحلول',
    openGraph: { images: ['/og/solutions.png'] }
  };

export default function Page() {
  return (
    <div dir="rtl" className="container section">
      <h1>الحلول</h1>
      <p>ثلاث مسارات عملية — بايلوت مركز بنتائج خلال 6–8 أسابيع.</p>
      <ul>
        <li><a href="/solutions/ai-pilot-studio">AI Pilot Studio</a></li>
        <li><a href="/solutions/rfq-to-quote">SmartQuote (RFQ → Quote)</a></li>
        <li><a href="/solutions/cafe-data-platform">منصة بيانات المقاهي</a></li>
      </ul>
    </div>
  );
}

