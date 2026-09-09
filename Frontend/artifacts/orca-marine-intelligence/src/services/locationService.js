export const locationService = {
  locate: () => new Promise((resolve) => {
    if (!navigator.geolocation) return resolve({ lat: 18.52, lng: 72.85 });
    navigator.geolocation.getCurrentPosition((position) => resolve({ lat: position.coords.latitude, lng: position.coords.longitude }), () => resolve({ lat: 18.52, lng: 72.85 }), { timeout: 4000 });
  }),
};