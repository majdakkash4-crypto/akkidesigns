import KontaktForm from '@/components/KontaktForm';

export const metadata = {
  title: 'Kontakt | AKKI DESIGNS',
  description: 'So erreichst du uns – schnell & unkompliziert.',
};

export default function Kontakt() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-32">
      <h1 className="text-4xl font-bold mb-2">Kontakt</h1>
      <p className="mb-8 opacity-80">Schreib uns – wir antworten innerhalb von 24 Stunden.</p>

      <div className="glass p-8">
        <KontaktForm />
      </div>

      <div className="mt-12 glass p-6 text-center">
        <p className="mb-2">Oder direkt per E-Mail:</p>
        <a href="mailto:support@akkidesigns.de" className="text-accent hover:underline">
          support@akkidesigns.de
        </a>
      </div>
    </main>
  );
}
