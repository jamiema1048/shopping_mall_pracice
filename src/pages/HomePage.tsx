import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ClearFix from "@/components/common/ClearFix";
import ProductCard from "@/components/product/ProductCard";
import AuthContext from "@/components/auth/AuthContext";
import PopUpModal from "@/components/common/PopUpModal";
import styled from "styled-components";
import { Carousel } from "antd";
import type { ProductData } from "@/types/productsData";
import products from "../../database/db.json";
import Banner01 from "@/images/banner/banner01.jpg";
import Banner02 from "@/images/banner/banner02.jpg";
import Banner03 from "@/images/banner/banner03.jpg";
import Banner04 from "@/images/banner/banner04.jpg";

const BannerBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
`;

const BannerImageArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const BannerCarouselContainer = styled.div`
  width: 100%;
  padding: 2px;
  @media (min-width: 769px) {
    width: 66.67%;
  }
`;

const BannerSectionContainer = styled.div`
  width: 100%;
  @media (min-width: 769px) {
    width: 33.33%;
  }
`;

const BannerFeatureContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: white;
  padding: 8px 0;
  border-left: 1px solid rgba(0, 0, 0, 0.22);
  border-right: 1px solid rgba(0, 0, 0, 0.22);
  border-bottom: 1px solid rgba(0, 0, 0, 0.22);
`;

const BannerFeatureColumn = styled.div`
  width: 33.33%;
  align-items: center;
`;

const BannerContainer = styled.div`
  width: 100%;
  padding: 2px;
`;

const GuangGaoContainer = styled.div`
  margin-bottom: 48px;
`;

const ProductCollectionContainer = styled.div`
  margin: 0 -4px 48px -4px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const ProductContainer = styled.div`
  padding: 4px;
  width: 33.33%;
  @media (min-width: 577px) {
    width: 25%;
  }
  @media (min-width: 769px) {
    width: 16.66%;
  }

  ul.slick-dots.slick-dots-bottom {
    z-index: 1; /* 降低按鈕的層級 */
  }
`;

const GuangGaoImage = styled.div`
  width: 100%;
  height: ${(props) => props.height}px;
  background-image: ${(props) => `url(${props.url})`};
  background-position: center;
  background-size: cover;
`;

const Image = styled.div`
  width: 100%;
  height: ${(props) => props.height}px;
  background-image: ${(props) => `url(${props.url})`};
  background-position: center;
  background-size: cover;
`;

const HomePage: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const renderProductContainer = () => {
    // 1. 確保取到的是 JSON 裡的陣列 (假設 db.json 結構是 { "products": [...] })
    const productList = products.products;

    return (
      <ProductCollectionContainer>
        {/* 2. 修正參數型別為單個 ProductData */}
        {productList.map((product: ProductData) => {
          const imageUrl = new URL(product.coverUrl, import.meta.url).href;
          return (
            <ProductContainer key={product.id}>
              <Link to={product.listLink}>
                <ProductCard
                  title={product.title}
                  coverUrl={imageUrl}
                  salePrices={product.salePrices}
                  listPrices={product.listPrices}
                  discountPercentage={
                    // 3. 安全處理：防止 listPrices 為空導致 NaN 或除以 0
                    product.listPrices
                      ? Math.floor(
                          (product.salePrices / product.listPrices) * 100,
                        )
                      : 0
                  }
                />
              </Link>
            </ProductContainer>
          );
        })}
      </ProductCollectionContainer>
    );
  };
  return (
    <>
      <PopUpModal />
      <ClearFix />
      {isAuthenticated && <h1>歡迎回來</h1>}
      <BannerBox>
        <BannerImageArea>
          <BannerCarouselContainer>
            <Carousel autoplay>
              <Link to="p001">
                <Image height={204} url={Banner01} />
              </Link>
              <Link to="p002">
                <Image height={204} url={Banner02} />
              </Link>
              <Link to="p003">
                <Image height={204} url={Banner03} />
              </Link>
              <Link to="p004">
                <Image height={204} url={Banner04} />
              </Link>
            </Carousel>
          </BannerCarouselContainer>
          <BannerSectionContainer>
            <BannerContainer>
              <Link to="p005">
                <Image height={100} url={Banner01} />
              </Link>
            </BannerContainer>
            <BannerContainer>
              <Link to="p006">
                <Image height={100} url={Banner04} />
              </Link>
            </BannerContainer>
          </BannerSectionContainer>
        </BannerImageArea>
        <BannerFeatureContainer>
          <BannerFeatureColumn>15日鑑賞期</BannerFeatureColumn>
          <BannerFeatureColumn>退貨無負擔</BannerFeatureColumn>
          <BannerFeatureColumn>假一賠二</BannerFeatureColumn>
        </BannerFeatureContainer>
      </BannerBox>
      <GuangGaoContainer>
        <Link to="/advertising">
          <GuangGaoImage height={100} url={Banner01} />
        </Link>
      </GuangGaoContainer>
      {renderProductContainer()}
      <h3>花得更少買得更好，全新網路購物網站體驗</h3>
      <p>
        蝦皮購物是台灣首屈一指的電商平台，多樣購物網站服務包括蝦皮商城、蝦皮特選、蝦皮直送、蝦皮超市等，更陸續設立蝦皮店到店，並提供蝦皮店到店隔日到貨及蝦皮店到家宅配等多種取貨選擇，服務更升級！簡易操作介面、清楚的商品評價讓你輕鬆選好物。在蝦皮下單後，透過訂單詳情可以隨時進行包裹查詢，無需擔心收不到你所訂購的商品！而在商品鑑賞期期間，蝦皮安心退讓你一鍵就能申請退貨，購物不再怕踩雷，盡情享受「放心買、安心退」的絕佳購物環境！蝦皮更承諾保障你的交易安全，提供多種安全可靠的付款方式，街口支付等行動支付超方便！趕快到蝦皮購物享受蝦皮免運吃到飽，開啟全新的購物網站體驗！
      </p>
    </>
  );
};
export default HomePage;
