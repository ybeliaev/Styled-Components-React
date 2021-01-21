import React, {useState} from 'react';
import styled from "styled-components"
import Flex from "./Flex";
import Line from "./Line";

const StyledConsole = styled.textarea`
    width: 100%;
    height: 75vh;
    background: black;
    font-size: 24px;
    border: none;
    resize: none;
    color: ${(props) => props.color || props.theme.colors.primary};
    &:focus{
        outline: none
    }
    @media ${props => props.theme.media.phone}{
        border: 1px solid red;
    } @media ${props => props.theme.media.tablet}{
        border: 1px solid green;
    }
`

const Console = (props) => {
    const [lines, setLines] = useState(["C/Users/Jorgen>"])

    const onKeyPress = e => {
        if(e.charCode === 13){
            setLines([...lines, "C/Users/Jorgen>"])
        }
    }

    return (
        <Flex>
            <Flex direction={"column"} margin='0 10px'>
                {
                    lines.map(item => <Line color={props.color}>{item}</Line>)
                }
            </Flex>
            <StyledConsole {...props} onKeyPress={onKeyPress}/>
        </Flex>
    )
};

export default Console;