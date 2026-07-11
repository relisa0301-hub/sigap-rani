const CACHE_NAME="sigap-rani-v1";

const FILES=[
"./",
"./index.html",
"./style.css",
"./script.js",
"./img/logo.png",
"./img/icon-192.png",
"./img/icon-512.png"
];


self.addEventListener("install",event=>{
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache=>cache.addAll(FILES))
);
});


self.addEventListener("fetch",event=>{
event.respondWith(
caches.match(event.request)
.then(response=>{
return response || fetch(event.request);
})
);
});
