
'use client';
import { useState } from 'react';

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean|null>(null);
  const [error, setError] = useState<string>('');
  const [pdpl, setPdpl] = useState(false);

  async function onSubmit(e: any) {
    e.preventDefault();
    setError('');
    setOk(null);
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get('name'),
      company: form.get('company'),
      email: form.get('email'),
      phone: form.get('phone'),
      message: form.get('message'),
      pdplConsent: pdpl
    };
    if (!payload.name || !payload.email || !pdpl) {
      setError('الاسم والبريد والموافقة مطلوبة.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'فشل الإرسال');
      setOk(true);
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'lead_submit', {event_label: 'contact_form_ar'});
      }
      (e.target as HTMLFormElement).reset();
      setPdpl(false);
    } catch (err: any) {
      setOk(false);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div dir="rtl" className="container section">
      <h1>التواصل</h1>
      <p>لنحدّد بايلوت يناسب احتياجك. أو <a href="https://calendar.google.com/" data-ga="book_call" data-label="google_calendar_ar" target="_blank" rel="noreferrer">احجز مكالمة 30 دقيقة</a>.</p>
      <form onSubmit={onSubmit} className="form">
        <div className="grid">
          <label>الاسم الكامل*<input name="name" type="text" required placeholder="اسمك" /></label>
          <label>الشركة<input name="company" type="text" placeholder="اسم الشركة" /></label>
          <label>البريد الإلكتروني*<input name="email" type="email" required placeholder="you@company.com" /></label>
          <label>الهاتف (اختياري)<input name="phone" type="tel" placeholder="+9665..." /></label>
        </div>
        <label>كيف نساعدك؟<textarea name="message" rows={5} placeholder="مثال: نحتاج تسريع عروض الأسعار؛ أو شات داخلي للسياسات..."></textarea></label>
        <label className="pdpl">
          <input type="checkbox" checked={pdpl} onChange={e=>setPdpl(e.target.checked)} />
          <span>أوافق على معالجة لينAI لبيانات التواصل لغرض الاتصال بخصوص البايلوت. يتم تقليل البيانات والاحتفاظ ≤ 90 يوم ما لم يُوقّع عقد. راجع <a href="/privacy" target="_blank" rel="noreferrer">الخصوصية</a>.</span>
        </label>
        <button className="btn" type="submit" disabled={loading}>{loading ? 'جار الإرسال…' : 'إرسال'}</button>
        {ok && <p className="ok">شكرًا — سنعاودك خلال يوم عمل.</p>}
        {ok===false && <p className="error">تعذّر الإرسال: {error}</p>}
      </form>
    </div>
  );
}
