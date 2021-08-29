import React from 'react'
import styled from 'styled-components'


const Header = () => {

    const HeaderBar = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;

    background-color: #3E8AAF;
    top: 100%;
`;
    const Title = styled.h1`
        margin: 0;
        padding: 0.8rem;
        font-size: 2rem;

        color: white;
    `;

    return ( 
        <HeaderBar>
            <Title>Prisinnsikt</Title>
        </HeaderBar>
    )
}

export default Header;