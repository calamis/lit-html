export const initialize = async () => {
  // this would initialize the routing only after it is safe to do so
  require('../../routes');

  // register service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('SW registered: ', registration);
        // registration.pushManager.subscribe({ userVisibleOnly: true });
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
};
