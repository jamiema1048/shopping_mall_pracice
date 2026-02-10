import React from "react";
import { Card } from "antd";
import type { ProductCardProps } from "@/types/ProductCard";
import styled from "styled-components";

const SquareImage = styled.div`
  padding-top: 100%;
  background-position: center;
  background-image: ${(props) => `url(${props.url})`};
  background-size: cover;
`;

const ListPricesLabel = styled.span`
  color: #757575;
  text-decoration: line-through;
`;

const SalePricesLabel = styled.span`
  color: #d1011c;
  text-decoration: none;
`;

const { Meta } = Card;
const ProductCard: React.FC<ProductCardProps> = ({
  coverUrl,
  title,
  listPrices,
  salePrices,
  discountPercentage,
}) => {
  const getImageUrl = (path: string) => {
    // 這裡需要根據你的檔案結構調整相對位置
    return new URL(path, import.meta.url).href;
  };
  console.log(coverUrl);
  return (
    <Card
      hoverable
      style={{ width: "100%" }}
      cover={<SquareImage url={coverUrl} alt={title} />}
    >
      <Meta
        title={title}
        description={
          <div>
            {listPrices && <ListPricesLabel>${listPrices}</ListPricesLabel>}
            <SalePricesLabel>${salePrices}</SalePricesLabel>
          </div>
        }
      />
    </Card>
  );
};
export default ProductCard;
