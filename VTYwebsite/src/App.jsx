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


function App() {
  const [selectedItem, setSelectedItem] = useState("Etusivu");

  const handleNavBarItemClick = (item) => {
    console.log(item);
    setSelectedItem(item);
  };

  const componentMapping = {
    Etusivu: <MainText onItemClick={handleNavBarItemClick}/>,
    Hallitus: <VTYBoard />,
    Tietosuojaseloste: <PrivacyStatement />,
  };


  return (
    <div className="flex flex-col">
      <TopBar></TopBar>
      <NavBar onItemClick={handleNavBarItemClick}></NavBar>
      <img src="chrome_hzBRK5fV4B.png" alt="Tuira maisema" className="transition-all duration-300 ease-in-out object-fill mb-6 w-screen h-96 max-sm:h-30 max-md:h-60 max-lg:h-80 overflow-hidden"/>

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
          <Events></Events>
          <Sponsors></Sponsors>
        </div>

      </div>
      <BottomBar onItemClick={handleNavBarItemClick}></BottomBar>
    </div>
  )
}


export default App
