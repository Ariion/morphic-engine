'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Copy, 
  Check, 
  Save, 
  Sparkles, 
  Eye, 
  Sliders, 
  Code, 
  Palette,
  RefreshCw
} from 'lucide-react';

export default function ProjectDashboard({ params }: { params: Promise<{ id: string }> }) {
  // Dépaquetage des paramètres pour Next.js 15
  const resolvedParams = React.use(params);
  const projectId = resolvedParams.id;

  // États du projet
  const [projectName, setProjectName] = useState("Projet E-commerce 3D");
  const [primaryColor, setPrimaryColor] = useState("#6366f1");
  const [accentColor, setAccentColor] = useState("#ec4899");
  const [depthMultiplier, setDepthMultiplier] = useState(0.15);
  const [glowEnabled, setGlowEnabled] = useState(true);
  const [maxTilt, setMaxTilt] = useState(15);
  const [copied, setCopied] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Script d'intégration généré dynamiquement
  const scriptCode = `<script src="https://morphic-engine-sable.vercel.app/v1.js" data-api-key="mph_live_${projectId}" async></script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(scriptCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 md:p-10">
      {/* Header & Navigation */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div className="flex items-center gap-4">
          <Link 
            href="/dashboard" 
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="bg-transparent text-2xl font-bold text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded px-1"
              />
              <span className="text-xs px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 font-mono">
                ID: {projectId}
              </span>
            </div>
            <p className="text-sm text-slate-400 mt-1">Configurez le comportement spatial et le design en temps réel.</p>
          </div>
        </div>

        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition shadow-lg shadow-indigo-600/20 disabled:opacity-50"
        >
          {isSaving ? (
            <RefreshCw className="w-4 h-4 animate-spin" />
          ) : savedSuccess ? (
            <Check className="w-4 h-4 text-emerald-400" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          {isSaving ? "Sauvegarde..." : savedSuccess ? "Enregistré !" : "Sauvegarder"}
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Colonne de Contrôle */}
        <div className="lg:col-span-6 space-y-6">
          {/* Tag d'intégration */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                <Code className="w-4 h-4" />
                Script d'intégration
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copié !" : "Copier"}
              </button>
            </div>
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 overflow-x-auto select-all">
              {scriptCode}
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Collez ce tag dans la balise <code className="text-slate-400">&lt;head&gt;</code> de votre site web.
            </p>
          </div>

          {/* Style & Thème */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-5">
            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm border-b border-slate-800 pb-3">
              <Palette className="w-4 h-4" />
              Apparence & Thème
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">Couleur Primaire</label>
                <div className="flex items-center gap-3 bg-slate-950 p-2 rounded-xl border border-slate-800">
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="w-8 h-8 rounded cursor-pointer bg-transparent border-0"
                  />
                  <span className="font-mono text-xs uppercase text-slate-300">{primaryColor}</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">Couleur Accent</label>
                <div className="flex items-center gap-3 bg-slate-950 p-2 rounded-xl border border-slate-800">
                  <input
                    type="color"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="w-8 h-8 rounded cursor-pointer bg-transparent border-0"
                  />
                  <span className="font-mono text-xs uppercase text-slate-300">{accentColor}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Réglages Physiques 3D */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-5">
            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm border-b border-slate-800 pb-3">
              <Sliders className="w-4 h-4" />
              Paramètres Physiques 3D
            </div>

            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-slate-400">Intensité de la profondeur (Depth)</span>
                <span className="font-mono text-indigo-400">{depthMultiplier}x</span>
              </div>
              <input
                type="range"
                min="0.01"
                max="0.5"
                step="0.01"
                value={depthMultiplier}
                onChange={(e) => setDepthMultiplier(parseFloat(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-slate-400">Angle d'inclinaison max (Tilt)</span>
                <span className="font-mono text-indigo-400">{maxTilt}°</span>
              </div>
              <input
                type="range"
                min="5"
                max="35"
                step="1"
                value={maxTilt}
                onChange={(e) => setMaxTilt(parseInt(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-medium text-slate-400">Effet Glow volumétrique</span>
              <button
                onClick={() => setGlowEnabled(!glowEnabled)}
                className={`w-12 h-6 rounded-full transition-colors relative p-1 ${
                  glowEnabled ? 'bg-indigo-600' : 'bg-slate-800'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    glowEnabled ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Colonne de Prévisualisation Temps Réel */}
        <div className="lg:col-span-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md h-full flex flex-col">
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                <Eye className="w-4 h-4" />
                Prévisualisation Temps Réel
              </div>
              <span className="text-xs text-slate-500">Rendu du composant</span>
            </div>

            <div className="flex-1 min-h-[380px] bg-slate-950 rounded-xl border border-slate-800/80 p-8 flex items-center justify-center relative overflow-hidden">
              <div
                className="w-full max-w-sm p-6 rounded-2xl border transition-all duration-200 ease-out shadow-2xl relative"
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.95)',
                  borderColor: 'rgba(51, 65, 85, 0.8)',
                  boxShadow: glowEnabled
                    ? `0 20px 40px -15px ${primaryColor}40, 0 0 20px ${accentColor}30`
                    : '0 20px 25px -5px rgba(0,0,0,0.5)',
                  transform: `perspective(1000px) rotateX(4deg) rotateY(-4deg) translateZ(${depthMultiplier * 100}px)`
                }}
              >
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3 shadow-sm"
                  style={{ backgroundColor: primaryColor }}
                >
                  <Sparkles className="w-3 h-3 inline mr-1" />
                  Effet Actif
                </div>

                <h3 className="text-lg font-bold text-white mb-2">Composant Dynamique</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Cette carte réagit aux variables dynamiques injectées par le moteur Morphic.
                </p>

                <button
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white shadow-md transition-transform hover:scale-105"
                  style={{ backgroundColor: accentColor }}
                >
                  Bouton d'Action Spatiale
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}