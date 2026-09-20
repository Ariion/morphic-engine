import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-slate-950 text-slate-100">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
        Morphic Engine
      </h1>
      <p className="text-slate-400 max-w-md mb-8 text-sm md:text-base">
        Plateforme d'administration des jetons graphiques et du rendu spatial 3D.
      </p>
      <Link
        href="/dashboard/projects/prj_98234719"
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-indigo-600/20"
      >
        Ouvrir le Dashboard
      </Link>
    </main>
  );
}