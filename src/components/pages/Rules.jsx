import React from 'react';

//<LinkText clickHandler={onItemClick} item={"hello"}></LinkText>
const Rules = ({onItemClick}) => {
  return ( 
    <div className="max-w-4xl p-4">
      <h1 className="text-3xl font-semibold text-left mb-4">Säännöt</h1>
      <div className="text-xl text-gray-700 mt-4">
        <p className='mt-4'> Oulun yliopiston Vesiteknillinen yhdistys ry säännöt </p>
        <p className='mt-4 text-gray-600'> 1 LUKU – Yleisiä säännöksiä</p>
        <p className='mt-4 text-gray-600'> 1 § Yhdistyksen nimi, kotipaikka ja kieli</p>
        <p className='mt-4 text-black'> Yhdistyksen nimi on Oulun yliopiston Vesiteknillinen yhdistys ja sen kotipaikka on Oulun kaupunki. Yhdistys on suomenkielinen.</p>
        <p className='mt-4 text-gray-600'> 2 § Yhdistyksen tarkoitus ja tavoitteet</p>
        <p className='mt-4 text-black'> Yhdistyksen tarkoituksena on ajaa jäsentensä yleisiä ja yhteiseen opiskeluun liittyviä etuja yliopistossa, yhdistää jäseniään, innostaa seuraamaan ammatillisia kysymyksiä, edistää ammattitaitoa sekä luoda ja ylläpitää suhteita työelämään. Yhdistyksen tavoitteena on luoda ja ylläpitää suhteita yliopiston henkilökunnan ja opiskelijoiden välillä.</p>
        <p className='mt-4 text-gray-600'> 3 § Tarkoituksen toteuttaminen</p>
        <p className='mt-4 text-black'> Tarkoituksensa toteuttamiseksi yhdistys järjestää jäsenilleen kokouksia, illanviettoja, juhlia ja opintomatkoja, harjoittaa koulutus-, tiedotus- ja julkaisutoimintaa ja on yhteistyössä muiden alan järjestöjen kanssa. Toimintansa tukemiseksi yhdistys voi järjestää arpajaisia, myyjäisiä ja maksullisia huvitilaisuuksia asianmukaisen luvan saatuaan, ottaa vastaan lahjoituksia ja omistaa toimintaansa varten tarpeellista kiinteää omaisuutta.</p>
        <p className='mt-4 text-gray-600'> 2 LUKU – jäsenet</p>
        <p className='mt-4 text-gray-600'> 4 § Yhdistyksen jäsenet</p>
        <p className='mt-4 text-black'> Yhdistyksen jäseniä ovat varsinaiset jäsenet, kunniajäsenet ja kannatusjäsenet. Hallituksen on pidettävä luetteloa yhdistyksen jäsenistä.</p>
        <p className='mt-4 text-gray-600'> 5 § Varsinaiset jäsenet</p>
        <p className='mt-4 text-black'> Yhdistyksen varsinaisia jäseniä voivat olla Oulun yliopistossa opiskelevat, jäsenmaksun maksaneet henkilöt, joiden opinnot johtavat diplomi-insinöörin tai arkkitehdin tutkintoon. Hallitus hyväksyy varsinaiset jäsenet kokouksissaan.</p>
        <p className='mt-4 text-gray-600'> 6 § Kunniajäsenet</p>
        <p className='mt-4 text-black'> Yhdistys voi kutsua kunniajäsenekseen henkilön, joka on huomattavasti edistänyt yhdistyksen tarkoituksen toteuttamista tai jolle yhdistys muuten haluaa osoittaa kunnioitustaan. Kunniajäseneksi hyväksymisestä päättää yhdistyksen kokous kahden kolmasosan (2/3) äänten enemmistöllä äänestyksessä annetuista äänistä.</p>
        <p className='mt-4 text-gray-600'> 7 § Kannatusjäsenet</p>
        <p className='mt-4 text-black'> Kannatusjäseneksi voidaan hyväksyä yksityinen henkilö tai oikeuskelpoinen yhteisö, joka yhdistyksen toiminnan tukemiseksi suorittaa yhdistyksen vuosikokouksen määräämän kannatusjäsenmaksun.</p>
        <p className='mt-4 text-gray-600'> 8 § Jäsenmaksu</p>
        <p className='mt-4 text-black'> Varsinaisilta jäsenilta perittävän jäsenmaksun suuruudesta päättää yhdistyksen vuosikokous. Kannatusjäseniltä peritään yhdistyksen vuosikokouksessa määrätty vuotuinen tai kertakaikkinen kannatusjäsenmaksu. Kunniajäsenilta ei peritä jäsenmaksua.</p>
        <p className='mt-4 text-gray-600'> 9 § Jäsenten oikeudet ja velvollisuudet</p>
        <p className='mt-4 text-black'> Kaikilla yhdistyksen jäsenillä on läsnäolo- ja puheoikeus yhdistyksen kokouksissa sekä oikeus osallistua yhdistyksen järjestämiin yleisiin tilaisuuksiin. Äänioikeutettuja yhdistyksen kokouksissa ovat ainoastaan varsinaiset jäsenet. Vaalikelpoisia yhdistyksen hallituksen jäseniksi ovat yhdistyksen varsinaiset jäsenet.</p>
        <p className='mt-4 text-gray-600'>10 § Jäsenten erottaminen</p>
        <p className='mt-4 text-black'>Yhdistyksen kokous voi kolmen neljäsosan (3/4) äänten enemmistöllä erottaa määräajaksi tai kokonaan jäsenen, joka käyttäytymisellään on osoittanut, ettei hän ansaitse yhdistyksen jäseneltä edellytettävää luottamusta tai joka menettelyllään yhdistyksestä tai sen ulkopuolella on huomattavasti vahingoittanut yhdistystä. Jäsen voidaan erottaa, jos hän ei täytä laissa tai yhdistyksen säännöissä mainittuja jäsenyyden ehtoja.</p>
        <p className='mt-4 text-gray-600'>11 § Jäsenten eroaminen</p>
        <p className='mt-4 text-black'>Jäsenellä on oikeus erota yhdistyksestä ilmoittamalla siitä kirjallisesti yhdistyksen hallitukselle tai sen puheenjohtajalle. Jäsen voi myös erota ilmoittamalla siitä yhdistyksen kokouksessa pöytäkirjaan merkittäväksi.</p>
        <p className='mt-4 text-gray-600'>12 § Kurinpito</p>
        <p className='mt-4 text-black'>Yhdistyksen kokous voi kurinpitorangaistuksena maaraajaksi kieltää yhdistyksen jäseneltä oikeuden osallistua yhdistyksen tilaisuuksiin sekä varsinaiselta jäseneltä lisäksi äänioikeuden ja vaalikelpoisuuden.</p>
        <p className='mt-4 text-gray-600'>3 LUKU – Hallinto</p>
        <p className='mt-4 text-gray-600'>13 § Yhdistyksen hallinto</p>
        <p className='mt-4 text-black'>Yhdistyksen päätösvaltaa käyttää yhdistyksen kokous sekä toimeenpanovaltaa vaalikokouksen valitsema hallitus.</p>
        <p className='mt-4 text-gray-600'>14 § Nimenkirjoittajat</p>
        <p className='mt-4 text-black'>Yhdistyksen nimen kirjoittavat hallituksen puheenjohtaja tai varapuheenjohtaja yhdessä jonkun hallituksen jäsenen kanssa.</p>
        <p className='mt-4 text-gray-600'>15 § Yhdistyksen hallitus</p>
        <p className='mt-4 text-black'>Yhdistyksen hallituksen valitsee yhdistyksen vaalikokous. Hallituksen toimikausi on kalenterivuosi.</p>
        <p className='mt-4 text-gray-600'>16 § Hallituksen tehtävät</p>
        <p className='mt-4 text-black'>Hallituksen tehtävänä on</p>
        <p className='mt-4 ml-8 text-black'>1. johtaa yhdistyksen toimintaa</p>
        <p className='mt-4 ml-8 text-black'>2. kutsua yhdistyksen kokoukset koolle, valmistella niissä esille tuotavat asiat ja toimeenpanna niissä tehdyt päätökset</p>
        <p className='mt-4 ml-8 text-black'>3. hoitaa yhdistyksen taloutta ja omaisuutta</p>
        <p className='mt-4 ml-8 text-black'>4. päättää varsinaiseksi jäseneksi hyväksymisestä</p>
        <p className='mt-4 ml-8 text-black'>5. laatia ehdotus yhdistyksen toimintasuunnitelmaksi, talousarvioksi, toimintakertomukseksi ja tilinpäätökseksi</p>
        <p className='mt-4 ml-8 text-black'>6. valvoa toimikuntien ja toimihenkilöiden toimintaa</p>
        <p className='mt-4 ml-8 text-black'>7. edustaa yhdistystä</p>
        <p className='mt-4 ml-8 text-black'>8. valvoa sääntöjen noudattamista</p>
        <p className='mt-4 text-gray-600'>17 § Hallituksen jäsenet</p>
        <p className='mt-4 text-black'>Hallitukseen kuuluu</p>
        <p className='mt-4 ml-8 text-black'>1. puheenjohtaja, jonka tehtävänä on</p>
        <p className='mt-4 ml-12 text-black'>- edustaa yhdistystä</p>
        <p className='mt-4 ml-12 text-black'>- kutsua koolle hallituksen kokoukset ja johtaa niissä puhetta</p>
        <p className='mt-4 ml-12 text-black'>- valvoa yhdistyksen kokousten ja hallitusten kokousten päätösten täytäntöönpanoa</p>
        <p className='mt-4 ml-8 text-black'>2. sihteeri, jonka tehtävänä on</p>
        <p className='mt-4 ml-12 text-black'>- laatia pöytäkirjat hallituksen kokouksista</p>
        <p className='mt-4 ml-12 text-black'>- huolehtia yhdistyksen jäsenrekisteristä sekä arkistoista</p>
        <p className='mt-4 ml-8 text-black'>3. rahastonhoitaja, jonka tehtävänä on</p>
        <p className='mt-4 ml-12 text-black'>- hoitaa yhdistyksen taloutta ja kirjanpitoa</p>
        <p className='mt-4 ml-12 text-black'>- laatia seuraavan toimikauden tulo- ja menoarvio</p>
        <p className='mt-4 ml-12 text-black'>- laatia ehdotus tilinpäätökseksi toimikauden päätyttyä</p>
        <p className='mt-4 ml-8 text-black'>4. 1-9 muuta jäsentä, joiden tehtävät määrittää vuosittain yhdistyksen vaalikokous</p>
        <p className='mt-4 text-black'>Hallitus valitsee keskuudestaan varapuheenjohtajan, joka hoitaa puheenjohtajan tehtäviä tämän poissa ollessa sekä toimii puheenjohtajan apuna tarvittaessa.</p>
        <p className='mt-4 text-gray-600'>18 § Toimihenkilöt</p>
        <p className='mt-4 text-black'>Hallituksen apuna ovat toimihenkilöt, joiden lukumäärän ja tehtävät määrittää vuosittain yhdistyksen vaalikokous. Toimihenkilöt ovat toimistaan vastuullisia yhdistyksen hallitukselle.</p>
        <p className='mt-4 text-gray-600'>19 § Toimikunnat</p>
        <p className='mt-4 text-black'>Yhdistyksen hallitus voi asioiden hoitamista varten asettaa avukseen toimikuntia, jotka ovat toimistaan vastuullisia yhdistyksen hallitukselle. Hallitus valitsee toimikuntien jäsenet.</p>
        <p className='mt-4 text-gray-600'>4 LUKU – Kokoukset</p>
        <p className='mt-4 text-gray-600'>20 § Yhdistyksen kokousten koollekutsuminen</p>
        <p className='mt-4 text-black'>Yhdistyksen kokoukset kutsuu koolle hallitus. Kokouskutsu on toimitettava viimeistään seitsemän (7) päivää ennen kokousta ilmoittamalla yhdistyksen ilmoitustaululla sekä sähköpostilla niille, jotka ovat antaneet yhdistykselle sähköpostiosoitteensa. Kokouskutsussa on oltava liitteenä kokouksen esityslista.</p>
        <p className='mt-4 text-gray-600'>21 § Kokouksen päätökset</p>
        <p className='mt-4 text-black'>Yhdistyksen päätökseksi tulee, ellei säännöissä ole toisin määritelty, se mielipide, joka on saanut yli puolet annetuista äänistä. Äänten mennessä tasan ratkaisee puheenjohtajan ääni paitsi vaaleissa arpa.</p>
        <p className='mt-4 text-gray-600'>22 § Vuosikokous</p>
        <p className='mt-4 text-black'>Yhdistys kokoontuu vuosikokoukseen maaliskuun loppuun mennessä. Vuosikokouksessa:</p>
        <p className='mt-4 ml-8 text-black'>1. esitetään edellisen toimikauden toimintakertomus, tilinpäätös ja toiminnantarkastajien lausunto.</p>
        <p className='mt-4 ml-8 text-black'>2. päätetään tilinpäätöksen vahvistamisesta ja vastuuvapauden myöntämisestä edellisen toimikauden hallitukselle ja muille vastuuvelvollisille.</p>
        <p className='mt-4 ml-8 text-black'>3. vahvistetaan kuluvan toimikauden toimintasuunnitelma ja tulo-menoarvio.</p>
        <p className='mt-4 ml-8 text-black'>4. päätetään jäsenmaksun ja kannatusjäsenmaksun suuruudesta.</p>
        <p className='mt-4 ml-8 text-black'>5. käsitellään muut esille tulevat asiat ottaen huomioon yhdistyslain 24§:n määräykset..</p>
        <p className='mt-4 text-gray-600'>23 § Vaalikokous</p>
        <p className='mt-4 text-black'>Yhdistyksen vaalikokous on pidettävä marras- joulukuussa.</p>
        <p className='mt-4 text-gray-600'>24 § Ylimääräinen kokous</p>
        <p className='mt-4 text-black'>Ylimääräinen yhdistyksen kokous pidetään, mikäli yhdistyksen kokous näin päättää tai hallituksen aloitteesta tai mikäli vähintään yksi kymmenesosa (1/10) äänioikeutetuista jäsenistä niin vaatii. Vaatimus kokouksen pitämisestä on esitettävä kirjallisesti yhdistyksen hallitukselle ja yhdistyksen hallituksen on kutsuttava kokous koolle kahden viikon kuluessa vaatimuksen esittämisestä.</p>
        <p className='mt-4 text-gray-600'>25 § Hallituksen kokoukset</p>
        <p className='mt-4 text-black'>Hallituksen on kokoonnuttava vähintään 2 kertaa toimikautensa aikana. Hallituksen kokous on päätösvaltainen, kun puheenjohtaja mukaan lukien vähintään puolet hallituksen jäsenistä on läsnä.</p>
        <p className='mt-4 text-gray-600'>5 LUKU – Talous</p>
        <p className='mt-4 text-gray-600'>26 § Tili- ja toimikausi</p>
        <p className='mt-4 text-black'>Yhdistyksen tili- ja toimikausi on kalenterivuosi.</p>
        <p className='mt-4 text-gray-600'>27 § Toiminnantarkastajat</p>
        <p className='mt-4 text-black'>Yhdistyksen taloudenhoitoa valvovat toiminnantarkastajat. Tilinpäätös tarvittavine asiakirjoineen on annettava toiminnantarkastajille viimeistään neljä (4) viikkoa ennen vuosikokousta. Toiminnantarkastajien tulee antaa kirjallinen lausuntonsa hallitukselle viimeistään kaksi (2) viikkoa ennen vuosikokousta.</p>
        <p className='mt-4 text-gray-600'>6 LUKU – Erityisiä määräyksiä</p>
        <p className='mt-4 text-gray-600'>28 § Sääntöjen muuttaminen ja yhdistyksen purkaminen</p>
        <p className='mt-4 text-black'>Päätös sääntöjen muuttamisesta ja yhdistyksen purkautumisesta on tehtävä yhdistyksen kokouksessa vähintään kolmen neljäsosan (3/4) enemmistöllä annetuista äänistä. Kokouskutsussa on mainittava sääntöjen muuttamisesta tai yhdistyksen purkautumisesta.</p>
        <p className='mt-4 text-black'>Yhdistyksen purkautuessa tai sen tullessa lakkautetuksi on yhdistyksen jäljelle jäävät varat luovutettava toimintaa jatkavalle rekisteröidylle yhdistykselle tai sen puuttuessa vesiensuojelutyöhön purkamisesta päättävän kokouksen määräämällä tavalla.</p>
        <p className='mt-4 text-gray-600'>29 § Muut määräykset</p>
        <p className='mt-4 text-black'>Muilta osin noudatetaan voimassa olevan yhdistyslain määräyksiä.</p>
      </div>

    </div>
  );
};



export default Rules;
