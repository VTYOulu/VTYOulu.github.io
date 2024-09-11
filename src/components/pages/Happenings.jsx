import React from 'react';

//<LinkText clickHandler={onItemClick} item={"hello"}></LinkText>
const Happenings = ({onItemClick}) => {
  return ( 
    <div className="max-w-3xl p-4">
      <h1 className="text-3xl font-semibold text-left mb-4">Tapahtumat</h1>
      <p className="text-xl text-gray-700"> 
        VTY:n pääasiallinen toiminta perustuu tapahtumien järjestämiseen. Järjestämme jäsenillemme monenlaisia tapahtumia vesitekniikkaan liittyen. Tapahtumiamme ovat muun muassa aamupalaseminaarit, iltapäiväkerhot, excursiot kotimaahan tai ulkomaille, polkupyöräexcursiot sekä tietysti pikkujoulut.
        VTY:n tapahtumiin voi liittyä matalalla kynnyksellä. 
      </p>
    </div>
  );
};

export default Happenings;
