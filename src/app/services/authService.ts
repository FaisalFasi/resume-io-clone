const API_URL =
  "https://bfa9-2407-aa80-126-65a8-6c75-140b-577-af62.ngrok-free.app"; // Replace with your API URL

type LoginResponse = {
  token: string;
};

type SignupResponse = {
  token: string;
};

export const login = async (
  email: string,
  password: string
): Promise<string> => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    const data: LoginResponse = await response.json();
    console.log(data);

    return data.token;
  } catch (error) {
    throw error;
  }
};

export const signup = async (
  username: string,
  email: string,
  password: string
): Promise<string> => {
  try {
    const endpoint = `${API_URL}/register`;
    console.log(endpoint);

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    const data: SignupResponse = await response.json();
    if (!data.token) {
      throw new Error("Token not found in the response data");
    }
    console.log(data);

    return data.token;
  } catch (error) {
    throw error;
  }
};

export const saveToken = (token: string): void => {
  localStorage.setItem("token", token);
};

export const getToken = (): string | null => {
  return localStorage.getItem("token");
};

export const logout = (): void => {
  localStorage.removeItem("token");
};
