import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // Einfache Mail-to-URL (öffnet Standard-E-Mail-Client)
  const subject = encodeURIComponent(`Kontaktanfrage von ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`);
  const mailto = `mailto:support@akkidesigns.de?subject=${subject}&body=${body}`;

  return NextResponse.json({ mailto });
}
