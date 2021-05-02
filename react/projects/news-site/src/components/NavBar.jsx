import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.png";

const NavBarLogo = styled.img`
  width:180px;
`

const MainNavContainer = styled.div`
  grid-template-columns: 6fr 3fr 2fr;
`

const NavBar = () => {
  return (
    <nav>
      <MainNavContainer>
        <Link to="/">
          <NavBarLogo src={logo} alt="logo"/>
        </Link>
    
        <ul>
          <Link to="/">Home</Link>
          <Link to="/tech">Tech</Link>
          <Link to="/science">Science</Link>
        </ul>
      </MainNavContainer>
    </nav>

  );

}

export default NavBar;