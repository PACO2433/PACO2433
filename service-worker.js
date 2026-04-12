self.addEventListener("install",e=>{

e.waitUntil(

caches.open("aldrex").then(cache=>{

return cache.addAll([

"/",
"index.html"

])

})

)

})

self.addEventListener("fetch",e=>{

e.respondWith(

caches.match(e.request).then(r=>{

return r || fetch(e.request)

})

)

})