'use client';
import { useState } from 'react';

export default function KontaktForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch('/api/kontakt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) setSent(true);
  };

  if (sent) return <p className="text-cyan-400">Danke! Wir melden uns innerhalb von 24 h an support@akkidesigns.de</p>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" type="text" placeholder="Name" required className="w-full glass p-3 focus:outline-none" />
      <input name="email" type="email" placeholder="E-Mail" required className="w-full glass p-3 focus:outline-none" />
      <textarea name="message" placeholder="Nachricht" required rows={4} className="w-full glass p-3 focus:outline-none" />
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" required className="accent-cyan-400" />
        Ich stimme der Verarbeitung meiner Daten zu (DSGVO).
      </label>
      <button type="submit" className="btn-accent">Absenden</button>
    </form>
  );
}
