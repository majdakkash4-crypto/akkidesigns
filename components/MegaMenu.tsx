'use client';
import { useState } from 'react';
import Link from 'next/link';
import CTAButton from './CTAButton';

const megaLinks = [
  { title: 'KI-Call-Agent', desc: 'Automatisierte Telefonie', href: '/#ki-call' },
  { title: '3D-Webdesign', desc: 'Interactive Erlebnisse', href: '/#3d' },
  { title: 'Chatbot-Integration', desc: 'Rund-um-die-Uhr Support', href: '/#chatbot' },
];

export default function MegaMenu() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass m-4">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wider">
          A&K Designs & KI
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <button className="hover:text-accent transition">Leistungen</button>
            <div className="absolute top-full left-0 mt-2 w-64 glass hidden group-hover:block">
              {megaLinks.map((l) => (
                <Link key={l.href} href={l.href} className="block p-4 hover:bg-white/10 transition">
                  <div className="font-semibold">{l.title}</div>
                  <div className="text-sm opacity-80">{l.desc}</div>
                </Link>
              ))}
            </div>
          </div>
          <CTAButton />
        </nav>

        {/* Mobile Hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">☰</button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden glass mt-2 p-4 space-y-4">
          {megaLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block hover:text-accent">
              {l.title}
            </Link>
          ))}
          <CTAButton />
        </div>
      )}
    </header>
  );
}
