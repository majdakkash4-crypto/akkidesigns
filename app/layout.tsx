import './globals.css';
import { Inter } from 'next/font/google';
import MegaMenu from '@/components/MegaMenu';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AKKI DESIGNS | 3D-KI-Websites & Chatbots',
  description: 'Hochmoderne Webauftritte mit 3D-Elementen & KI-Chatbot – Jetzt kontaktieren!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.className}>
      <body className="bg-black text-white">
        <MegaMenu />
        <main>{children}</main>
      </body>
    </html>
  );
}
