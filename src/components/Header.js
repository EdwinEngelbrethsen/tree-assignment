import React from 'react'
import styled from 'styled-components'

const HeaderBar = styled.div`
    background-color: #3E8AAF;
    top: 100%;
    grid-column: 1 / 3;
`;
    const Title = styled.h1`
        margin: 0;
        padding: 0.8rem;
        font-size: 2rem;

        color: white;
    `;

const Header = () => {

    return ( 
        <HeaderBar>
            <Title>Prisinnsikt</Title>
        </HeaderBar>
    )
}

export default Header;