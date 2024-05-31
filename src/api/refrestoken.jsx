import axios from 'axios';
import { config } from '../config';
import { Navigate } from 'react-router-dom';

// Buat instance Axios dengan konfigurasi interceptor
const axiosInstance = axios.create();

// Fungsi untuk memperbarui access token
const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');

    if (!refreshToken) return <Navigate to="/login" replace={true}/>

    const response = await axios.post(`${config.api_host_dev}/token`, {
      refreshToken,
    });

    const newAccessToken = response.data.accessToken;
    // Simpan access token yang baru di local storage
    localStorage.setItem('token', newAccessToken);
  } catch (error) {
    // Handle jika terjadi kesalahan dalam proses refresh token
    console.error('Error refreshing access token:', error);
  }
};

// Set up request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Set up response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      // Jika respons status 401 (Unauthorized), maka coba refresh access token
      await refreshAccessToken();

      // Kemudian, kirim kembali permintaan yang asli setelah refresh token
      error.config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
      return axios(error.config);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
