import React from 'react';

const ProductCard = ( { nobbNr, varetekst1 } ) => {


    return (
        <div>
            <section>
                <h4>{varetekst1}</h4>
                <p>{nobbNr}</p>
            </section>
        </div>
    );
};

export default ProductCard;