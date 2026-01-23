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
const ProductCard: React.FC = ({
  coverUrl,
  title,
  listPrices,
  salePrices,
  discountPercentage,
  salesNumber,
  rating,
  isLiked,
}: ProductCardProps) => {
  return (
    <Card
      hoverable
      style={{ width: "100%" }}
      cover={<SquareImage url={coverUrl} />}
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
