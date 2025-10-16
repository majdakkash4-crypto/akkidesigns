'use client';
import { useState } from 'react';

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const [history, setHistory] = useState([
    { role: 'assistant', content: 'Hallo! Ich bin KAI – frag mich alles zu 3D-Websites & KI-Agents.' },
  ]);

  const send = async () => {
    if (!msg.trim()) return;
    const newHist = [...history, { role: 'user', content: msg }];
    setHistory(newHist);
    setMsg('');

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: newHist }),
    });
    const { reply } = await res.json();
    setHistory([...newHist, { role: 'assistant', content: reply }]);
  };

  return (
    <>
      {/* Trigger-Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-accent text-black rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-cyan-500 transition z-50"
      >
        💬
      </button>

      {/* Chat-Fenster */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 glass p-4 flex flex-col z-50">
          <div className="font-semibold mb-2">KAI – KI Assistent</div>
          <div className="flex-1 space-y-2 text-sm max-h-64 overflow-auto">
            {history.map((h, i) => (
              <div key={i} className={h.role === 'user' ? 'text-right text-cyan-300' : 'text-left text-white'}>
                {h.content}
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-3">
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Frage stellen ..."
              className="flex-1 bg-black/50 border border-white/20 rounded px-3 py-1 text-white focus:outline-none"
            />
            <button onClick={send} className="btn-accent px-3">➤</button>
          </div>
        </div>
      )}
    </>
  );
}
