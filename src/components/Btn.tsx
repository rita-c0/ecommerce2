import * as React from "react";
import styled from "styled-components";
import "../App.css";

type Props = {
  active: string;
  setActive: (active: "none" | "in" | "out") => void;
};

const Btndiv = styled.div`
  margin-top: 20px;
  padding-left: 10px;
`;

const TglBtn = styled.button`
  background-color: #ffffff;
  height: 35px;
  width: 120px;
  border: 1px solid;
  border-color: rgb(21, 101, 192);
  color: rgb(21, 101, 192);

  &.in {
    border-radius: 6px 0px 0px 6px;
    border-right: 0px;
  }
  &.out {
    border-radius: 0px 6px 6px 0px;
  }
  &.selected {
    color: white;
    background-color: rgb(21, 101, 192);
  }
`;

const Btn: React.FC<Props> = ({ active, setActive }) => {
  return (
    <Btndiv className="Btn">
      <TglBtn
        className={active === "in" ? "in btncl selected" : "in btncl"}
        type="button"
        onClick={() => (active === "in" ? setActive("none") : setActive("in"))}
      >
        IN STOCK
      </TglBtn>
      <TglBtn
        className={active === "out" ? "out btncl selected" : "out btncl"}
        type="button"
        onClick={() =>
          active === "out" ? setActive("none") : setActive("out")
        }
      >
        OUT OF STOCK
      </TglBtn>
    </Btndiv>
  );
};

export default Btn;
