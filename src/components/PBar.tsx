import * as React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #ffffff;
  height: 80px;
  width: 100%;
  border-bottom: 1.5px solid;
`;

const Logo = styled.div``;

const PBar: React.FC = () => {
  return (
    <Grid>
      <Logo>
        <img src="https://via.placeholder.com/150x80" alt="" />
      </Logo>
    </Grid>
  );
};

export default PBar;
