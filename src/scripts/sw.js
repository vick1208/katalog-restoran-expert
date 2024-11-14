import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

const restaurantdbApi = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev'),
  new StaleWhileRevalidate({
    cacheName: 'restaurantdb-api',
  }),
);

registerRoute(restaurantdbApi);


self.addEventListener('install', () =>{
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

self.addEventListener('push', () =>{
  console.log('Service Worker: Pushed');
});
