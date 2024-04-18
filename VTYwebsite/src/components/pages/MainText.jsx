import React from 'react';
import Instagram from '../Instagram';

const MainText = () => {
  return (
    <>
    <div className="max-w-3xl p-4">
      <h1 className="text-3xl font-semibold text-left mb-4">Tervetuloa Merikoskeen</h1>
      <p className="text-xl text-gray-700">
        <strong>Oulun yliopiston Vesiteknillinen yhdistys ry </strong> on vesitekniikasta kiinnostuneille tarkoitettu ammattiainekerho. VTY:n tarkoituksena on edistää vesitekniikan opiskelua, pitää yhteyttä alan yrityksiin ja tarjota vapaa-ajan toimintoja opiskelijoille.
      </p>
      <br></br>
      <p className="text-xl text-gray-700">
        Näkyvin toimintamme on excursioiden järjestäminen koti- ja ulkomaille. Perinteisesti joka toinen vuosi tehdään isompi reissu ulkomaille, ja vuosittain pienempiä vierailuja lähialueen yrityksiin. Lue lisää <strong>toiminta</strong>-sivulta.
      </p>
      <br></br>
      <p className="text-xl text-gray-700">
        VTY:n jäsenyys kannattaa! Jäsenenä pääset osallistumaan yhdistyksen tapahtumiin ja saat jäsenedut. Lue lisää <strong>täältä</strong>.
      </p>
    </div>
    </>
  );
};

export default MainText;
