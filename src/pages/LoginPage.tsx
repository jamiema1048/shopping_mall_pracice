import React from "react";
import styled from "styled-components";
import Container from "@/components/common/Container";
import LoginForm from "@/components/auth/LoginForm";

const StyledLoginContainer = styled.div`
  background-color: white;
`;

const StyledLoginFlexContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 48px 0;
`;

const LoginPage: React.FC = () => {
  return (
    <>
      <StyledLoginContainer>
        <StyledLoginFlexContainer>
          <div>
            <img
              width={150}
              src="https://plus.unsplash.com/premium_photo-1671516771888-0276e83e74a8?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <LoginForm />
        </StyledLoginFlexContainer>
      </StyledLoginContainer>
    </>
  );
};
export default LoginPage;
