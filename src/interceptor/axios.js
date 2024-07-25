import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true, //
});

// Add a request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const response = await axios.get('https://backend-oijs-77pyv5kz2q-et.a.run.app/token',{withCredentials: true});
                localStorage.setItem('accessToken', response.data.accessToken);
                axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
                return api(originalRequest);
            } catch (err) {
                console.error('Refresh token expired', err);
            }
        }
        return Promise.reject(error);
    }
);

export default api;