import { NextResponse } from 'next/server';

export async function GET() {
  const jsContent = `
(function() {
  console.log('🚀 Morphic Engine v1.0 initialisé...');

  const scriptTag = document.currentScript || document.querySelector('script[data-api-key]');
  const apiKey = scriptTag ? scriptTag.getAttribute('data-api-key') : null;

  if (!apiKey) {
    console.warn('⚠️ Morphic Engine: Aucune clé API (data-api-key) détectée.');
    return;
  }

  let baseUrl = 'https://morphic-engine-sable.vercel.app';
  if (scriptTag && scriptTag.src) {
    try {
      const url = new URL(scriptTag.src);
      baseUrl = url.origin;
    } catch (e) {
      baseUrl = window.location.origin;
    }
  }

  fetch(\`\${baseUrl}/api/projects/\${apiKey}\`)
    .then((res) => {
      if (!res.ok) throw new Error('Impossible de charger la configuration du projet.');
      return res.json();
    })
    .then((project) => {
      const tokens = project.theme_tokens || {};
      const primaryColor = tokens.primaryColor || '#6366f1';
      const accentColor = tokens.accentColor || '#ec4899';
      const depthFactor = typeof tokens.depthFactor === 'number' ? tokens.depthFactor : 0.08;
      const spatialEnabled = project.spatial_enabled !== false;

      document.documentElement.style.setProperty('--morphic-primary', primaryColor);
      document.documentElement.style.setProperty('--morphic-accent', accentColor);

      const buttons = document.querySelectorAll('.morphic-btn');
      buttons.forEach((btn) => {
        btn.style.backgroundColor = accentColor;
        btn.style.color = '#ffffff';
        btn.style.transition = 'all 0.2s ease';
      });

      if (spatialEnabled) {
        const interactiveElements = document.querySelectorAll('.morphic-interactive');

        window.addEventListener('mousemove', (e) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;

          const x = (clientX / innerWidth - 0.5) * 2;
          const y = (clientY / innerHeight - 0.5) * 2;

          interactiveElements.forEach((el) => {
            const customDepth = el.getAttribute('data-morphic-depth');
            const depth = customDepth ? parseFloat(customDepth) : depthFactor;

            const tiltX = -y * 25 * depth * 10;
            const tiltY = x * 25 * depth * 10;

            el.style.transform = \`perspective(1000px) rotateX(\${tiltX}deg) rotateY(\${tiltY}deg) translateZ(\${depth * 200}px)\`;
            el.style.transition = 'transform 0.1s ease-out';
          });
        });
      }
    })
    .catch((err) => console.error('Morphic Engine Error:', err));
})();
  `;

  return new NextResponse(jsContent, {
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
      'Cache-Control': 'public, max-age=60, s-maxage=60',
      'Access-Control-Allow-Origin': '*',
    },
  });
}