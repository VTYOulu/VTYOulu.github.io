import React from 'react';

//<LinkText clickHandler={onItemClick} item={"hello"}></LinkText>
const LittleXmas = ({onItemClick}) => {
  return ( 
    <div className="max-w-3xl p-4">
      <h1 className="text-3xl font-semibold text-left mb-4">Pikkujoulut</h1>
      <p className="text-xl text-gray-700"> 
        Pikkujoulut ovat yhdistyksemme vuosittainen perinne, jossa jäsenet kokoontuvat viettämään rentoa ja yhteisöllistä iltaa joulun tunnelmissa. 
      </p>
      <p className="text-xl text-gray-700 my-2">
        Tapahtuma alkaa yhdistyksen vaalikokouksella, jossa käydään läpi ajankohtaisia asioita ja valitaan uusi hallitus seuraavalle kaudelle. Kokouksen jälkeen ilta jatkuu pikkujoulutunnelmissa: tarjolla on perinteisiä jouluruokia, mahdollisuus saunoa ja rentoutua paljussa, sekä monipuolista ohjelmaa, kuten esityksiä, leikkimielisiä kilpailuja ja musiikkia, joka yhdistää joulun ja vesitekniikan teemat. Pikkujoulut tarjoavat mukavan tavan viettää aikaa yhdessä ja virittäytyä joulun odotukseen.
      </p>
      <p className="text-xl text-gray-700 my-2"> 
        VTY:n pikkujouluja ei siis kannata jättää välistä!
      </p>
    </div>
  );
};

export default LittleXmas;
