import * as React from "react";
import styled from "styled-components";
import { stockData } from "../data/data";
import ProductCard from "./Product";
import { useParams } from "react-router-dom";

const DetailDiv = styled.div``;

const Detail: React.FC = () => {
  const params = useParams();
  const prodotto = stockData.find((x) => x.UPC === params.id);

  return prodotto ? (
    <DetailDiv>
      <ProductCard
        upc={prodotto.UPC}
        name={prodotto.name}
        price={prodotto.price.current.value}
        availability={prodotto.availability.stock}
      />
    </DetailDiv>
  ) : null;
};

export default Detail;
