import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    width: 30%;
    padding: 12px 20px;
    margin: 8px 4px;
    display: inline-block;
    background-color #ccc;
    border: none;
    border-radius: 4px;
`

function Button({id, onCLick}) {
    return (
        <Btn 
            id={id}
            onClick={onCLick}
        />
    );
}

export default Button;