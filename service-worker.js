/* Replace this entire chunk anywhere inside service-worker.js */

// Name of the cache
const CACHE_NAME = 'brutal-trimmer-v1';
// Assets to cache
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/data/functions.js',
  '/assets/favicon/favicon-32x32.png',
  '/assets/favicon/favicon-16x16.png',
  '/assets/favicon/android-chrome-192x192.png',
  '/assets/favicon/android-chrome-512x512.png'
];

// Install event - pre-caching
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(self.skipWaiting())
  );
});

// Activate event - clean old caches if any
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(keyList.map(key => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }))
    )
  );
  self.clients.claim();
});

// Fetch event - serve from cache if available
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cacheResponse => (cacheResponse || fetch(event.request)))
  );
});
