import * as React from "react";
import styled from "styled-components";
import Btn from "./Btn";
import Search from "./Search";



const Grid = styled.div`
  display: grid;
  grid-template-columns: 30% 35% 35%;
  background-color: #ffffff;
  height: 80px;
  width: 100%;
  border-bottom: 1.5px solid;
`;

const Logo = styled.div``;

const Navbar: React.FC = () => {
  return (
    <Grid>
      <Logo>
        <img src="https://via.placeholder.com/150x80" alt="" />
      </Logo>
      <Btn></Btn>
      <Search></Search>
    </Grid>
  );
};

export default Navbar;
