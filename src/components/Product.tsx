import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  upc: string;
  name: string;
  price: number;
  availability: number;
};

const Card = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border-bottom: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  display: inline-block;
  max-width: 375px;
  max-height: 540px;
`;

const Img = styled.img`
  border-radius: 4px 4px 0 0;
  width: 100%;
`;

const ProductCard = (props: Props) => {
  return (
    <div>
      <Link to={`/dettaglio/${props.upc}`}>
        <Card>
          <Img src="https://via.placeholder.com/350" alt="" />
          <div style={{ marginLeft: "20px", marginBottom: "20px" }}>
            <div style={{ color: "black", fontSize: "20px" }}>{props.name}</div>
            <div style={{ color: "grey", fontSize: "15px" }}>
              {" "}
              $ {props.price}
            </div>

            {props.availability > 0 ? (
              <label
                style={{
                  color: "black",
                  outline: "none",
                  fontSize: "13px",
                  borderRadius: "15px",
                  backgroundColor: "lightgrey",
                  padding: "7px",
                  display: "inline-block",
                  marginTop: "6px",
                }}
              >
                in stock
              </label>
            ) : (
              ""
            )}
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default ProductCard;
