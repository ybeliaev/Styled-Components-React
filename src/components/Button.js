import React from 'react';

import styled, {css, keyframes} from "styled-components"

const RotateAnimation = keyframes`
    from {
    transform: rotate(0deg);
    }

  to {
    transform: rotate(360deg);
  }

`

const StyledButton = styled.button.attrs(props=>({
    outlined: true,
}))`
    border: none;
    padding: 12px 24px;
    font-size: 20px;
    cursor: pointer;
    text-transform: uppercase;
    border-radius: 4px;
    &:focus{
        outline: none
    }
    
    align-self: ${props => props.align || "stretch"};
    ${props => props.primary && css`
            color: ${props=>props.color || "green"};
            background-color: ${props=>props.background || "white"};
    `}
    ${props => props.outlined && css`
            color: ${props=>props.color || "white"};
            border: 1px solid ${props=>props.color || "white"};
            background-color: transparent;
    `}   
    box-shadow: inset -1px 0px 5px 0px rgba(0, 100, 0, 0.4), 0px 0px 20px 0px rgba(0, 100, 0, 0.4);
    transition: all 0.3s;
    &:hover{    
       box-shadow: inset -1px 0px 15px 0px rgba(0, 100, 0, 1), 0px 0px 20px 0px rgba(0, 100, 0, 1); 
       animation: ${RotateAnimation} 1s infinite linear;
    }
    &:active{    
       box-shadow: inset -1px 0px 25px -0px rgba(0, 100, 0, 1), 0px 0px 40px 0px rgba(0, 100, 0, 1); 
       animation: ${RotateAnimation} 1s, pause-between-iterations 4s;
       transform: translateY(3px);
    }
    
`

const Button = (props) => {
    return <StyledButton {...props} />
};

export default Button;