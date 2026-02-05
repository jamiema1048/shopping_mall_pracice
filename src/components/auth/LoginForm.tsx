import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import AuthContext from "./AuthContext";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin: React.FC = () => {
    // call login api
    login(username, password).then(({ token, error }) => {
      if (!token) {
        message.error(error);
      }
    });
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
      />
      <Button onClick={handleLogin}>登入</Button>
    </div>
  );
};
export default LoginForm;
