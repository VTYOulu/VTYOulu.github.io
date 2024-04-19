import React from 'react';

//<LinkText clickHandler={onItemClick} item={"hello"}></LinkText>
const AnnualReport = ({onItemClick}) => {
  return ( 
    <div className="max-w-3xl p-4">
      <h1 className="text-3xl font-semibold text-left mb-4">Toimintakertomus</h1>
        <div className="text-xl text-gray-700">
          <p> Yhdistyksen toiminta pysyi aktiivisena toimikaudella 2022. Hallitus kokoontui toimikauden aikana 11 kertaa ja toimikauden aikana järjestettiin sääntömääräinen vuosikokous maaliskuussa sekä vaalikokous joulukuussa. Toimikauden aikana uusia jäseniä liittyi 41 kappaletta.</p>
          <br></br>
          <p>
            Hallitus aloitti toimikauden perehtymällä uusiin tehtäviin, ryhmäytymisellä sekä
            hallituksenvaihtosauna -illalla yhdessä edellisen toimikauden hallituksen jäsenien kanssa. Toimikauden aikana järjestettiin keväällä polkupyöräexcursio, jonka kohteina olivat Taskilan jätevedenpuhdistamo sekä Oulun yliopiston vesi-, energia- ja ympäristötekniikan tutkimusyksikkö. Syksyllä järjestettiin ulkomaanexcursio, jonka kohteena olivat Slovenia sekä Italia. 
          </p>
          <p>Sloveniassa excursion aikana pääsimme tutustumaan Ljubljanan yliopiston vesitekniikan yksikköön sekä tutkimukseen. Italiassa kävimme tutustumassa yhden yön retkellä eittämättä vesiteknillisimpään kaupunkiin Venetsiaan. Toimikauden aikana järjestettiin myös seminaari yhteistyössä Afry:n, Sitowisen ja RILlin kanssa, jossa oli tarjolla osallistujille aamupalaa ja kuulimme vesitekniikan opiskelijoiden työmahdollisuuksista sekä yritysten meneillään olevista kiinnostavista projekteista. Lisäksi toimikauden aikana on järjestetty iltapäiväkerhoja, joissa on ollut tarjolla kahvia, pientä purtavaa ja mahdollisuus tutustua yhdistyksen toimintaan sekä viettää aikaa muiden Teekkareiden kanssa.</p>
          <br></br>
          <p>Yhdistyksen toimintaa on toimikauden aikana esitelty Ympäristörakentajakillan fuksi-infossa sekä Ympäristörakentajakillan TorstaiTunnusteluissa, jossa Ympäristörakentajakillan sekä Vesiteknillisen yhdistyksen hallitukset esittelivät hallitustensa toimintaa Ympäristörakentajakillan jäsenistölle.</p>
          <br></br>
          <p>Joulukuussa järjestettiin perinteisesti vaalikokouksen yhteydessä yhdistyksen pikkujoulut Oulun kiipeilykeskuksella. Pikkujoulujen osallistujamäärä oli 43, joten yhdistyksen toiminta on tavoittanut toimikauden aikana hyvän määrän vesitekniikasta kiinnostuneita Teekkareita. Pikkujouluissa oli tarjolla jouluruokaa ja -juomaa sekä saunomismahdollisuus ja pikkujouluihin oli pyydetty vesitekniikan alan diplomityön esittely.</p>
          <p className='mt-4 font-light'>17.2.2023 Milanossa</p>
          <p className='mt-2 font-light'>Essi Vuorre</p>
          <p className='mt-2 font-light'>Puheenjohtaja 2022</p>
      </div>
    </div>
  );
};

export default AnnualReport;