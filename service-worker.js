
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('task-timer-cache-v1').then(cache => {
            return cache.addAll([
                './task_timer_tool_pwa_final_plus_minus_fix.html',
                './manifest.json',
                './icon.png'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});