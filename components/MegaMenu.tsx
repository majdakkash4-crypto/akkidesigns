'use client';

export default function MegaMenu() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800/90 backdrop-blur-sm p-4 flex items-center justify-between shadow-xl">
      {/* Logo links */}
      <a href="/" className="flex items-center gap-3">
        <img src="/logo.png"className="h-10 drop-shadow-lg" />
        <span className="text-white font-bold text-lg">A&K Designs & KI</span>
      </a>

      {/* 3D-Button rechts */}
      <a
        href="mailto:Support@akkidesigns.de"
        className="relative inline-block px-5 py-2 rounded-lg font-semibold text-white
                   bg-gradient-to-br from-cyan-500 to-blue-600
                   shadow-[0_4px_8px_rgba(0,0,0,.4),0_6px_12px_rgba(0,0,0,.3)]
                   transform perspective-1000 rotate-x-0 hover:rotate-x-6
                   transition-transform duration-300 ease-out
                   active:scale-95"
      >
        {/* 3D-Tiefeneffekt innen */}
        <span className="absolute inset-0 rounded-lg bg-black/20 translate-y-1" />
        <span className="relative">Jetzt kontaktieren</span>
      </a>
    </header>
  );
}
