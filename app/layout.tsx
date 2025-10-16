import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'A&K Designs & KI',
  description: 'KI-Call-Agenten & smarter Chatbot-Service – alles aus einer Hand.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="text-white">
        {/* Navigation mit Glass-Effekt */}
        <header className="fixed top-0 left-0 right-0 z-50 glass p-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold">A&K Designs & KI</a>
          <nav className="space-x-4">
            <a href="/" className="hover:text-cyan-400">Start</a>
            <a href="/leistungen" className="hover:text-cyan-400">Leistungen</a>
            <a href="/kontakt" className="hover:text-cyan-400">Kontakt</a>
          </nav>
        </header>

        {/* Hauptinhalt mit Abstand nach oben (wegen fixer Nav) */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
