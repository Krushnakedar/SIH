export const connectivityService = {
  isOnline: () => typeof navigator === 'undefined' ? true : navigator.onLine,
  subscribe: (handler) => { window.addEventListener('online', handler); window.addEventListener('offline', handler); return () => { window.removeEventListener('online', handler); window.removeEventListener('offline', handler); }; },
};