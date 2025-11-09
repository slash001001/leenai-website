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
      setError('Name, email, and PDPL consent are required.');
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
      if (!res.ok) throw new Error(json.error || 'Failed to submit');
      setOk(true);
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'lead_submit', {event_label: 'contact_form'});
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
    <div className="container section">
      <h1>Contact</h1>
      <p>Let’s scope a pilot around your bottleneck. Fill the form or <a href="https://calendar.google.com/" data-ga="book_call" data-label="google_calendar" target="_blank" rel="noreferrer">book a 30‑minute assessment</a>.</p>
      <form onSubmit={onSubmit} className="form">
        <div className="grid">
          <label>Full name*<input name="name" type="text" required placeholder="Your name" /></label>
          <label>Company<input name="company" type="text" placeholder="Company name" /></label>
          <label>Email*<input name="email" type="email" required placeholder="you@company.com" /></label>
          <label>Phone (optional)<input name="phone" type="tel" placeholder="+9665..." /></label>
        </div>
        <label>How can we help?<textarea name="message" rows={5} placeholder="e.g., RFQs take too long; WhatsApp support latency; need internal RAG on policies..."></textarea></label>
        <label className="pdpl">
          <input type="checkbox" checked={pdpl} onChange={e=>setPdpl(e.target.checked)} />
          <span>I consent to LeenAI processing my contact details for contacting me about a pilot. Data is minimized and retained ≤ 90 days unless a contract is signed. See <a href="/privacy" target="_blank" rel="noreferrer">Privacy</a> for details.</span>
        </label>
        <button className="btn" type="submit" disabled={loading}>{loading ? 'Sending…' : 'Send'}</button>
        {ok && <p className="ok">Thanks — we’ll get back within 1 business day.</p>}
        {ok===false && <p className="error">Submission failed: {error}</p>}
      </form>
    </div>
  );
}
