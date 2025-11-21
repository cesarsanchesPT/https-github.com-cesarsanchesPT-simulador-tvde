
const CACHE_NAME = 'tvde-pro-v4';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
];

// Instalação: Cache dos ficheiros essenciais
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting(); // Força o novo service worker a assumir o controlo imediatamente
});

// Ativação: Limpar caches antigas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim(); // Assume o controlo de todas as páginas abertas
});

// Interceptação de pedidos (Fetch)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache Hit - return response
      if (response) {
        return response;
      }
      // Clone the request
      const fetchRequest = event.request.clone();

      return fetch(fetchRequest).then((response) => {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Clone the response
        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          // Apenas cache de ficheiros locais ou CDN específicos se necessário
          if (event.request.url.startsWith('http')) {
             cache.put(event.request, responseToCache);
          }
        });

        return response;
      }).catch(() => {
        // Se falhar (offline) e não estiver em cache
        // Poderíamos retornar uma página de fallback aqui
      });
    })
  );
});