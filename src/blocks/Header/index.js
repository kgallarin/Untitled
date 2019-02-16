import styled from "styled-components";
import Logo from "blocks/Header/Logo";
import NavList from "blocks/Header/NavList";
import Nav from "blocks/Header/Nav";
import NavLink from "blocks/Header/NavLinks";

const Header = styled.div`
  background: blue;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

Header.Logo = Logo;
Header.NavList = NavList;
Header.Nav = Nav;
Header.NavLink = NavLink;

export default Header;
