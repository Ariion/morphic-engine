import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Morphic Engine',
  description: 'Moteur d\'interfaces spatiales & Jetons graphiques',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}