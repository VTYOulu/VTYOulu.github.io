import React from 'react';

//<LinkText clickHandler={onItemClick} item={"hello"}></LinkText>
const InlandExcursion = ({onItemClick}) => {
  return ( 
    <div className="max-w-3xl p-4">
      <h1 className="text-3xl font-semibold text-left mb-4">Kotimaan excursio</h1>
      <p className="text-xl text-gray-700"> 
        VTY järjestää kotimaan excursion vuorottaisina vuosina ulkoexcursion kanssa. Excursio tarjoaa jäsenille mahdollisuuden tutustua lähemmin Suomen eri kaupunkeihin ja niiden yrityksiin, sillä vierailemme paikallisissa yrityksissä tutustumassa heidän toimintaansa. 
      </p>
      <p className="text-xl text-gray-700 my-2">
        Matkan aikana nautitaan myös rennosta yhdessäolosta ja paikallisista nähtävyyksistä. Reittiin voi kuulua vierailuja historiallisiin kohteisiin, luonnonkauniisiin maisemiin ja rentouttavia illanviettoja mukavassa seurassa. 
      </p>
      <br></br>
      <p className="text-xl text-gray-700 my-2">
        Kotimaan excursion lisäksi VTY järjestää polkupyöräexcursioita Oulun alueella. Polkupyöräexcursio on tapahtuma, jossa pyöräillään yhdessä paikallisiin vesitekniikan alan yrityksiin tutustumaan niiden toimintaan ja samalla nauttien raikkaasta ulkoilmasta.
      </p>
    </div>
  );
};

export default InlandExcursion;
