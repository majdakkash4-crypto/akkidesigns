import type { Metadata } from 'next';
import './globals.css';
import MegaMenu from '@/components/MegaMenu';

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
        {/* NEU: 3D-MegaMenü (mit Logo + 3D-Button) */}
        <MegaMenu />

        {/* Alles andere bleibt erhalten */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
