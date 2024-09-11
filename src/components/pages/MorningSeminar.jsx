import React from 'react';

//<LinkText clickHandler={onItemClick} item={"hello"}></LinkText>
const MorningSeminar = ({onItemClick}) => {
  return ( 
    <div className="max-w-3xl p-4">
      <h1 className="text-3xl font-semibold text-left mb-4">Aamupalaseminaari</h1>
      <p className="text-xl text-gray-700">
        VTY:n aamupalaseminaari tarjoaa jäsenille mahdollisuuden aloittaa päivä inspiroivassa ilmapiirissä, hyvän seuran ja herkullisen aamupalan parissa. Aamupalaseminaarin ohjelmassa on yritysten tietoiskuja ja yritysesittelyitä, joissa kuullaan ajankohtaisista aiheista, yritysten projekteista sekä työmahdollisuuksista alan parissa. Aamupalaseminaareissa tarjotaan myös maukas aamupala, joka tarjoaa energiaa päivän aloitukseen. 
      </p>
    </div>
  );
};

export default MorningSeminar;
