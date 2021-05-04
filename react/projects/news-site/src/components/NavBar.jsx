import React from "react";
import {Link, NavLink} from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.png";
import colors from "../data/colors";
import topics from "../data/topics";

const LogoLink = styled.a`
display: flex;
justify-content: center;
align-items: center;
`

const NavBarLogo = styled.img`
  width:180px;
`

const NavContainer = styled.nav`
  background: #fff;
  padding: 18px;
  display: flex;
  font-size:24px;
  flex-wrap:wrap;
`

const NavLinks = styled.ul`
  display: flex;
  flex-wrap:wrap;
  list-style: none;
`

const linkColor = colors['link-color'];
const activeLinkStyle = {
  fontWeight: "bold",
  color: colors['primary']
};
const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: ${linkColor};
    padding:12px;
    font-weight:bold;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const NavBar = () => {

  const sectionLinks = Object.keys(topics).map(key=> {
    const toLink = `/section/${key}`;
    return <li><StyledLink to={toLink} activeStyle={activeLinkStyle}>{topics[key].label}</StyledLink></li>;
  });

  return (
    <NavContainer>
      <LogoLink to="/">
        <NavBarLogo src={logo} alt="logo"/>
      </LogoLink>
      <NavLinks>
        <li><StyledLink to="/">Home</StyledLink></li>
        {sectionLinks}
      </NavLinks>
    </NavContainer>

  );

}

export default NavBar;