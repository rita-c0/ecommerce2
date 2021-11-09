import * as React from "react";
import styled from "styled-components";
import Btn from "./Btn";
import Search from "./Search";

type Props = {
  active: string;
  setActive: (active: "none" | "in" | "out") => void;
  text: string;
  setText: (text: string) => void;
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 30% 35% 35%;
  background-color: #ffffff;
  height: 80px;
  width: 100%;
  border-bottom: 1.5px solid;
`;

const Logo = styled.div``;

const Navbar: React.FC<Props> = ({ text, setText, active, setActive }) => {
  return (
    <Grid>
      <Logo>
        <img src="https://via.placeholder.com/150x80" alt="" />
      </Logo>
      <Btn active={active} setActive={setActive}></Btn>
      <Search text={text} setText={setText}></Search>
    </Grid>
  );
};

export default Navbar;
