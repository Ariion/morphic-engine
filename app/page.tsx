'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Zap, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  Code2, 
  Globe2, 
  Check 
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Barre de navigation */}
      <nav className="border-b border-slate-800/80 bg-slate-950/50 backdrop-blur-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-white">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/30">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <span>Morphic Engine</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/dashboard/projects/prj_demo"
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Démo Dashboard
            </Link>
            <Link
              href="/dashboard/projects/prj_demo"
              className="px-4 py-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg shadow-md shadow-indigo-600/20 transition-all flex items-center gap-1.5"
            >
              Lancer l'outil <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center relative overflow-hidden">
        {/* Glow de fond */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" /> Le Premier Moteur d'Interfaces Spatiales & Génératives
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Transformez votre site Web 2D en une <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Expérience Spatiale</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal">
          Une seule ligne de script JavaScript à copier-coller. Générez des effets 3D WebGL, adaptez les couleurs en temps réel et augmentez vos conversions.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/dashboard/projects/prj_demo"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-xl shadow-indigo-600/25 transition-all text-base flex items-center justify-center gap-2"
          >
            Créer un projet gratuitement <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="#embed-code"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold rounded-xl border border-slate-800 transition-all text-base"
          >
            Voir le script integration
          </a>
        </div>

        {/* Aperçu Code */}
        <div id="embed-code" className="mt-16 max-w-2xl mx-auto text-left bg-slate-900/90 border border-slate-800 rounded-xl p-4 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2 border-b border-slate-800 pb-2">
            <span className="flex items-center gap-1.5 font-mono"><Code2 className="w-4 h-4 text-indigo-400" /> Intégration en 5 secondes</span>
            <span>HTML / Next.js / Shopify / Webflow</span>
          </div>
          <pre className="text-xs sm:text-sm font-mono text-indigo-300 overflow-x-auto p-2">
            <code>{`<script src="https://morphic-engine.vercel.app/v1.js" data-api-key="mph_live_demo123" async></script>`}</code>
          </pre>
        </div>
      </section>

      {/* Grille de Fonctionnalités */}
      <section className="py-20 px-6 border-t border-slate-900 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Pourquoi Morphic Engine est indispensable ?</h2>
            <p className="text-slate-400 mt-2">La technologie Web3D et générative condensée dans un script ultra-léger (&lt; 15 KB).</p>       
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Accélération WebGPU & 3D</h3>
              <p className="text-slate-400 text-sm">Rendu fluide à 60 FPS sans ralentir la vitesse de chargement ni le SEO de votre site principal.</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center text-pink-400 mb-6">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Prêt pour le Spatial Web</h3>
              <p className="text-slate-400 text-sm">Vos composants réagissent au pointeur de la souris et s'adaptent nativement aux casques AR/VR.</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Propagation Edge CDN</h3>
              <p className="text-slate-400 text-sm">Modifiez vos couleurs et vos règles de comportement dans le dashboard : le changement est mondial en 60 secondes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grille de Tarifs */}
      <section className="py-20 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Tarifs Simples et Transparents</h2>
            <p className="text-slate-400 mt-2">Commencez gratuitement, évoluez selon votre trafic.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Starter</h3>
                <p className="text-slate-400 text-xs mt-1">Pour les créateurs et indies</p>
                <div className="mt-6 text-3xl font-extrabold text-white">49 € <span className="text-sm font-normal text-slate-400">/mois</span></div>
                <ul className="mt-6 space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 1 Projet actif</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Jusqu'à 50 000 vues/mois</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Effets Spatiaux Standard</li>
                </ul>
              </div>
              <Link href="/dashboard/projects/prj_demo" className="mt-8 w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold text-center block">Commencer</Link>
            </div>

            {/* Pro / Agence */}
            <div className="bg-gradient-to-b from-indigo-950/80 to-slate-900 border-2 border-indigo-500 rounded-2xl p-8 flex flex-col justify-between relative shadow-2xl shadow-indigo-600/10">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">Populaire</span>
              <div>
                <h3 className="text-lg font-bold text-white">Agency Pro</h3>
                <p className="text-indigo-300 text-xs mt-1">Pour les studios et agences web</p>
                <div className="mt-6 text-3xl font-extrabold text-white">299 € <span className="text-sm font-normal text-slate-400">/mois</span></div>
                <ul className="mt-6 space-y-3 text-xs text-indigo-100">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400" /> 10 Projets clients</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400" /> Vues illimitées</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400" /> Moteur 3D WebGL Avancé</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400" /> Marque blanche (White-label)</li>
                </ul>
              </div>
              <Link href="/dashboard/projects/prj_demo" className="mt-8 w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold text-center block shadow-lg shadow-indigo-600/30">Essai Gratuit 14 jours</Link>
            </div>

            {/* Enterprise */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Enterprise</h3>
                <p className="text-slate-400 text-xs mt-1">Grands comptes & e-commerce</p>
                <div className="mt-6 text-3xl font-extrabold text-white">2 500 € <span className="text-sm font-normal text-slate-400">/mois</span></div>
                <ul className="mt-6 space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Projets illimités</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> SLA support 24/7 dédié</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Intégration SI sur-mesure</li>
                </ul>
              </div>
              <Link href="/dashboard/projects/prj_demo" className="mt-8 w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold text-center block">Contacter la vente</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-600">
        © 2026 Morphic Engine. Tous droits réservés.
      </footer>
    </div>
  );
}