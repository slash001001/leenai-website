import { NextRequest, NextResponse } from 'next/server';
export const runtime = 'nodejs';

type Payload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message?: string;
  pdplConsent?: boolean;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Payload;
    if (!body.name || !body.email || !body.pdplConsent) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
      }
    const lead = {
      ...body,
      submittedAt: new Date().toISOString(),
      ip: req.headers.get('x-forwarded-for') || null,
      ua: req.headers.get('user-agent') || null
    };

    // Attempt email via SMTP if configured
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, LEENAI_LEADS_TO } = process.env as any;

    if (SMTP_HOST && SMTP_USER && SMTP_PASS && LEENAI_LEADS_TO) {
      const nodemailer = await import('nodemailer');
      const transporter = nodemailer.default.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT || 587),
        secure: Number(SMTP_PORT || 587) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS }
      });
      await transporter.sendMail({
        from: `LeenAI Site <${SMTP_USER}>`,
        to: LEENAI_LEADS_TO,
        subject: `New Lead — ${lead.name} (${lead.company || 'N/A'})`,
        text: `New lead from site:\n\n` + JSON.stringify(lead, null, 2)
      });
    } else {
      console.log('Lead (no SMTP configured):', lead);
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('Contact API error:', err);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}