import { precacheAndRoute } from 'workbox-precaching';
import { skipWaiting, clientsClaim } from 'workbox-core';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';

skipWaiting();
clientsClaim();

registerRoute(
  /**
   * @param {*} param
   */
  ({ url }) => url.origin === 'http://localhost:8080',
  new NetworkFirst()
);

// @ts-ignore
precacheAndRoute(self.__WB_MANIFEST);
