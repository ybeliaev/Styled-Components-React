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
    
`

const Button = (props) => {
    return <StyledButton {...props} />
};

export default Button;