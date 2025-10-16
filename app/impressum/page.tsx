export const metadata = {
  title: 'Impressum | AKKI DESIGNS',
  description: 'Rechtliche Angaben gemäß § 5 TMG',
};

export default function Impressum() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-32">
      <h1 className="text-4xl font-bold mb-8">Impressum</h1>
      <div className="glass p-8 space-y-4">
        <p><strong>Anbieter:</strong> AkkiDesigns</p>
        <p><strong>Geschäftsführer:</strong> [Name eintragen]</p>
        <p><strong>Adresse:</strong> [Straße, PLZ Ort]</p>
        <p><strong>E-Mail:</strong> support@akkidesigns.de</p>
        <p><strong>Telefon:</strong> [optional]</p>
        <p><strong>USt-IdNr.:</strong> [optional]</p>
        <p><strong>Registereintrag:</strong> [optional]</p>
        <p className="text-sm opacity-70 mt-6">
          Quelle: erstellt mit dem Impressum-Generator von AKKI DESIGNS.
        </p>
      </div>
    </main>
  );
}
