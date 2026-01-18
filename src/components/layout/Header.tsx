import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../common/Container";
import Logo from "@/images/logo.png";
import { Input } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Styledheader = styled.header`
  background-color: #d1011c;
  width: 100vw;
  padding: 16px 0;
`;

const StyledHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigator = styled.div`
  a {
    margin: 0px 4px;
    color: white;
    text-decoration: none;
  }
`;

const Toolbar = styled.div`
  a {
    margin: 0px 6px;
    color: white;
    text-decoration: none;
  }
`;

const SearchAndCart = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
  display: block;
`;

type SearchProps = GetProps<typeof Input.Search>;
const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const Header: React.FC = () => {
  return (
    <Styledheader>
      <Container>
        <StyledHeaderSection>
          <Navigator>
            <Link to="#!">購物</Link>
            <Link to="#!">下載</Link>
            <Link to="#!">追蹤我們</Link>
            <Link to="#!">部落格</Link>
          </Navigator>
          <Toolbar>
            <Link to="#!">通知</Link>
            <Link to="#!">幫助中心</Link>
            <Link to="#!">帳號</Link>
          </Toolbar>
        </StyledHeaderSection>
        <StyledHeaderSection>
          <Link to="/">
            <LogoImage src={Logo} alt="logo" height={40}></LogoImage>
          </Link>
          <SearchAndCart>
            <Input.Search
              style={{ marginRight: "8px" }}
              placeholder="Search Something"
              onSearch={onSearch}
              enterButton
            />
            <Link to="/cart">
              <ShoppingCartOutlined
                style={{ fontSize: "32px", color: "#ebb" }}
              />
            </Link>
          </SearchAndCart>
        </StyledHeaderSection>
      </Container>
    </Styledheader>
  );
};
export default Header;
