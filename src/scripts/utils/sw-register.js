import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }

  const wb = new Workbox('./sw.bundle.js');

  try {
    await wb.register();
    console.log('Service Worker registered in the browser');
  } catch (error) {
    console.error('Failed to register Service Worker', error);
  }
};

export default swRegister;