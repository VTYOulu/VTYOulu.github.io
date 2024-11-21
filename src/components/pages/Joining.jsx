import React from 'react';
import LinkText from '../LinkText';

const Joining = ({onItemClick}) => {
  return ( 
    <div className="max-w-3xl p-4">
      <h1 className="text-3xl font-semibold text-left mb-4">Liittyminen</h1>
      <p className="text-xl text-gray-700 mt-4">Mikäli olet tekniikan opiskelija, liittyminen tapahtuu joko <a className="text-blue-500 hover:underline" href="https://forms.office.com/e/bgEwYHdFcZ">Forms linkin</a> kautta tai seuraavan ohjeen mukaan. Muussa tapauksessa ota yhteyttä hallitukseen. </p>
      <p className="text-xl text-gray-700 mt-4 ml-1"><strong>Ohje:</strong></p>
      <div className='text-xl text-gray-700 mt-4 ml-4 mb-2'>
        <p className="text-xl">1. Maksa liittymismaksu kuusi (6) euroa Oulun yliopiston Vesiteknillinen Yhdistys ry:n tilille <strong>FI50 4108 0010 3828 47</strong> (BIC: ITELFIHH). Muista laittaa viestiksi oma nimesi!</p>
        <p className="text-xl">2. Lähetä sähköpostia osoitteeseen <a className="text-blue-500 hover:underline" href="mailto:vty@student.oulu.fi">vty@student.oulu.fi</a>. Kirjoita viestiin täydellinen nimesi, syntymävuotesi, sekä tutkinto-ohjelmasi.</p>
      </div>
      <p className="text-xl text-gray-700 ml-0"><strong>HUOM! </strong>
        Valmistuneet pysyvät VTY:n jäseninä, mikäli niin haluavat, joten VTY:n kautta voi tavata myös työelämässä mukana olevia ympäristörakentajia! Jos et ole kiinnostunut seniorijäsenyydestä, ota yhteyttä <a className="text-blue-500 hover:underline" href="mailto:vty@student.oulu.fi">vty@student.oulu.fi</a>.
      </p>
      <p className="text-xl text-gray-700 mt-4">Linkki <LinkText className={"text-md"} clickHandler={onItemClick} item={"Tietosuojaseloste"}>tietosuojaselosteeseen.</LinkText></p>
      <p className="text-xl text-gray-700 mt-8">Mikä ihmeen vesitalous-lehti?</p>
      <div className="flex flex-wrap">
        <div className="w-full pr-4 md:w-1/2">
          <p className="text-xl text-gray-700 mt-6">Kyllä. Kyseessä on Maa- ja vesitekniikan tuki ry:n julkaisema vesialan ammattilehti. Kuusi kertaa vuodessa ilmestyvä tuhti tietopaketti, jonka vuosikerralla on muuten hintaa 50€! <strong>Sinulle, tuleva/nykyinen VTY:n opiskelijajäsen, tämä pirskahtelevan raikas lukukokemus on täysin ILMAINEN.</strong> </p>
        </div>
        <div className="w-full pl-12 mt-6 md:w-1/2">
          <img src="vesitalous-217x300.jpg" alt="Tuira maisema"></img>
        </div>
      </div>
    </div>
  );
};

export default Joining;
