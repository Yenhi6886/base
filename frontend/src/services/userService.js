import apiClient from './api.js';

// Service để quản lý authentication
export const authService = {
  // Đăng nhập
  login: async (credentials) => {
    try {
      const response = await apiClient.post('/auth/login', credentials);
      const { access_token, user } = response.data;
      
      // Lưu token vào localStorage
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('user', JSON.stringify(user));
      
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Đăng ký
  register: async (userData) => {
    try {
      const response = await apiClient.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Đăng xuất
  logout: () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  },

  // Lấy thông tin user hiện tại
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  // Kiểm tra user đã đăng nhập chưa
  isAuthenticated: () => {
    return !!localStorage.getItem('access_token');
  },

  // Refresh token
  refreshToken: async () => {
    try {
      const response = await apiClient.post('/auth/refresh');
      const { access_token } = response.data;
      localStorage.setItem('access_token', access_token);
      return access_token;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};

// Service để quản lý users
export const userService = {
  // Lấy danh sách users
  getUsers: async (params = {}) => {
    try {
      const response = await apiClient.get('/users', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Lấy thông tin user theo ID
  getUserById: async (id) => {
    try {
      const response = await apiClient.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Tạo user mới
  createUser: async (userData) => {
    try {
      const response = await apiClient.post('/users', userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Cập nhật user
  updateUser: async (id, userData) => {
    try {
      const response = await apiClient.put(`/users/${id}`, userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Xóa user
  deleteUser: async (id) => {
    try {
      const response = await apiClient.delete(`/users/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};
