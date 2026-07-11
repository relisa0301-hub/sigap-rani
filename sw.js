const CACHE_NAME = "sigap-rani-v1";

const urlsToCache = [
  "/sigap-rani/",
  "/sigap-rani/index.html",
  "/sigap-rani/style.css",
  "/sigap-rani/script.js",
  "/sigap-rani/manifest.json",
  "/sigap-rani/img/logo.png",
  "/sigap-rani/img/fotoguru.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});
