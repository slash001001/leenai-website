
  import type { Metadata } from 'next';
  export const metadata: Metadata = {
    title: 'لينAI — بايلوتات ذكاء اصطناعي (6–8 أسابيع)',
    openGraph: { images: ['/og/home.png'] }
  };

export default function Page() {
  return (
    <div dir="rtl">
      <section className="hero container">
        <h1>بايلوتات ذكاء اصطناعي عملية لقطاع الأعمال السعودي — أثر يُقاس خلال 6–8 أسابيع.</h1>
        <p className="small">نقصّر زمن إصدار العروض ≥50%، ونخفض الساعات اليدوية ≥70%، مع امتثال PDPL وخيارات On‑Prem/VPC.</p>
        <p><a className="btn" href="/ar/contact" data-ga="cta_click" data-label="home_ar_hero_cta">احجز تقييمًا سريعًا (30 دقيقة)</a></p>
        <div className="kpi" style={{direction:'ltr'}}>
          <div className="item"><strong>50%</strong><div>أسرع في Time‑to‑Quote</div></div>
          <div className="item"><strong>70%</strong><div>خفض للساعات اليدوية</div></div>
          <div className="item"><strong>6–8</strong><div>أسابيع للأثر</div></div>
        </div>
      </section>

      <section className="section container">
        <h2 className="h2">عروضنا المُمنتجة (Pilot SKUs)</h2>
        <ul className="cards">
          <li>
            <h3>SmartQuote — تسريع عروض الأسعار</h3>
            <p>من RFQ إلى مسودة عرض + بريد خلال ثوانٍ. قبول: TTQ −50%، OCR ≥95%، ≤2% أخطاء حرجة.</p>
            <p><a href="/catalog" data-ga="cta_click" data-label="ar_to_catalog">التفاصيل</a></p>
          </li>
          <li>
            <h3>OpsRAG — إجابات من مستنداتك</h3>
            <p>استرجاع وفقرة/جدول + رد مُستشهد بالمصدر. قبول: دقة ≥85% على حزمة تقييم.</p>
            <p><a href="/catalog" data-ga="cta_click" data-label="ar_to_catalog">التفاصيل</a></p>
          </li>
          <li>
            <h3>CoffeeBrain — قنوات العملاء (واتساب)</h3>
            <p>ردود جاهزة، تصعيد ذكي، وسجلات. قبول: FCR ≥60%، Latency ≤2s.</p>
            <p><a href="/catalog" data-ga="cta_click" data-label="ar_to_catalog">التفاصيل</a></p>
          </li>
        </ul>
      </section>

      <section className="section container">
        <h2 className="h2">أسئلة شائعة</h2>
        <dl className="faq">
          <dt>هل تغادر البيانات السعودية؟</dt>
          <dd>الافتراضي استضافة داخل KSA أو On‑Prem/VPC، مع تقليل بيانات صارم.</dd>
          <dt>مدة البايلوت؟</dt>
          <dd>6–8 أسابيع مع KPIs وقبول واضحين.</dd>
          <dt>ما المطلوب منكم؟</dt>
          <dd>مالك بيانات واحد، وصول قراءة فقط، ومسؤول يعتمد القبول.</dd>
        </dl>
      </section>
    </div>
  );
}