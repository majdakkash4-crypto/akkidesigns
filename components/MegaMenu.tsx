'use client';

export default function MegaMenu() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90 backdrop-blur-sm p-4 flex items-center justify-between shadow-lg">
      {/* Logo links */}
      <a href="/" className="flex items-center gap-3">
        <img src="/logo.png" alt="A&K Designs Logo" className="h-10" />
        <span className="text-white font-bold text-lg">A&K Designs & KI</span>
      </a>

      {/* Rechts: Leistungen + Button */}
      <nav className="flex items-center gap-4">
        <a href="/leistungen" className="text-white hover:text-cyan-400 transition">
          Leistungen
        </a>
        <a
          href="mailto:Support@akkidesigns.de"
          className="btn-accent inline-block"
        >
          Jetzt kontaktieren
        </a>
      </nav>
    </header>
  );
}
