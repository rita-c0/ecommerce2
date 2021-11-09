import * as React from "react";
import styled from "styled-components";

type Props = {
  text: string;
  setText: (text: string) => void;
};

const Input = styled.input`
  border-left: 1px solid #cfcccf;
  border-right: 1px solid #cfcccf;
  border-top: 1px solid #cfcccf;
  border-bottom: 1px solid #cfcccf;
  width: 280px;
  height: 50px;
  margin-top: 10px;
  border-radius: 4px;
`;
const BtnReset = styled.button`
  margin-left: 20px;
  height: 35px;
  width: 80px;
  border: 0px;
  border-radius: 6px;
  background-color: #1976d2;
  color: #fafafd;
`;
const SearchDiv = styled.div``;

const Search: React.FC<Props> = ({ text, setText }) => {
  return (
    <SearchDiv>
      <Input
        type="text"
        id="search"
        placeholder="search"
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></Input>
      <BtnReset type="button" onClick={() => setText("")}>
        RESET
      </BtnReset>
    </SearchDiv>
  );
};

export default Search;
