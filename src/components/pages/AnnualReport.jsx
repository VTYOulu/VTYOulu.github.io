import React from 'react';

//<LinkText clickHandler={onItemClick} item={"hello"}></LinkText>
const AnnualReport = ({onItemClick}) => {
  return ( 
    <div className="max-w-3xl p-4">
      <h1 className="text-3xl font-semibold text-left mb-4">Toimintakertomus</h1>
        <div className="text-xl text-gray-700">
          <p> 
            Yhdistys jatkoi toimikaudella 2024 aktiivista toimintaansa. Toimikauden vuosikokous 
            järjestettiin maaliskuussa ja vaalikokous joulukuussa. Hallituksen kokouksia pidettiin 13 
            näiden lisäksi. Uusia jäseniä liittyi yhteensä 20 toimikauden aikana.  
          </p>
          <br></br>
          <p>
            Hallituksen toimikausi alkoi hallituksen ja toimihenkilöiden perehtymisellä tehtäviinsä ja 
            tutustumisella toisiinsa. Tähän kuului myös hallituksenvaihtosauna, joka vietettiin yhdessä 
            edellisen toimikauden hallituslaisten ja toimihenkilöiden kanssa. Pitkän tauon jälkeen yhdistys 
            järjesti 40-vuotisen taipaleensa kunniaksi vuosijuhlat. Juhliin saapui yhdistyksen nykyisten 
            jäsenten lisäksi myös alumneja ja yhteistyökumppaneita.  
          </p>
          <br></br>
          <p>
            Keväällä järjestettiin perinteinen polkupyöräexcursio, jossa vierailtiin Oulun Veden Taskilan 
            jätevedenpuhdistamolla ja Suomen ympäristökeskuksen toimitiloissa. Keväällä yhdistys piti 
            myös iltapäiväkerhon, jossa vietettiin aikaa lautapelien ja haalarimerkkien ompelemisen 
            merkeissä. Syksyllä yhdistys järjesti ulkomaan excursion, jonka kohteena oli tällä kertaa Praha. 
            Prahassa yhdistys vieraili kahdella vesiteknillistä alaa opettavalla yliopistolla, vesilaitoksella 
            sekä nykyisellä ja entisellä jätevedenpuhdistamolla. Syksyn ohjelmaan kuului myös 
            aamupalaseminaari, jossa aamupalan lisäksi mukana olivat Ramboll, AFRY, WSP ja Sitowise 
            esittelemässä omia uramahdollisuuksiaan ja projektejaan. 
          </p>
          <br></br>
          <p>
            Yhdistys oli edustettuna keväällä Tampereella Flokki ry:n ja syksyllä Oulussa 
            Ympäristörakentajakillan vuosijuhlilla. Yhdistystä esiteltiin myös Ympäristörakentajakillan 
            fuksi-infossa sekä pestiesittelyssä. Viimeisen hallituksen kokouksen ja vaalikokouksen 
            yhteydessä järjestettiin yhdistyksen pikkujoulut Oulun kiipeilykeskuksen saunatiloissa. 
            Pikkujouluissa mm. saunottiin ja tarjottiin jouluruokia- ja juomia. Ohjelmassa oli myös alan 
            diplomityön ja väitöskirjan esittely sekä RIL ry:n toimintaa. 
          </p>
          <br></br>
          <p className='mt-4 font-light'>22.1.2025 Oulussa</p>
          <p className='mt-2 font-light'>Jaakko Nissilä</p>
          <p className='mt-2 font-light'>Puheenjohtaja 2024</p>
      </div>
    </div>
  );
};

export default AnnualReport;
