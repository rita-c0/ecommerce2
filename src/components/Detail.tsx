import * as React from "react";
import styled from "styled-components";
import { stockData } from "../data/data";
import ProductCard from "./Product";
import { useParams } from "react-router-dom";

const DetailDiv = styled.div``;

const Detail: React.FC = () => {
  const params = useParams();
  const prodotto: any = stockData.find((x) => x.UPC === params.id);

  console.log(params.id);

  return (
    <DetailDiv>
      <ProductCard
        upc={prodotto.UPC}
        name={prodotto.name}
        price={prodotto.price.current.value}
        availability={prodotto.availability.stock}
      />
    </DetailDiv>
  );
};

export default Detail;
