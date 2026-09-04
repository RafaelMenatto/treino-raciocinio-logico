const CACHE_NAME = 'raciocinio-v5';
const MAX_CACHE = 60;
const ASSETS = [
    './index.html',
    './manifest.json'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache =>
            Promise.allSettled(ASSETS.map(url => cache.add(url).catch(() => {})))
        ).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then(cached => cached || fetch(e.request).then(resp => {
            if (resp.ok && e.request.method === 'GET') {
                const clone = resp.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(e.request, clone);
                    cache.keys().then(keys => {
                        if (keys.length > MAX_CACHE) cache.delete(keys[0]);
                    });
                });
            }
            return resp;
        }).catch(() => caches.match('./index.html')))
    );
});