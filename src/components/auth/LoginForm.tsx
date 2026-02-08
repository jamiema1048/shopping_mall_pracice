import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Input, Button, message, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import AuthContext from "./AuthContext";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  // 1. 處理 Context 可能為 undefined 的情況 (TS 檢查)
  if (!context) {
    throw new Error("LoginForm must be used within an AuthProvider");
  }
  const { isAuthenticated, login } = context;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleLogin: React.FC = async () => {
    if (!username.trim() || !password.trim()) {
      return message.warning("帳號與密碼不能為空！");
    }
    setLoading(true);
    // call login api
    try {
      const { token, error } = await login(username, password);

      if (token) {
        message.success("登入成功");
        // 注意：這裡不一定要 navigate，因為 useEffect 會監控 isAuthenticated
      } else {
        // 4. 錯誤處理：顯示 API 回傳的錯誤
        message.error(error || "登入失敗，請檢查帳號密碼");
      }
    } catch (err) {
      // 5. 例外處理：處理網路斷線或伺服器崩潰
      message.error("系統異常，請稍後再試");
    } finally {
      setLoading(false); // 關閉載入狀態
    }
  };

  useEffect(() => {
    isAuthenticated && navigate("/");
  }, [isAuthenticated]);

  return (
    <div>
      <Input
        className="mb-3"
        size="large"
        placeholder="請輸入帳號"
        prefix={<UserOutlined />}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={loading}
      />
      <Input
        className="mb-3"
        type="password"
        size="large"
        placeholder="請輸入密碼"
        prefix={<LockOutlined />}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onPressEnter={handleLogin}
        disabled={loading}
      />
      <Button onClick={handleLogin} loading={loading}>
        {loading ? "登入中..." : "登入"}
      </Button>
    </div>
  );
};
export default LoginForm;
