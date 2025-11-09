  import type { Metadata } from 'next';
  export const metadata: Metadata = {
    title: 'لينAI — نبذة والامتثال',
    openGraph: { images: ['/og/about.png'] }
  };

export default function Page() {
  return (
    <div dir="rtl" className="container section">
      <h1>عن لينAI</h1>
      <p>نموذج شريك تشغيلي لبايلوتات الذكاء الاصطناعي في السعودية؛ تركيز على الدليل والخصوصية.</p>
      <h2 className="h2">الامتثال</h2>
      <ul>
        <li>PDPL افتراضيًا (نص موافقة + سياسة احتفاظ ≤ 90 يومًا)</li>
        <li>خيارات On‑Prem/VPC؛ استضافة داخل المملكة</li>
        <li>صلاحيات وصول (RBAC)، سجلات تدقيق، وتشفير</li>
      </ul>
    </div>
  );
}

