import React from "react";
import styled from "styled-components";
import Home from './Home';


const ArticlesSection = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;

    @media screen and (min-width:600px) {
          grid-template-columns: 1fr 1fr 1fr;
    }
`

const Main = () => {

    return (
        <>

        </>
    )
}

export default Main;