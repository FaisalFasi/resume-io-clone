// services/authService.ts
import axios from "axios";

const API_URL = "your_api_url_here"; // Replace with your API URL

type LoginResponse = {
  token: string;
};

type SignupResponse = {
  token: string;
};

const AuthService = {
  login: async (email: string, password: string): Promise<string> => {
    try {
      const response = await axios.post<LoginResponse>(`${API_URL}/login`, {
        email,
        password,
      });
      const { token } = response.data;
      return token;
    } catch (error) {
      throw error;
    }
  },

  signup: async (
    fullname: string,
    email: string,
    password: string
  ): Promise<string> => {
    try {
      const response = await axios.post<SignupResponse>(`${API_URL}/signup`, {
        fullname,
        email,
        password,
      });
      const { token } = response.data;
      return token;
    } catch (error) {
      throw error;
    }
  },

  // You can add a function to save and retrieve tokens from localStorage or cookies
  saveToken: (token: string) => {
    localStorage.setItem("token", token);
  },

  getToken: (): string | null => {
    return localStorage.getItem("token");
  },

  // Add a function to remove the token on logout
  logout: () => {
    localStorage.removeItem("token");
  },
};

export default AuthService;
