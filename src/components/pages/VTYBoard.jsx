import React from 'react';

const VTYBoard = () => {
  return (
    <div className="max-w-6xl p-4 text-xl flex flex-wrap">
      <h1 className="text-3xl font-semibold text-left ml-8">Hallitus</h1>
      <div className='flex max-sm:flex-wrap w-full m-4 p-4'>
        <div className="w-2/5 mr-8 mt-8">
          <p className="text-xl font-semibold text-gray-700 mb-2">VTY:n Hallitus 2025</p>
          <p className='mt-4'><strong>Puheenjohtaja: </strong> Roope Pihlajavirta</p>
          <p className='mt-4'><strong>Sihteeri: </strong> Katri Vaarala</p>
          <p className='mt-4'><strong>Rahastonhoitaja: </strong> Heikki Timonen</p>
          <p className='mt-4'><strong>Excursiomestari: </strong> Nella Hietanen</p>
          <p className='mt-4'><strong>Emäntä: </strong> Ella Pesonen</p>
          <p className='mt-4'><strong>Tapahtumavastaava: </strong> Jaakko Nissilä</p>
          <p className='mt-4'><strong>Virallinen fuksi: </strong> Jaakko Reunanen</p>
          <p className='mt-4'>Toimihenkilöt: </p>
          <p className='mt-4'><strong>Webmaster: </strong> Anni-Noora Niemelä</p>
          <p className='mt-4'><strong>Excuapuri: </strong> Atte Seppänen</p>
          <p className='mt-4'><strong>Kummi: </strong> Jaakko Nissilä</p>
          <br></br>
          <p>Puheenjohtajan saa kiinni sähköpostiosoitteesta <a class="text-blue-500 hover:underline" href="mailto:vty@student.oulu.fi">vty@student.oulu.fi</a></p>
        </div>
        <div className="w-3/5 mt-8">
          <p className="text-justify text-xl font-semibold text-gray-700 mb-2">Toimintasuunitelma 2025</p>
          <p>
            Vuonna 2025 VTY järjestää excursioita ja muita jäsenistölle suunnattuja tapahtumia. Hallitus 
            kokoontuu tarpeen vaatiessa, kuitenkin vähintään kaksi kertaa toimikauden aikana. 
            Yhdistyksen sääntömääräiset kokoukset järjestetään sääntöjen määräämissä puitteissa: 
            vuosikokous maaliskuun loppuun mennessä ja vaalikokous joulukuussa. Yhteistyötä Maa- ja 
            vesitekniikan tuki ry:n ja RIL:in kanssa jatketaan. VTY pyrkii tekemään yhteistyötä 
            aikaisempien yhteistyökumppaneiden kanssa, joita ovat esimerkiksi AFRY ja Ramboll. Lisäksi 
            yhteistyötä pyritään jatkamaan muiden vesitekniikan ammattiainekerhojen Flokki ry:n sekä 
            Akvan kanssa.
          </p>
          <br></br>
          <p>
            Keväällä järjestetään perinteinen polkupyöräexcursio, jossa vieraillaan vesitekniikan alan 
            yrityksissä Oulun alueella. Lisäksi syksyllä pyritään järjestämään kotimaahan suuntautuva 
            excursio. Keväällä tai syksyllä järjestetään aamupalaseminaari, joihin kutsutaan vesitekniikan 
            alan toimijoita esittelemään työllisyysmahdollisuuksia sekä alan tutkimusta ja projekteja. 
            Yhteistyötä Oulun yliopiston vesitekniikan henkilökunnan kanssa pyritään lisäämään samalla 
            tutustuen alan tutkimukseen ja sen uramahdollisuuksiin.  
          </p>
          <br></br>
          <p>
            VTY pyrkii kohdistamaan toimintaansa siten, että alempien vuosikurssien opiskelijoita 
            saataisiin aktivoitua mukaan yhdistyksen toimintaan. Yhdistyksen toimintaa esitellään syksyllä 
            Oulun yliopiston Ympäristörakentajakillan fuksi-infossa. Uusia toimijoita houkutellaan 
            lähtemään mukaan hallitus- ja toimihenkilöpesteihin vaalikokousta edeltävässä 
            kähmintätilaisuudessa. Vaalikokouksen yhteydessä järjestetään jäsenistölle pikkujoulut, joissa 
            vietetään iltaa ja verkostoidutaan. Tapahtumaan järjestetään diplomityön esittely ja 
            kiinnostuksen mukaan muita yhteistyökumppaneiden esittelyjä. Muita tapahtumia yhdistyksen 
            jäsenille järjestetään resurssien ja toimijoiden aktiivisuuden mukaan.
          </p>
          <br></br>
          <p className='font-light'>Jaakko Nissilä</p>
          <p className='font-light'>Puheenjohtaja 2024</p>
        </div>
      </div>
    </div>
  );
};

export default VTYBoard;

