'use client';

import React, { useState, use } from 'react';
import { 
  Key, 
  Copy, 
  Check, 
  Eye, 
  Layers, 
  Globe, 
  Save, 
  Sliders, 
  ShieldCheck,
  RefreshCw
} from 'lucide-react';

interface ThemeTokens {
  primaryColor: string;
  accentColor: string;
  depthFactor: number;
}

interface ProjectData {
  id: string;
  name: string;
  domain: string;
  apiKey: string;
  spatialEnabled: boolean;
  themeTokens: ThemeTokens;
}

export default function ProjectDashboardPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const resolvedParams = use(params);

  const [project, setProject] = useState<ProjectData>({
    id: resolvedParams.id || 'prj_98234719',
    name: 'E-Commerce Spatial Store',
    domain: 'https://store.acme.com',
    apiKey: 'mph_live_9a8f7d6e5c4b3a210987',
    spatialEnabled: true,
    themeTokens: {
      primaryColor: '#6366f1',
      accentColor: '#ec4899',
      depthFactor: 0.08,
    },
  });

  const [copied, setCopied] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<'design' | 'embed'>('design');

  const scriptSnippet = `<script src="https://cdn.morphic.engine/v1.js" data-api-key="${project.apiKey}" async></script>`;

  const handleCopyScript = () => {
    navigator.clipboard.writeText(scriptSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveConfig = async () => {
    setIsSaving(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      alert('Configuration mise à jour avec succès !');
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
              <Layers className="w-7 h-7 text-indigo-500" />
              {project.name}
            </h1>
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center gap-1">
              <Globe className="w-3 h-3" /> {project.domain}
            </span>
          </div>
          <p className="text-slate-400 text-sm mt-1">
            Gérez l'interface spatiale et les jetons graphiques en temps réel.
          </p>
        </div>

        <button
          onClick={handleSaveConfig}
          disabled={isSaving}
          className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium shadow-lg shadow-indigo-600/20 transition-all disabled:opacity-50"
        >
          {isSaving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {isSaving ? 'Enregistrement...' : 'Sauvegarder'}
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex space-x-1 rounded-xl bg-slate-900 p-1 border border-slate-800">
            <button
              onClick={() => setActiveTab('design')}
              className={`w-full py-2.5 text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-all ${
                activeTab === 'design' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sliders className="w-4 h-4" /> Jetons Graphiques
            </button>
            <button
              onClick={() => setActiveTab('embed')}
              className={`w-full py-2.5 text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-all ${
                activeTab === 'embed' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Key className="w-4 h-4" /> Clé API & Intégration
            </button>
          </div>

          {activeTab === 'design' && (
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">Couleur Principale</label>
                  <div className="flex items-center gap-3 bg-slate-950 p-2 rounded-lg border border-slate-800">
                    <input
                      type="color"
                      value={project.themeTokens.primaryColor}
                      onChange={(e) =>
                        setProject({
                          ...project,
                          themeTokens: { ...project.themeTokens, primaryColor: e.target.value },
                        })
                      }
                      className="w-8 h-8 rounded cursor-pointer bg-transparent border-0"
                    />
                    <input
                      type="text"
                      value={project.themeTokens.primaryColor}
                      onChange={(e) =>
                        setProject({
                          ...project,
                          themeTokens: { ...project.themeTokens, primaryColor: e.target.value },
                        })
                      }
                      className="bg-transparent text-sm font-mono text-white focus:outline-none w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">Couleur d'Accent</label>
                  <div className="flex items-center gap-3 bg-slate-950 p-2 rounded-lg border border-slate-800">
                    <input
                      type="color"
                      value={project.themeTokens.accentColor}
                      onChange={(e) =>
                        setProject({
                          ...project,
                          themeTokens: { ...project.themeTokens, accentColor: e.target.value },
                        })
                      }
                      className="w-8 h-8 rounded cursor-pointer bg-transparent border-0"
                    />
                    <input
                      type="text"
                      value={project.themeTokens.accentColor}
                      onChange={(e) =>
                        setProject({
                          ...project,
                          themeTokens: { ...project.themeTokens, accentColor: e.target.value },
                        })
                      }
                      className="bg-transparent text-sm font-mono text-white focus:outline-none w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'embed' && (
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 space-y-4">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" /> Script universel
              </h2>
              <div className="relative bg-slate-950 rounded-lg p-4 border border-slate-800 font-mono text-xs text-slate-300">
                <code>{scriptSnippet}</code>
                <button
                  onClick={handleCopyScript}
                  className="absolute top-3 right-3 p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-md border border-slate-700"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-5">
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 sticky top-8 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-sm font-semibold text-white flex items-center gap-2">
                <Eye className="w-4 h-4 text-indigo-400" /> Aperçu du Rendu Direct
              </h2>
            </div>
            <div
              className="w-full h-64 rounded-lg border border-slate-800 relative flex flex-col justify-between p-6"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${project.themeTokens.primaryColor}22 0%, #020617 100%)`,
              }}
            >
              <span className="text-xs font-mono text-slate-300">Aperçu Réactif</span>
              <button
                className="w-full py-2 px-4 rounded font-medium text-xs text-white"
                style={{ backgroundColor: project.themeTokens.accentColor }}
              >
                Bouton Généré
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}