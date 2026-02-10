import React from "react";
import { Card } from "antd";
import type { ProductCardProps } from "@/types/ProductCard";
import styled from "styled-components";

// 1. 將圖片容器設為相對定位基準
const SquareImage = styled.div<{ url: string }>`
  position: relative;
  padding-top: 100%;
  background-position: center;
  background-image: ${(props) => `url("${props.url}")`};
  background-size: cover;
  width: 100%;
`;

// 2. 使用絕對定位將標籤鑲嵌在左下角
const DiscountMark = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #ee4d2d; // 經典的電商橘紅色
  color: white;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: bold;
  z-index: 1;
  border-top-right-radius: 2px; // 稍微修一點圓角更有質感
`;

const ListPricesLabel = styled.span`
  color: #757575;
  text-decoration: line-through;
  font-size: 12px;
  margin-right: 4px;
`;

const SalePricesLabel = styled.span`
  color: #d1011c;
  font-weight: bold;
  font-size: 16px;
`;

const { Meta } = Card;

const ProductCard: React.FC<ProductCardProps> = ({
  coverUrl,
  title,
  listPrices,
  salePrices,
  discountPercentage,
}) => {
  return (
    <Card
      hoverable
      style={{ width: "100%", overflow: "hidden" }}
      bodyStyle={{ padding: "12px" }} // 微調內距讓視覺更集中
      cover={
        <SquareImage url={coverUrl}>
          {/* 將標籤放入圖片容器內，才能相對於圖片定位 */}
          {listPrices && discountPercentage && (
            <DiscountMark>{`${discountPercentage}% OFF`}</DiscountMark>
          )}
        </SquareImage>
      }
    >
      <Meta
        title={
          <div style={{ fontSize: "14px", marginBottom: "8px" }}>{title}</div>
        }
        description={
          <div>
            <div style={{ height: "20px" }}>
              {" "}
              {/* 固定高度防止排版跳動 */}
              {listPrices && <ListPricesLabel>${listPrices}</ListPricesLabel>}
            </div>
            <SalePricesLabel>${salePrices}</SalePricesLabel>
          </div>
        }
      />
    </Card>
  );
};

export default ProductCard;
