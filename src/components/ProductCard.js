import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
        margin: 12px;
        border: solid 1px #000000;
        width: 50rem;
        cursor: pointer;
        box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
    `;

    const ContentTitle = styled.h4`
        color: #3E8AAF;
        font-family: "Lucida Console", Arial, Serif;
    `;

    const ContentID = styled.p`
        color: #3E8AAF;
    `;

const ProductCard = ( { nobbNr, productTitle } ) => {

    return (
        <ContentContainer>
            <ContentTitle>{productTitle}</ContentTitle>
            <ContentID><a href="#">{nobbNr}</a></ContentID>
        </ContentContainer>
    );
};

export default ProductCard;