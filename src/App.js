import React, {useState} from 'react';

import products from './data/fokusvarer.json';
import varegrupper from './data/varegrupper.json';


import Header from './components/Header';
import ProductCard from './components/ProductCard';


import './App.css';


function App() {

  const [searchTerm, setSearchTerm] = useState("");

  const displayProducts = () => {
    return products?.nobbProducts.filter( ( val ) => {
      if (searchTerm == "" ) {
        return val
      } else if (val.varetekst1.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val
      } else if (val.nobbNr.toString().includes(searchTerm)) {
        return val;
      }
    }).map( ( product, key ) => {
      console.log(products)
      return <ProductCard key={key} nobbNr={product.nobbNr} varetekst1={product.varetekst1}/>
    } )
  }


  console.log(products);
  console.log(varegrupper[0]);
  return (
    <div>
      <Header />
      <input type="text" placeholder="søk..." onChange={(event) => {
        setSearchTerm(event.target.value); 
      }} />
      <section>
        { displayProducts() }
      </section>
    </div>
  );
}

export default App;
