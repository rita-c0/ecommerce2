import * as React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 70px;
  background-color: rgb(189 189 189);
  width: 100%;
  bottom: 0;
`;

const FooterLink = styled.a`
  color: blue;
`;

const LinkDiv = styled.div`
  margin-top: 20px;
  margin-right: 20px;
`;

const Footer: React.FC = () => {
  return (
    <FooterDiv>
      <LinkDiv>
        <FooterLink href="https://twitter.com/">TWITTER |</FooterLink>
        <FooterLink href="https://facebook.com/"> FACEBOOK</FooterLink>
      </LinkDiv>
    </FooterDiv>
  );
};

export default Footer;
