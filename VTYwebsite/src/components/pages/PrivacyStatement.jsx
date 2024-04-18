import React from 'react';

const PrivacyStatement = () => {
  return (
    <div className="max-w-3xl p-4">
      <h1 className="text-3xl font-semibold text-left mb-4">Tietosuojaseloste</h1>
      <p className="text-xl text-gray-700">
        Tietosuojaseloste – Jäsenrekisteri
        <br />
        Tämä on EU:n yleisen tietosuoja-asetuksen (GDPR) mukainen rekisteri- ja tietosuojaseloste Oulun yliopiston Vesiteknillinen Yhdistys ry:lle.
        <br />
        Laatimispäivämäärä 15.05.2018. Viimeisin muutos 6.9.2021.
      </p>

      <h2 className="text-2xl font-semibold mt-4">Rekisterinpitäjä</h2>
      <p>
        Oulun yliopiston vesiteknillinen yhdistys ry
        <br />
        Pentti Kaiteran katu 1, 90500 Oulun yliopisto
        <br />
        Postiosoite:
        <br />
        PL 3000
        <br />
        90014 Oulun yliopisto
      </p>

      <h2 className="text-2xl font-semibold mt-4">Rekisteristä vastaava yhteyshenkilö</h2>
      <p>
        Oulun yliopiston vesiteknillisen yhdistyksen hallituksen sihteeri.
        <br />
        vty(at)student.oulu.fi
      </p>

      <h2 className="text-2xl font-semibold mt-4">Rekisterin nimi</h2>
      <p>Oulun yliopiston vesiteknillinen yhdistys ry:n jäsenrekisteri</p>

      <h2 className="text-2xl font-semibold mt-4">Oikeusperuste ja henkilötietojen käsittelyn tarkoitus</h2>
      <p>
        EU:n yleisen tietosuoja-asetuksen mukainen oikeusperuste henkilötietojen käsittelylle on rekisterinpitäjän oikeutettu etu.
        <br />
        Henkilötietojen käsittelyn tarkoitus on yhdistyslain (503/1989) 11§ vaatima jäsenrekisterin ylläpito, sekä ylläpitää Oulun yliopiston vesiteknillinen yhdistys ry:n jäsenien yhteystietoja.
      </p>

      <h2 className="text-2xl font-semibold mt-4">Rekisterin tietosisältö</h2>
      <p>
        Rekisteriin tallennetaan seuraavia tietoja:
        <br />
        • Täydellinen nimi
        <br />
        • Sähköpostiosoite
        <br />
        • Opintojen aloitusvuosi nykyisessä tutkinto-ohjelmassa
        <br />
        • Nykyinen tutkinto-ohjelma
        <br />
        Rekisterissä ei säilytetä muiden kuin Oulun yliopiston vesiteknillisen yhdistyksen jäsenten tietoja, ja henkilötiedot poistetaan välittömästi, mikäli jäsenyys Oulun yliopiston vesiteknillisessä yhdistyksessä puretaan.
      </p>

      <h2 className="text-2xl font-semibold mt-4">Säännönmukaiset tietolähteet</h2>
      <p>
        Rekisteriin tallennettavat tiedot saadaan Oulun yliopiston vesiteknillisen yhdistyksen sähköpostista, johon hakemus jäsenyydestä jätetään ja johon on pääsy sihteerin lisäksi hallituksen puheenjohtajalla.
      </p>

      <h2 className="text-2xl font-semibold mt-4">Tietojen luovuttaminen ja tietojen siirto EU:n tai ETA:n ulkopuolelle</h2>
      <p>
        Tietoja rekisteristä voidaan luovuttaa tarpeen vaatiessa vain Oulun yliopiston vesiteknillinen yhdistys ry:n hallitukselle. Tietoja ei luovuteta muille tahoille. Tietoja ei luovuteta, eikä säilytetä Euroopan Unionin tai Euroopan talousalueen ulkopuolella.
      </p>

      <h2 className="text-2xl font-semibold mt-4">Rekisterin suojauksen periaatteet</h2>
      <p>
        Rekisterin käsittelyssä noudatetaan huolellisuutta. Tietoja säilytetään vain sähköisessä muodossa, luotettavassa ja EU:n tietosuojalainsäädäntöä noudattavan kolmannen osapuolen internet-palvelimella mikäli tarpeen. Rekisterin salaus toteutetaan Oulun yliopiston vesiteknillinen yhdistys ry:n omilla salausavaimilla. Tiedot eivät ole luettavissa muiden kuin Oulun yliopiston vesiteknillisen yhdistys ry:n vastuuhenkilöiden toimesta.
        <br />
        Rekisterinpitäjä huolehtii siitä, että rekisteriin on pääsy vain asiaan kuuluvilla henkilöillä.
      </p>

      <h2 className="text-2xl font-semibold mt-4">Tarkastusoikeus ja oikeus vaatia tiedon korjaamista</h2>
      <p>
        Jokaisella rekisterissä olevalla jäsenellä on oikeus tarkistaa rekisteriin tallennetut tietonsa ja vaatia mahdollisen virheellisen tiedon korjaamista tai puutteellisen tiedon täydentämistä. Mikäli henkilö haluaa tarkistaa hänestä tallennetut tiedot tai vaatia niihin oikaisua, pyyntö tulee lähettää rekisterinpitäjälle kirjallisesti. Rekisterinpitäjä voi pyytää tarvittaessa pyynnön esittäjää todistamaan henkilöllisyytensä. Rekisterinpitäjän tulee vastata asiakkaalle EU:n tietosuoja-asetuksessa ja Suomen laissa asiasta säädetyssä ajassa (pääsääntöisesti kuukauden kuluessa).
      </p>

      <h2 className="text-2xl font-semibold mt-4">Rekisterin tietojen säilytysaika</h2>
      <p>
        Rekisterissä säilytetään vain niiden henkilöiden tietoja, jotka ovat Oulun yliopiston vesiteknillinen yhdistys ry:n jäseniä. Jäsenyydestä eronneiden tai erotettujen henkilöiden tiedot poistetaan rekisteristä kohtuullisen ajan kuluessa viimeistään kuukauden päästä eroamis- tai erottamispäätöksestä.
      </p>
    </div>
  );
};

export default PrivacyStatement;

