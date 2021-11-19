import * as React from "react";
import styled from "styled-components";
import { Product } from "../data/data";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import PBar from "../components/PBar";
import { useState } from "react";

type Props = {
  products: Product[];
};

const CarouselDiv = styled.div`
  margin-top: 50px;
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
`;

const TitleDiv = styled.div`
  font-weight: bold;
  margin-left: 50px;
`;

const ImgDiv = styled.div`
  margin-top: 20px;
  margin-left: 50px;
  height: 300px;
`;

const TextDiv = styled.div``;

const AddBtn = styled.button`
width: 120px;
height: 35px;
border-radius: 10px;
border: 0.5px solid grey;
background-color: white;
`;

const Detail: React.FC<Props> = ({ products }) => {
  const params = useParams<{ id: string }>();
  const product = products.find((x) => x.UPC === params.id);
  const [variant, setVariant] = useState<any>(product);

  return product ? (
    <>
      <PBar />
      <TitleDiv>
        <h2>{variant.name}</h2>
      </TitleDiv>

      <Container>
        <ImgDiv>
          <img alt="img" src={variant.image}></img>
        </ImgDiv>

        <TextDiv>
          <h1>Name {variant.name}</h1>
          <h2>Price: €{variant.price.current.value}</h2>
          <h2>upc: {variant.UPC}</h2>
          <AddBtn>Add to Cart</AddBtn>
        </TextDiv>
      </Container>

      {product.variants.length > 0 ? (
        <CarouselDiv>
          {product.variants.length > 0 ? <h1>Available colors</h1> : null}
          <CarouselContainer>
            <img
              width="150"
              alt="img"
              src={product.image}
              onClick={() => {
                setVariant(product);
              }}
              onMouseEnter={() => {
                setVariant(product);
              }}
            />
            {product.variants.map((element) => (
              <img
                width="150"
                alt="img"
                src={element.image}
                onClick={() => {
                  setVariant(element);
                }}
                onMouseEnter={() => {
                  setVariant(element);
                }}
              />
            ))}
          </CarouselContainer>
        </CarouselDiv>
      ) : null}
      <Container>
        <h1></h1>
      </Container>
      <Footer />
    </>
  ) : null;
};

export default Detail;
