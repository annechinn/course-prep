import React from "react";
import styled from "styled-components";

const StyledPanelWrap = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 30em;
  transition: .3s ease-out;
`

const StyledPanel = styled.div`
  position: absolute;
  background-color:white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  padding: 1em;
`

const StyledButton = styled.button`
    border-width:0px;
    padding:8px 16px;
    border-radius:5px;
`

const SlidingPanel = (props) => {

  let panelStyle = {transform: props.show? 'translateX(0%)':'translateX(100%)'};

  return (
    <>
    <StyledPanelWrap style={panelStyle} >
      <StyledPanel>
      <StyledButton onClick={()=>props.togglePanelFcn(false)}>Hide</StyledButton>
        {props.children}
      </StyledPanel>
    </StyledPanelWrap>
    </>
  )

}

export default SlidingPanel;