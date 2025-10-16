'use client';
import dynamic from 'next/dynamic';
import ChatBot from '@/components/ChatBot';

const RobotSpline = dynamic(() => import('@/components/RobotSpline'), { ssr: false });

export default function Home() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        {/* 3D-Roboter im Hintergrund */}
        <div className="absolute inset-0 z-0">
          <RobotSpline />
        </div>

        {/* Inhalt */}
        <div className="relative z-10 glass p-8 max-w-2xl">
          {/* Logo + Titel */}
          <img src="/logo.png" alt="A&K Designs Logo" className="mx-auto h-24 mb-4" />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            A&K Designs <span className="text-cyan-400">& KI</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            3D-Websites, KI-Call-Agenten & smarter Chatbot-Service – alles aus einer Hand.
          </p>

          {/* Button öffnet direkt E-Mail -->
          <a
            href="mailto:Support@akkidesigns.de"
            className="btn-accent mt-6 inline-block"
          >
            Jetzt kontaktieren
          </a>
        </div>

        {/* Floating Chat-Bot */}
        <ChatBot />
      </section>
    </>
  );
}
