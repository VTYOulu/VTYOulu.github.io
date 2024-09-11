import React from 'react';

//<LinkText clickHandler={onItemClick} item={"hello"}></LinkText>
const Activity = ({onItemClick}) => {
  return ( 
    <div className="max-w-3xl p-4">
      <h1 className="text-3xl font-semibold text-left mb-4">Toiminta</h1>
      <p className="text-xl text-gray-700">Vesiteknillinen yhdistys tukee opiskelijoiden urakehitystä luomalla kontakteja yritysmaailmaan. Yhdistys myös tukee opiskelijoiden urasuunitelmien kehittymistä välittämällä alan eksperttien uratarinoita ja vertaistukea. Tämän lisäksi VTY tarjoaa verkostoitumismahdollisuuksia sekä opiskelijakolleegoiden että yritysten kanssa. 
      </p>
    </div>
  );
};

export default Activity;
