import React, {useState} from 'react';
import styled from 'styled-components'

import products from './data/fokusvarer.json';
// import varegrupper from './data/varegrupper.json';


import Header from './components/Header';
import ProductCard from './components/ProductCard';


/* CSS for testing before styledcomponents */
import './App.css';


/* Styled Components */

const Grid = styled.div`
  display: grid;
  grid-auto-rows: 4rem auto;
  grid-auto-columns: 10rem auto;
  background-color: #fffaed;

  height: 100vh;
`;

const Sidebar = styled.div`
  background-color: #2f4050;
  color: #fefefe;
`;


function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);


  /* #TODO Refactor this */
  const displayProducts = () => {
    return products?.nobbProducts.filter(( val ) => {
      if (searchTerm == "" ) {
        return val
      } else if (val.langVaretekst?.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val
      } else if (val.nobbNr?.toString().includes(searchTerm)) {
        return val;
      }
    }).map(( product ) => {
      return <ProductCard key={product.nobbNr} nobbNr={product.nobbNr} productTitle={product.langVaretekst}/>
    });
  }


  /* 
  // https://reactgo.com/removeduplicateobjects
  const getUnique = (arr, comp) => {

    const unique = arr.map(e => e[comp])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter(e => arr[e]
    .map(e => arr[e]))

    return unique;
  }
  
  const getUniqueType = () => {
    return products.nobbProducts.map((product, index) => (
      <div key={index}>
        <p>{() => getUnique(product.vareType, "vareType")}</p>
      </div>
    ))
  }
  */


  return (
    <Grid>
      <Header />

      <Sidebar>
        <h4 onClick={() => setToggle(!toggle)}>Merke</h4>
        { /*  */
            toggle ? 
            <div>
              <p>Glava</p>
              <p>Swedoor</p>
              <p>...</p>
            </div> : null
        }

        <h4 onClick={() => setToggle2(!toggle)}>Type</h4>
        {
          toggle2 ? 
          <div>
            <p>Standard</p>
          </div> : null
        }
      </Sidebar>

      <section className="content">
      <input type="text" placeholder="søk..." onChange={(event) => {
        setSearchTerm(event.target.value); 
      }} />
        { displayProducts() }
      </section>
    </Grid>
  );
}

export default App;
