import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  height: 2.6rem;
  position: absolute;
  width: 100%;
  background-color: #026aa7;
`;

const HeaderLogo = styled.a`
  bottom: 0;
  display: block;
  height: 30px;
  left: 50%;
  margin-left: -40px;
  padding-top: 0.15rem;
  position: absolute;
  top: 5px;
  width: 80px;
  font-weight: 700;
  text-align: center;
  z-index: 2;
  color: #fff;
`;

const Header = () => (
  <Link to="/">
    <HeaderWrapper>
      <HeaderLogo>Trillo</HeaderLogo>
    </HeaderWrapper>
  </Link>
);

export default Header;
