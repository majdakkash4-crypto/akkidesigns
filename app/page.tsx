'use client';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import ChatBot from '@/components/ChatBot';

const RobotSpline = dynamic(() => import('@/components/RobotSpline'), { ssr: false });

export default function Home() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        {/* 3D-Roboter */}
        <div className="absolute inset-0 z-0">
          <RobotSpline />
        </div>

        {/* Content */}
        <div className="relative z-10 glass p-8 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            AKKI <span className="text-accent">DESIGNS</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            3D-Websites, KI-Call-Agenten & smarter Chatbot-Service – aus einer Hand.
          </p>
          <Link href="#kontakt" scroll={false}>
            <button className="btn-accent mt-6">Jetzt kontaktieren</button>
          </Link>
        </div>

        {/* Floating Chat-Bot */}
        <ChatBot />
      </section>

      {/* Kontakt-Sprungmarke */}
      <section id="kontakt" className="py-20 px-6">
        <div className="max-w-3xl mx-auto glass p-8">
          <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
          <p className="mb-6">Schreib uns – wir melden uns innerhalb von 24 h.</p>
          <KontaktForm />
        </div>
      </section>
    </>
  );
}
