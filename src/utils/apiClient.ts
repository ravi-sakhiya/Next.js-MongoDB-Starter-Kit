import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor
    this.client.interceptors.request.use(
      config => {
        const token =
          typeof window !== 'undefined'
            ? localStorage.getItem('accessToken')
            : null;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      async error => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = localStorage.getItem('refreshToken');
            if (!refreshToken) {
              throw new Error('No refresh token');
            }

            const response = await axios.post('/api/auth/refresh', {
              refreshToken,
            });

            const { accessToken, refreshToken: newRefreshToken } =
              response.data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', newRefreshToken);

            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return this.client(originalRequest);
          } catch (refreshError) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            if (typeof window !== 'undefined') {
              window.location.href = '/auth/login';
            }
            return Promise.reject(refreshError);
          }
        }

        // Handle other errors
        const message =
          error.response?.data?.message || error.message || 'An error occurred';
        toast.error(message);
        return Promise.reject(error);
      }
    );
  }

  // Generic request methods
  async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  async post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  async put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.put<T>(url, data, config);
    return response.data;
  }

  async patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.patch<T>(url, data, config);
    return response.data;
  }

  async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete<T>(url, config);
    return response.data;
  }

  // Auth specific methods
  async login(credentials: { email: string; password: string }) {
    return this.post('/auth/login', credentials);
  }

  async register(userData: { email: string; password: string; name: string }) {
    return this.post('/auth/register', userData);
  }

  async logout() {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      return this.post('/auth/logout', { refreshToken });
    }
  }

  async getCurrentUser() {
    return this.get('/auth/me');
  }

  // User management
  async getUsers(params?: { page?: number; limit?: number; search?: string }) {
    return this.get('/users', { params });
  }

  async getUser(id: string) {
    return this.get(`/users/${id}`);
  }

  async updateUser(id: string, data: any) {
    return this.put(`/users/${id}`, data);
  }

  async deleteUser(id: string) {
    return this.delete(`/users/${id}`);
  }

  // Posts
  async getPosts(params?: {
    page?: number;
    limit?: number;
    category?: string;
  }) {
    return this.get('/posts', { params });
  }

  async getPost(id: string) {
    return this.get(`/posts/${id}`);
  }

  async createPost(data: any) {
    return this.post('/posts', data);
  }

  async updatePost(id: string, data: any) {
    return this.put(`/posts/${id}`, data);
  }

  async deletePost(id: string) {
    return this.delete(`/posts/${id}`);
  }

  // Products
  async getProducts(params?: {
    page?: number;
    limit?: number;
    category?: string;
  }) {
    return this.get('/products', { params });
  }

  async getProduct(id: string) {
    return this.get(`/products/${id}`);
  }

  async createProduct(data: any) {
    return this.post('/products', data);
  }

  async updateProduct(id: string, data: any) {
    return this.put(`/products/${id}`, data);
  }

  async deleteProduct(id: string) {
    return this.delete(`/products/${id}`);
  }

  // Stripe
  async createCheckoutSession(data: {
    priceId: string;
    successUrl: string;
    cancelUrl: string;
  }) {
    return this.post('/stripe/create-checkout-session', data);
  }

  async createPortalSession(data: { customerId: string; returnUrl: string }) {
    return this.post('/stripe/create-portal-session', data);
  }
}

export const apiClient = new ApiClient();
export default apiClient;
