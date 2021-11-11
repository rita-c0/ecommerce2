import * as React from "react";
import styled from "styled-components";
import { Product } from "../data/data";
import ProductCard from "./Product";
import { useParams } from "react-router-dom";

type Props = {
  product: Product[];
}

const DetailDiv = styled.div``;

const Detail: React.FC<Props> = ({product}) => {
  const params = useParams<{id:string}>();
  const prodotto = product.find((x) => x.UPC === params.id);

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
