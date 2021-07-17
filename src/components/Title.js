import React from "react";
import styled from "styled-components"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #7100a5;
`;

const Wrapper = styled.section`
  padding: 1em;
`;

function Titulo() {
    return(
        <Wrapper>
            <Title>
            Busca CEP
            </Title>
        </Wrapper>
    )
}


export default Titulo;