import React from "react";
import styled from "styled-components";

const PanelWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 30em;
  transition: .3s ease-out;
  transform: ${props=>props.show?'translateX(0%)':'translateX(100%)'}
`

const Panel = styled.div`
  position: absolute;
  background-color:white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  padding: 1em;
`

const HideButton = styled.button`
    border-width:0px;
    padding:8px 16px;
    border-radius:5px;
`

const SlidingPanel = ({show, togglePanelFcn, children}) => {
  return (
    <>
    <PanelWrapper show={show}>
      <Panel>
      <HideButton onClick={()=>togglePanelFcn(false)}>Hide</HideButton>
        {children}
      </Panel>
    </PanelWrapper>
    </>
  )

}

export default SlidingPanel;