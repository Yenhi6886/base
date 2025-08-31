import axios from 'axios';

// Cấu hình base URL cho API
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Tạo instance axios với cấu hình mặc định
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor để thêm token vào header
apiClient.interceptors.request.use(
  (config) => {
    // Lấy token từ localStorage hoặc sessionStorage
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor để xử lý lỗi chung
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Xử lý lỗi 401 (Unauthorized)
    if (error.response?.status === 401) {
      // Xóa token và redirect về trang login
      localStorage.removeItem('access_token');
      window.location.href = '/login';
    }
    
    // Xử lý lỗi 500 (Internal Server Error)
    if (error.response?.status >= 500) {
      console.error('Server Error:', error.response.data);
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;
