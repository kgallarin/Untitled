import React from "react";
import Header from "blocks/Header";

const HeaderComponent = () => {
  return (
    <Header>
      <Header.Logo />
      <Header.NavList>
        <Header.Nav>
          <Header.NavLink href="http://localhost:3000">One</Header.NavLink>
        </Header.Nav>
        <Header.Nav>
          <Header.NavLink href="http://localhost:3000">Two</Header.NavLink>
        </Header.Nav>
        <Header.Nav>
          <Header.NavLink href="http://localhost:3000">Three</Header.NavLink>
        </Header.Nav>
        <Header.Nav>
          <Header.NavLink href="http://localhost:3000">Four</Header.NavLink>
        </Header.Nav>
        <Header.Nav>
          <Header.NavLink href="http://localhost:3000">Five</Header.NavLink>
        </Header.Nav>
      </Header.NavList>
    </Header>
  );
};

export default HeaderComponent;
