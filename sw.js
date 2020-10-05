var CACHE_NAME = 'cache-v1';
const RUNTIME = 'runtime';

var urlsToCache = [
    './',
    './src/index.js',
    './src/App.js',
    './src/components/HelloWorld.js',
    './src/containers/index.js',
    './public/favicon.ico',
    './public/index.html'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll([
            './',
            './src/index.js',
            './src/App.js',
            './src/components/HelloWorld.js',
            
        ]);
      })
  );
});

self.addEventListener('fetch', function(event) {
event.respondWith(
    caches.match(event.request)
    .then(function(response) {
        // Cache hit - return response
        if (response) {
        return response;
        }

        return fetch(event.request).then(
        function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
            return response;
            }

            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
            .then(function(cache) {
                cache.put(event.request, responseToCache);
            });

            return response;
        }
        );
    })
    );
});

self.addEventListener('activate', event => {
    const currentCaches = [CACHE_NAME, RUNTIME];
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
      }).then(cachesToDelete => {
        return Promise.all(cachesToDelete.map(cacheToDelete => {
          return caches.delete(cacheToDelete);
        }));
      }).then(() => self.clients.claim())
    );
});