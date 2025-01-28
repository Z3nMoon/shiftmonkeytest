const CACHE_NAME = "shiftmonkey-cache-v1";
const assetsToCache = [
    "./",
    "./index.html",
    "./game.js",
    "./manifest.json",
    "./icon-192x192.png",
    "./icon-512x512.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(assetsToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
