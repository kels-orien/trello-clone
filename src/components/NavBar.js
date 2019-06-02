import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarWrapper = styled.nav`
  display: inherit;
  height: 10rem;
  width: 5rem;
  color: #026aa7;
  margin-top: 4rem;
  margin-left: 4rem;
`;

const NavBarMenu = styled.ul`
  margin-bottom: 12px;
`;

const NavBarMenuItem = styled.li`
  margin-bottom: 0.2rem;
  margin-top: 0.5rem;
  padding-left: 0.5rem;
`;

const NavBarMenuItem1 = styled.a`
  font-weight: 700;
  cursor: pointer;
  color: #026aa7;
`;
const NavBar = () => (
  <NavBarWrapper>
    <NavBarMenu>
      <NavBarMenuItem>
        <Link to="/">
          <NavBarMenuItem1>Boards</NavBarMenuItem1>
        </Link>
      </NavBarMenuItem>
      <NavBarMenuItem>
        <Link to="/">
          <NavBarMenuItem1>Home</NavBarMenuItem1>
        </Link>
      </NavBarMenuItem>
    </NavBarMenu>
  </NavBarWrapper>
);

export default NavBar;
