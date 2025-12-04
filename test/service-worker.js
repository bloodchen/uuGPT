const CACHE_NAME = 'uugpt-pwa-v1.0.3';

const urlsToCache = [
  '/chat',
  '/uugpt_favicon_16.png',
  '/uugpt_favicon_18.png',
  '/uugpt_favicon_32.png',
  '/uugpt_favicon_64.png',
  '/uugpt_favicon_128.png',
  '/uugpt_favicon_192.png',
  '/uugpt_favicon_512.png',
  '/favicon.ico'
];
// 安装Service Worker并缓存核心文件
self.addEventListener('install', event => {
  event.waitUntil(
      caches.open(CACHE_NAME)
          .then(cache => {
              console.log('打开缓存');
              return cache.addAll(urlsToCache).catch(err => {
                  console.error('缓存失败:', err);
              });
          })
  );
  self.skipWaiting();
});


// 更新Service Worker并清理旧缓存
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
      caches.keys().then(cacheNames => {
          return Promise.all(
              cacheNames.map(cacheName => {
                  if (!cacheWhitelist.includes(cacheName)) {
                      return caches.delete(cacheName);
                  }
              })
          );
      })
  );
  self.clients.claim(); // 立即控制页面
});