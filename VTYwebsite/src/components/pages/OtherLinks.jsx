import React from 'react';

//<LinkText clickHandler={onItemClick} item={"hello"}></LinkText>
const OtherLinks = ({onItemClick}) => {
  return ( 
    <div className="max-w-6xl p-4 text-xl flex flex-wrap">
      <h1 className="text-3xl font-semibold text-left ml-8">Muita Linkkejä</h1>
      <div className='flex max-sm:flex-wrap w-full m-4 p-4'>
        <div className="w-2/5 mr-8 mt-8">
          <p className="text-xl font-semibold text-gray-700 mb-2">Opiskelijajärjestöjä</p>
          <div className="mt-2"><a class="text-blue-500 hover:underline ml-8 display: inline-flex" href="http://ymparistorakentajakilta.net/">- Oulun yliopiston Ympäristörakentajakilta ry</a></div>
          <p className="text-lg text-gray-700 mb-2 ml-16">- Oulun yliopistossa ympäristö- ja rakennustekniikkaa opiskelevien ainejärjestö</p>
          <div className="mt-2"><a class="text-blue-500 hover:underline ml-8 display: inline-flex" href="https://akvavesi.fi/en/akva-2/">- AKVA</a></div>
          <p className="text-lg text-gray-700 mb-2 ml-16">- (Akateemisen KirkasVesi Asiantuntijat) Aalto-yliopiston vesi- ja ympäristötekniikan ammattiainekerho</p>
          <div className="mt-2"><a class="text-blue-500 hover:underline ml-8 display: inline-flex" href="https://ymparistoteekkarikilta.fi/">- Ympäristöteekkarikilta ry</a></div>
          <p className="text-lg text-gray-700 mb-2 ml-16">- Tampereen yliopiston ympäristö- ja energiatekniikan ainejärjestö</p>
          <div className="mt-2"><a class="text-blue-500 hover:underline ml-8 display: inline-flex" href="https://pellettiry.fi/pelletti/">- Pelletti ry</a></div>
          <p className="text-lg text-gray-700 mb-2 ml-16">- LUT:n ympäristötekniikan kilta Pelletti ry</p>
          <div className="mt-2"><a class="text-blue-500 hover:underline ml-8 display: inline-flex" href="https://rakennusinsinoorikilta.fi/en/">- Rakennusinsinöörikilta</a></div>
          <p className="text-lg text-gray-700 mb-2 ml-16">- Aalto-yliopiston Rakennusinsinöörikilta</p>
          <p className="text-xl font-semibold text-gray-700 mb-2">Vesipuolen opetusta</p>
          <div className="mt-2"><a class="text-blue-500 hover:underline ml-8 display: inline-flex" href="https://www.oulu.fi/fi/yliopisto/tiedekunnat-ja-yksikot/teknillinen-tiedekunta/vesi-energia-ja-ymparistotekniikka">- Oulun yliopiston vesi- ja ympäristötekniikan laboratorio</a></div>
          <div className="mt-2"><a class="text-blue-500 hover:underline ml-8 display: inline-flex" href="https://www.aalto.fi/fi/rakennetun-ympariston-laitos">- Aalto-yliopiston rakennetun ympäristön laitos</a></div>
          <div className="mt-2"><a class="text-blue-500 hover:underline ml-8 display: inline-flex" href="https://www.tuni.fi/fi/tutustu-meihin/materiaalitiede-ja-ymparistotekniikka">- Tampereen yliopiston materiaalitieteen ja ympäristötekniikan tutkimusyksikkö</a></div>
        </div>
        <div className="w-3/5 mt-8 text-lg">
          <p className="text-xl font-semibold text-gray-700 mb-2">Yhdistyksiä</p>
          <div className="mt-2"><a class="text-blue-500 hover:underline ml-8 display: inline-flex" href="https://www.vesiyhdistys.fi/">- Suomen vesiyhdistys</a></div>
          <div className="mt-2"><a class="text-blue-500 hover:underline ml-8 display: inline-flex" href="https://www.vvy.fi/">- Vesilaitosyhdistys</a></div>
          <div className="mt-2"><a class="text-blue-500 hover:underline ml-8 display: inline-flex" href="https://siwi.org/">- Stockholm International Water Institute</a></div>
          <div className="mt-2"><a class="text-blue-500 hover:underline ml-8 display: inline-flex" href="https://www.unesco.org/fr/wwap?hub=68313">- UNESCO:n vesiohjelma</a></div>
          <p className="text-xl font-semibold text-gray-700 mb-2 mt-6">Ympäristöviranomaisia</p>
          <div className="mt-2"><a class="text-blue-500 hover:underline ml-8 display: inline-flex" href="https://www.ymparisto.fi/fi">- Ympäristöhallinto</a></div>
          <div className="mt-2"><a class="text-blue-500 hover:underline ml-8 display: inline-flex" href="https://www.eea.europa.eu/en">- European Environment Agency</a></div>
          <div className="mt-2"><a class="text-blue-500 hover:underline ml-8 display: inline-flex" href="https://www.epa.gov/">- United States Environmental Protection Agency</a></div>
          <div className="mt-2"><a class="text-blue-500 hover:underline ml-8 display: inline-flex" href="https://waterdata.usgs.gov/nwis">- United States Geological Survey National Water Information System</a></div>
        </div>
      </div>
    </div>
  );
};

export default OtherLinks;