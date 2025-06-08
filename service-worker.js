self.addEventListener('install', function(event) {
  console.log('[ServiceWorker] Install');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});