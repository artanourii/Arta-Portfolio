/* ARTA NOORI STUDIO: keeps the heavy files that rarely change (3D engine, fonts, logos, film covers) on the visitor's
   device, so the site opens much faster from the second visit on. The page itself, its code and its styles always come
   fresh from the network first (falling back to the saved copy offline), so updates show up right away. Films are
   never touched here. */
const CACHE="ans-static-v1";
const STATIC=/\/(vendor\/|assets\/|videos\/[^/]+\.(jpg|png|webp)$)/;
self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil((async()=>{
  for(const k of await caches.keys())if(k.startsWith("ans-")&&k!==CACHE&&k!=="ans-page-v1")await caches.delete(k);
  await self.clients.claim()})()));
self.addEventListener("fetch",e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=="GET"||u.origin!==location.origin||!u.pathname.startsWith(new URL(self.registration.scope).pathname)||r.headers.has("range")||/\.(mp4|webm|mov)$/i.test(u.pathname))return;
  if(STATIC.test(u.pathname)){
    // saved copy at once, refreshed in the background for next time
    e.respondWith(caches.open(CACHE).then(async c=>{const hit=await c.match(r);
      const net=fetch(r).then(res=>{if(res.ok)c.put(r,res.clone());return res}).catch(()=>hit);
      if(hit){e.waitUntil(net);return hit}return net}));
  }else{
    // page, code and styles: network first, saved copy only when offline
    e.respondWith(caches.open("ans-page-v1").then(async c=>{try{const res=await fetch(r);if(res.ok)c.put(r,res.clone());return res}
      catch(err){const hit=await c.match(r);if(hit)return hit;throw err}}));
  }
});
