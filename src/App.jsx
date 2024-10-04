import { useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import NavBar from './components/NavBar'
import Instagram from './components/Instagram'
import BottomBar from './components/BottomBar'
import MainText from './components/pages/MainText'
import Sponsors from './components/Sponsors'
import Events from './components/Events'
import VTYBoard from './components/pages/VTYBoard'
import PrivacyStatement from './components/pages/PrivacyStatement'
import ErrorComponent from './components/ErrorComponent'
import LittleXmas from './components/pages/LittleXmas'
import OutsideExcursion from './components/pages/OutsideExcursion'
import InlandExcursion from './components/pages/InlandExcursion'
import MorningSeminar from './components/pages/MorningSeminar'
import AnnualReport from './components/pages/AnnualReport'
import Rules from './components/pages/Rules'
import OtherLinks from './components/pages/OtherLinks'
import Joining from './components/pages/Joining'
import Happenings from './components/pages/Happenings'
import Contact from './components/pages/Contact'
import Activity from './components/pages/Activity'


function App() {
  const [selectedItem, setSelectedItem] = useState("Etusivu");

  const handleNavBarItemClick = (item) => {
    console.log(item);
    setSelectedItem(item);
  };

  const componentMapping = {
    "Etusivu" : <MainText onItemClick={handleNavBarItemClick}/>,
    "Hallitus" : <VTYBoard />,
    "Tietosuojaseloste" : <PrivacyStatement />,
    "Pikkujoulut" : <LittleXmas />,
    "Ulkomaan excursio" :  <OutsideExcursion/>,
    "Kotimaan excursio" :  <InlandExcursion/>,
    "Aamupala seminaari" : <MorningSeminar/>,
    "Toimintakertomus" : <AnnualReport/>,
    "Säännöt" : <Rules/>,
    "Muita linkkejä" : <OtherLinks/>,
    "Liittyminen" : <Joining onItemClick={handleNavBarItemClick}/>,
    "Tapahtumat" : <Happenings/>,
    "Toiminta" : <Activity/>,
    "Yhteystiedot" : <Contact/>,
  };


  return (
    <div className="flex flex-col">
      <TopBar></TopBar>
      <NavBar onItemClick={handleNavBarItemClick}></NavBar>
      <img src="./chrome_hzBRK5fV4B.png" alt="Tuira maisemakuva" className="transition-all duration-300 ease-in-out object-fill mb-6 w-screen h-96 max-sm:h-24 max-md:h-48 max-lg:h-80 overflow-hidden"/>

      <div className="flex justify-center flex-row max-lg:flex-col">

        <div className="flex flex-col ml-42">
          {selectedItem && componentMapping[selectedItem] ? (
            <>
              {componentMapping[selectedItem]}
              <Instagram selectedItem={selectedItem}></Instagram>
            </>
          ) : (
            <ErrorComponent selectedItem={selectedItem}/>
          )
        }
        </div>

        <div className="flex flex-col m-8">
          <Events onItemClick={handleNavBarItemClick}></Events>
          <Sponsors></Sponsors>
        </div>

      </div>
      <BottomBar onItemClick={handleNavBarItemClick}></BottomBar>
    </div>
  )
}


export default App
