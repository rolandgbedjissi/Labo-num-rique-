var C="labo-v2",F=["./","./index.html","./Labo%20num%C3%A9rique%20(3).html"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==C}).map(function(n){return caches.delete(n)}))}));self.clients.claim()});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET")return;e.respondWith(caches.open(C).then(function(c){return c.match(e.request).then(function(r){var n=fetch(e.request).then(function(x){if(x&&x.ok)c.put(e.request,x.clone());return x}).catch(function(){return r});return r||n})}))});
