import { ReactNode } from "react";

/** 登入 API 的回傳格式 */
export interface LoginResponse {
  token: string | null;
  error?: string;
}

/** 儲存於 LocalStorage 的物件格式 */
export interface AuthStoredData {
  token: string;
}

/** Context 提供給外部使用的屬性與方法 */
export interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<LoginResponse>;
  logout: () => void;
}

/** Provider 組件接收的 Props */
export interface AuthProviderProps {
  children: ReactNode;
}
