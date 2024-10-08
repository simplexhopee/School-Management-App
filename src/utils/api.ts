import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface ApiResponse<T = any> {
  data: T;
  status: number;
  message?: string;
}
const baseURL = process.env.EXPO_PUBLIC_BACKEND_BASE_URL;
const apiClient = axios.create({
  baseURL: baseURL, 
  timeout: 50000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiRequest = async <T = any>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  data?: any,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  try {
    const response: AxiosResponse<T> = await apiClient.request({
      url,
      method,
      data,
      ...config,
    });

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      // Axios specific error handling
      console.error('Axios error:', error);
    } else {
      console.error('General error:', error.message);
    }

    return {
      data: error.response?.data,
      status: error.response?.status || 500,
      message: error.message,
    };
  }
};

export default apiRequest;