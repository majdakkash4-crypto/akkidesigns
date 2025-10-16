import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const system = {
      role: 'system' as const,
      content: `Du bist KAI von AKKI DESIGNS. Antworte kurz, freundlich und verkaufsstark auf Deutsch.`,
    };

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [system, ...messages],
      max_tokens: 200,
      temperature: 0.7,
    });

    const reply = response.choices[0]?.message?.content || 'Keine Antwort erhalten.';
    return NextResponse.json({ reply });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
