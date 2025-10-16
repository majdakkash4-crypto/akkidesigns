import KontaktForm from '@/components/KontaktForm';

export default function Kontakt() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <div className="max-w-3xl mx-auto glass p-8">
        <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
        <p className="mb-6">Schreib uns – wir melden uns innerhalb von 24 h.</p>
        <KontaktForm />
      </div>
    </main>
  );
}
