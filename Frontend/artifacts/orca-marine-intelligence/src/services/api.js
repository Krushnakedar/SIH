import axios from 'axios';

export const apiConfig = {
  baseUrl: import.meta.env.VITE_API_URL || '/api',
  demoMode: String(import.meta.env.VITE_DEMO_MODE ?? 'true') === 'true',
};

export const serviceRequest = async (path, fallback) => {
  if (apiConfig.demoMode) return Promise.resolve(fallback);
  const response = await axios.get(`${apiConfig.baseUrl}${path}`, { withCredentials: true });
  return response.data;
};