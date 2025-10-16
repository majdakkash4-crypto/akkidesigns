export default function Leistungen() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto glass p-8">
        <h1 className="text-4xl font-bold mb-6">Unsere Leistungen</h1>

        <div className="space-y-6">
          <div className="glass p-6">
            <h2 className="text-2xl font-semibold text-cyan-400">3D-Websites</h2>
            <p>Beeindrucke deine Besucher mit interaktiven 3D-Erlebnissen direkt im Browser.</p>
          </div>

          <div className="glass p-6">
            <h2 className="text-2xl font-semibold text-cyan-400">KI-Call-Agenten</h2>
            <p>Automatisiere Kundenanrufe mit natürlicher Sprach-KI – 24/7 erreichbar.</p>
          </div>

          <div className="glass p-6">
            <h2 className="text-2xl font-semibold text-cyan-400">Smarte Chatbots</h2>
            <p>Intelligente Antworten auf deiner Website – sofort, ohne Wartezeit.</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="mailto:Support@akkidesigns.de" className="btn-accent inline-block">
            Anfrage senden
          </a>
        </div>
      </div>
    </main>
  );
}
