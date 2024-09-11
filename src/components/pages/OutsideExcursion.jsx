import React from 'react';

//<LinkText clickHandler={onItemClick} item={"hello"}></LinkText>
const OutsideExcursion = ({onItemClick}) => {
  return ( 
    <div className="max-w-3xl p-4">
      <h1 className="text-3xl font-semibold text-left mb-4">Ulkomaan excursio</h1>
      <p className="text-xl text-gray-700">
        VTY:n odotetuimpiin tapahtumiin lukeutuu joka toinen vuosi järjestettävä ulkomaan excursio. Tämä matka tarjoaa jäsenille ainutlaatuisen tilaisuuden tutustua kansainväliseen työelämään, kulttuuriin ja verkostoitumismahdollisuuksiin rennossa ja innostavassa ilmapiirissä.
      </p>
      <p className="text-xl text-gray-700 mt-2">
        Excursio suuntautuu joka kerta eri maahan, jossa osallistujat pääsevät vierailemaan paikallisissa yrityksissä ja organisaatioissa. Vierailujen aikana tutustutaan paikallisiin yliopistoihin, sekä muihin alaan liittyviin vierailukohteisiin.
      </p>
      <p className="text-xl text-gray-700 mt-2">
        Matkan ohjelmaan kuuluu myös vapaa-ajan aktiviteetteja, kuten kaupunkikierroksia, kulttuurikohteisiin tutustumista ja yhteisiä illanviettoja.
      </p>
    </div>
  );
};

export default OutsideExcursion;
