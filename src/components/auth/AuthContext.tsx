import React, { useState, useEffect, createContext, useContext } from "react";

import type {
  AuthContextType,
  AuthProviderProps,
  LoginResponse,
  AuthStoredData,
} from "@/types/auth";

const STORAGE_KEY = "shopee:auth.state";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = async (
    username: string,
    password: string,
  ): Promise<LoginResponse> => {
    // 模擬 API 請求
    if (username === "Aaron") {
      const token = "good_token";
      const storageData: AuthStoredData = { token };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
      setIsAuthenticated(true);
      return { token };
    }
    setIsAuthenticated(false);
    return { token: null, error: "Invalid Password" };
  };

  const logout = async () => {
    setIsAuthenticated(false);
    localStorage.removeItem(STORAGE_KEY);
  };

  useEffect(() => {
    const rawData = localStorage.getItem(STORAGE_KEY);
    if (!rawData) return;
    try {
      const authData = JSON.parse(rawData) as AuthStoredData;
      if (authData && authData.token) {
        setIsAuthenticated(true);
      }
    } catch (e) {
      console.error("Auth initialization failed:", e);
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
