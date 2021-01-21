import React from 'react';

import styled, {css} from "styled-components"

const StyledButton = styled.button`
    border: none;
    padding: 10px 16px;
    font-size: 18px;
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
    }
    &:active{    
       box-shadow: inset -1px 0px 25px -0px rgba(0, 100, 0, 1), 0px 0px 40px 0px rgba(0, 100, 0, 1); 
       transform: translateY(3px);
    }
    
`

const Button = (props) => {
    return <StyledButton {...props} />
};

export default Button;