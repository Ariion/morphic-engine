(function () {
  'use strict';

  // 1. Extraction de la clé API depuis la balise script
  const currentScript = document.currentScript || document.querySelector('script[data-api-key]');
  if (!currentScript) {
    console.warn('[Morphic Engine] Balise script introuvable.');
    return;
  }

  const apiKey = currentScript.getAttribute('data-api-key');
  if (!apiKey) {
    console.warn('[Morphic Engine] Clé API manquante (data-api-key).');
    return;
  }

  // 2. Configuration par défaut (Fallback si l'API est hors ligne)
  let config = {
    primaryColor: '#6366f1',
    accentColor: '#ec4899',
    depthFactor: 0.08,
    spatialEnabled: true
  };

  // 3. Application des styles dynamiques dans le DOM client
  function applyTheme(tokens) {
    const root = document.documentElement;
    root.style.setProperty('--morphic-primary', tokens.primaryColor);
    root.style.setProperty('--morphic-accent', tokens.accentColor);

    // Injection d'un style global si absent
    if (!document.getElementById('morphic-engine-style')) {
      const styleEl = document.createElement('style');
      styleEl.id = 'morphic-engine-style';
      styleEl.textContent = `
        .morphic-interactive {
          transition: transform 0.1s ease-out, box-shadow 0.2s ease;
          will-change: transform;
        }
        .morphic-glow {
          box-shadow: 0 0 25px var(--morphic-primary);
        }
      `;
      document.head.appendChild(styleEl);
    }
  }

  // 4. Moteur d'interaction spatiale (Parallaxe & Mouvement)
  function initSpatialEngine(depthFactor) {
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    function renderFrame() {
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      const elements = document.querySelectorAll('.morphic-interactive, [data-morphic-depth]');
      elements.forEach((el) => {
        const customDepth = parseFloat(el.getAttribute('data-morphic-depth')) || depthFactor;
        const moveX = targetX * customDepth * 50;
        const moveY = targetY * customDepth * 50;
        el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0px) rotateX(${-moveY * 0.1}deg) rotateY(${moveX * 0.1}deg)`;
      });

      requestAnimationFrame(renderFrame);
    }

    renderFrame();
  }

  // 5. Chargement de la configuration via l'API Edge
  async function fetchConfiguration() {
    try {
      // Simulation ou appel réel à ton endpoint API
      const res = await fetch(`/api/v1/config?key=${apiKey}`).catch(() => null);
      if (res && res.ok) {
        const data = await res.json();
        config = { ...config, ...data };
      }
    } catch (e) {
      console.log('[Morphic Engine] Mode fallback activé.');
    } finally {
      applyTheme(config);
      if (config.spatialEnabled) {
        initSpatialEngine(config.depthFactor);
      }
    }
  }

  // Initialisation au chargement du DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fetchConfiguration);
  } else {
    fetchConfiguration();
  }
})();