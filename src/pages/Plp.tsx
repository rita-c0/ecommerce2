import * as React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ProductCard from "../components/Product";
import Footer from "../components/Footer";
import { Product } from "../data/data";
import { useState } from "react";

type Props = {
  product: Product[];
};

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const PDiv = styled.div`
  background-color: white;
  width: 100%;
`;

const CardCont = styled.div`
  padding: 20px;
`;

const CardDiv = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
`;

const Plp: React.FC<Props> = ({ product }) => {
  const [text, setText] = useState<string>("");

  const [active, setActive] = useState<"none" | "in" | "out">("none");

  const searchFilter = (prod: Product) => {
    return prod.name.toLowerCase().includes(text.toLowerCase());
  };

  const activeFilter = (prod: Product) => {
    switch (active) {
      case "in":
        return prod.availability.stock > 0;
      case "out":
        return prod.availability.stock <= 0;
      default:
        return true;
    }
  };
  return (
    <Container>
      <Navbar
        text={text}
        setText={setText}
        active={active}
        setActive={setActive}
      />
      <PDiv>
        <CardCont>
          <CardDiv>
            {product
              .filter(activeFilter)
              .filter(searchFilter)
              .map((e, index) => (
                <ProductCard
                  upc={e.UPC}
                  name={e.name}
                  price={e.price.current.value}
                  availability={e.availability.stock}
                ></ProductCard>
              ))}
          </CardDiv>
        </CardCont>
      </PDiv>
      <Footer />
    </Container>
  );
};

export default Plp;
