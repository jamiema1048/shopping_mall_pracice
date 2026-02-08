import React from "react";
import styled from "styled-components";
import { Spin, Alert, Empty } from "antd";
import Container from "@/components/common/Container";
import LoginForm from "@/components/auth/LoginForm";
import { useState, useEffect } from "react";

const StyledLoginContainer = styled.div`
  background-color: white;
`;

const StyledLoginFlexContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 48px 0;
`;

const ImageArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    display: none; // 手機版通常會隱藏左側大圖
  }
`;

const FormArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

// 模擬 API 函式 (正式環境會換成 axios.get)
const fetchPageConfig = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        logoUrl:
          "https://plus.unsplash.com/premium_photo-1671516771888-0276e83e74a8?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      });
    }, 1500);
  });
};

const LoginPage: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [isPageError, setIsPageError] = useState<boolean>(false);
  const [isPageLoading, setIsPageLoading] = useState<boolean>(true);

  // 模擬載入頁面配置
  useEffect(() => {
    // 獲取頁面初始資料
    fetchPageConfig()
      .then((res) => setData(res))
      .catch(() => setIsPageError(true))
      .finally(() => setIsPageLoading(false));
  }, []);

  // 1. 處理全頁載入狀態
  if (isPageLoading) {
    return (
      <StyledLoginContainer>
        <Container style={{ textAlign: "center", padding: "100px 0" }}>
          <Spin size="large" tip="頁面載入中..." />
        </Container>
      </StyledLoginContainer>
    );
  }

  // 2. 處理全頁錯誤狀態
  if (isPageError) {
    return (
      <Container style={{ padding: "48px 0" }}>
        <Alert
          message="錯誤"
          description="無法載入登入設定資料，請重新整理頁面。"
          type="error"
          showIcon
        />
      </Container>
    );
  }

  return (
    <>
      <StyledLoginContainer>
        <StyledLoginFlexContainer>
          <ImageArea>
            {/* 3. 處理空資料狀態 (如果 API 沒回傳圖片) */}
            {data?.logoUrl ? (
              <img
                width={150}
                src={data.logoUrl}
                alt="Login Banner"
                style={{ maxWidth: "100%" }}
              />
            ) : (
              <Empty description="暫無活動圖片" />
            )}
          </ImageArea>
          <FormArea>
            <LoginForm />
          </FormArea>
        </StyledLoginFlexContainer>
      </StyledLoginContainer>
    </>
  );
};
export default LoginPage;
