import React from 'react';
import styled from "styled-components"

const StyledFlex = styled.div`
    display: flex;
    flex-direction: ${props=>props.direction || "row"}
    align-item: ${props=>props.align || "stretch"}
    justify-content: ${props=>props.justify || "stretch"} 
    margin: ${props=>props.margin || "0"}


`


const Flex = () => {
    return <StyledFlex />
};

export default Flex;