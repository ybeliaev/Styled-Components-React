import React from "react"
import styled from "styled-components";
import Title from "./components/Title";

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
      <header className="App-header">
        <Title>Asss</Title>
      </header>
    </AppWrapper>
  );
}

export default App;
