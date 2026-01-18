import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StoresIcon from "@/images/stores-icon.png";
import QRCode from "@/images/qrcode.png";
import AppStore from "@/images/appstore.png";
import GooglePlay from "@/images/googleplay.png";
import AppGallery from "@/images/appgallery.png";

const StyledFooter = styled.footer`
  background-color: #fbfbfb;
  padding-top: 40px;
  padding-bottom: 60px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  width: 33.33%;
  @media (min-width: 769px) {
    width: 20%;
  }
  a {
    color: rgba(0, 0, 0, 0.54);
    margin-bottom: 2px;
  }
`;

const DownloadBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FooterColumnTitle = styled.h4`
  font-weight: bold;
  margin-bottom: 12px;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <FlexContainer>
        <FooterColumn>
          <FooterColumnTitle>客服中心</FooterColumnTitle>
          <Link to="#!">幫助中心</Link>
          <Link to="#!">蝦皮商城</Link>
          <Link to="#!">付款方式</Link>
          <Link to="#!">蝦皮錢包</Link>
          <Link to="#!">蝦幣</Link>
          <Link to="#!">運費補助</Link>
          <Link to="#!">退貨退款</Link>
          <Link to="#!">蝦皮承諾</Link>
          <Link to="#!">聯絡客服</Link>
          <Link to="#!">防詐騙宣導</Link>
        </FooterColumn>
        <FooterColumn>
          <FooterColumnTitle>關於蝦皮</FooterColumnTitle>
          <Link to="#!">關於蝦皮</Link>
          <Link to="#!">加入我們</Link>
          <Link to="#!">蝦皮條款</Link>
          <Link to="#!">隱私權政策</Link>
          <Link to="#!">賣家中心</Link>
          <Link to="#!">限時特賣</Link>
          <Link to="#!">聯絡媒體</Link>
        </FooterColumn>
        <FooterColumn>
          <FooterColumnTitle>付款</FooterColumnTitle>
          <FooterColumnTitle>物流合作</FooterColumnTitle>
          <img
            src={StoresIcon}
            alt="Stores-Icon"
            width="60%"
            style={{ marginBottom: "8px" }}
          />
          <FooterColumnTitle>蝦皮直送包裝減量標章</FooterColumnTitle>
        </FooterColumn>
        <FooterColumn>
          <FooterColumnTitle>關注我們</FooterColumnTitle>
        </FooterColumn>
        <FooterColumn>
          <FooterColumnTitle>下載蝦皮</FooterColumnTitle>
          <DownloadBox>
            <img src={QRCode} alt="Stores-Icon" width="50%" />
            <div style={{ width: "50%" }}>
              <img
                src={AppStore}
                alt="AppStore"
                width="100%"
                style={{ marginBottom: "8px" }}
              />
              <img
                src={GooglePlay}
                alt="GooglePlay"
                width="100%"
                style={{ marginBottom: "8px" }}
              />
              <img
                src={AppGallery}
                alt="AppGallery"
                width="100%"
                style={{ marginBottom: "8px" }}
              />
            </div>
          </DownloadBox>
        </FooterColumn>
      </FlexContainer>
    </StyledFooter>
  );
};
export default Footer;
