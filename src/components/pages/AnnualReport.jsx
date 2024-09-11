import React from 'react';

//<LinkText clickHandler={onItemClick} item={"hello"}></LinkText>
const AnnualReport = ({onItemClick}) => {
  return ( 
    <div className="max-w-3xl p-4">
      <h1 className="text-3xl font-semibold text-left mb-4">Toimintakertomus</h1>
        <div className="text-xl text-gray-700">
          <p> Yhdistyksen toiminta pysyi aktiivisena toimikaudella 2023. Hallitus kokoontui toimikauden aikana 12 kertaa ja 
              toimikauden aikana järjestettiin sääntömääräinen vuosikokous maaliskuussa sekä vaalikokous joulukuussa. 
              Toimikauden aikana uusia jäseniä liittyi 24 kappaletta. 
          </p>
          <br></br>
          <p>
            Hallitus aloitti toimikauden perehtymällä uusiin tehtäviin, ryhmäytymisellä sekä hallituksenvaihtosauna-illalla yhdessä edellisen toimikauden hallituksen jäsenien kanssa. Toimikauden aikana järjestettiin keväällä 
            polkupyöräexcursio, jonka kohteina olivat AFRY Finland Oy:n vesitekniikan osasto ja Pohjois-Pohjanmaan ELY-keskus. Syksyllä järjestettiin kotimaan excursio, jonka kohteena oli Lappi ja Rovaniemi. Rovaniemellä yhdistys 
            vieraili Lapin ELY-keskuksella ja Nevellä. Toimikauden aikana järjestettiin myös seminaari yhteistyössä AFRYn, 
            Sitowisen, Rambollin ja RILlin kanssa, jossa oli tarjolla osallistujille aamupalaa ja kuulimme vesitekniikan 
            opiskelijoiden työmahdollisuuksista sekä yritysten meneillään olevista kiinnostavista projekteista. Lisäksi 
            toimikauden aikana on järjestetty iltapäiväkerhoja, joissa on ollut tarjolla kahvia, pientä purtavaa ja 
            mahdollisuus tutustua yhdistyksen toimintaan sekä viettää aikaa muiden Teekkareiden kanssa. Yhdistys 
            järjesti lisäksi Finanssin PeliVeikkojen kanssa yhteisen peli-illan. Joulukuussa pidettiin Pub Kuutio -ilta, jossa 
            yhdistys vieraili Oulun Kaijonharjussa sijaitsevassa Pub Kuutiossa viettämässä iltaa ja verkostoitumassa 
            yhdistyksen muiden jäsenten kanssa.
          </p>
          <br></br>
          <p>
            Yhdistyksen toimintaa on toimikauden aikana esitelty Ympäristörakentajakillan fuksi-infossa sekä 
            Ympäristörakentajakillan pestiesittelyssä, jossa Ympäristörakentajakillan sekä Vesiteknillisen yhdistyksen 
            hallitukset esittelivät hallitustensa toimintaa Ympäristörakentajakillan jäsenistölle. Joulukuussa järjestettiin 
            perinteisesti vaalikokouksen yhteydessä yhdistyksen pikkujoulut Oulun kiipeilykeskuksella. Pikkujoulujen 
            osallistujamäärä oli 50, joten yhdistyksen toiminta on tavoittanut toimikauden aikana hyvän määrän 
            vesitekniikasta kiinnostuneita Teekkareita. Pikkujouluissa oli tarjolla jouluruokaa ja -juomaa sekä 
            saunomismahdollisuus ja pikkujouluihin oli pyydetty vesitekniikan alan diplomityön esittely.</p>
          <br></br>
          <p className='mt-4 font-light'>18.1.2024 Oulussa</p>
          <p className='mt-2 font-light'>Maria Wiik</p>
          <p className='mt-2 font-light'>Puheenjohtaja 2023</p>
      </div>
    </div>
  );
};

export default AnnualReport;
