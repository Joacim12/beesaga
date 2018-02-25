let cacheName = 'BeeSagaV0.0.01';
let filesToCache = [
    '/',
    '/index.html',
    '/sw.js',
    '/manifest.json',
    '/scripts/app.js',
    '/scripts/sketch.js',
    '/scripts/p5/p5.dom.js',
    '/scripts/p5/p5.js',
    '/scripts/p5/p5.min.js',
    '/scripts/p5/p5.dom.min.js',
    '/scripts/p5/p5.sound.js',
    '/scripts/p5/p5.sound.min.js',
    '/resources/css/App.css',
    '/resources/images/logoStuff/bi.png',
    '/resources/images/logoStuff/favicon.ico',
    '/resources/images/logoStuff/favicon-16x16.png',
    '/resources/images/logoStuff/favicon-32x32.png',
    '/resources/images/logoStuff/logo192.png',
    '/resources/images/logoStuff/logo512.png'
];


self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    self.skipWaiting();
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});
self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key !== cacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function (e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
