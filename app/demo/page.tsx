'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';

export default function DemoPage() {
  useEffect(() => {
    // Injection dynamique du script v1.js avec une clé API de test pour simuler un client
    const script = document.createElement('script');
    script.src = '/v1.js';
    script.setAttribute('data-api-key', 'mph_live_demo123');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans p-8 md:p-16">
      {/* En-tête de démonstration */}
      <header className="max-w-4xl mx-auto flex justify-between items-center mb-16 border-b border-slate-800 pb-6">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 rounded-full bg-indigo-500 morphic-glow" style={{ backgroundColor: 'var(--morphic-primary, #6366f1)' }} />
          <span className="font-bold text-lg tracking-wide">Site Client Externe (Démo)</span>
        </div>
        <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          Propulsé par Morphic Engine v1
        </span>
      </header>

      {/* Contenu principal interactif */}
      <main className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Interface 3D Spatiale <span className="text-indigo-400" style={{ color: 'var(--morphic-primary, #6366f1)' }}>en un script.</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Bouge ta souris sur cette page. Les éléments réagissent dynamiquement en profondeur grâce au script <code className="text-pink-400 font-mono text-sm">v1.js</code> injecté à la volée.
          </p>
          <div className="flex space-x-4 pt-4">
            <button className="morphic-interactive px-6 py-3 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg transition-all" style={{ backgroundColor: 'var(--morphic-primary, #6366f1)' }}>
              Tester l'effet
            </button>
            <a href="/" className="px-6 py-3 rounded-xl font-semibold bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 transition-all text-center">
              Retour au Dashboard
            </a>
          </div>
        </div>

        {/* Élément à forte profondeur spatiale */}
        <div className="morphic-interactive p-8 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl relative overflow-hidden group" data-morphic-depth="0.15">
          <div className="absolute -right-12 -top-12 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-pink-500/20 transition-all duration-500" />
          <h3 className="text-xl font-bold mb-3">Panneau Paramétrable</h3>
          <p className="text-slate-400 text-sm mb-6">
            Ce bloc flotte et pivoue en temps réel en suivant le curseur de la souris avec un multiplicateur de profondeur personnalisé.
          </p>
          <div className="space-y-3 font-mono text-xs text-indigo-300 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
            <div>&gt; API Key: mph_live_demo123</div>
            <div>&gt; Status: Connecté &amp; Actif</div>
            <div>&gt; Depth Factor: 0.08</div>
          </div>
        </div>
      </main>
    </div>
  );
}