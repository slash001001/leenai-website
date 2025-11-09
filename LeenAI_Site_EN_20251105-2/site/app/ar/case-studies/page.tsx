  import type { Metadata } from 'next';
  export const metadata: Metadata = {
    title: 'لينAI — دراسات حالة',
    openGraph: { images: ['/og/case-studies.png'] }
  };

export default function Page() {
  return (
    <div dir="rtl" className="container section">
      <h1>دراسات حالة</h1>
      <p>قوالب: الهدف → المنهجية → البيانات/الأدوات → التغير في KPI → الخطوة التالية.</p>
    </div>
  );
}

