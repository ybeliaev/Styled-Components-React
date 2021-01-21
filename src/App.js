import React from "react"
import styled from "styled-components";

import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from "./components/Console";
import Button from "./components/Button";

const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    background-color: black;
    color: white;
  
`

function App() {
  return (
    <AppWrapper>
      <Flex>
          <Title color="DarkGreen">Console cmd 2021. Jorgen</Title>
      </Flex>
      <Flex direction="column">
          <Console/>
          <Button outlined color={'green'} align={"flex-end"}>Send</Button>
      </Flex>

    </AppWrapper>
  );
}

export default App;
