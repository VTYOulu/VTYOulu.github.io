import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/TopBar'
import NavBar from './components/NavBar'
import Instagram from './components/Instagram'
import BottomBar from './components/BottomBar'
import MainText from './components/MainText'
import Sponsors from './components/Sponsors'
import Events from './components/Events'



function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleNavBarItemClick = (item) => {
    console.log(item);
    setSelectedItem(item);
  };


  return (
    <div className="flex flex-col">
      <TopBar></TopBar>
      <NavBar onItemClick={handleNavBarItemClick}></NavBar>
      <img src="chrome_hzBRK5fV4B.png" alt="Tuira maisema" className="object-fill w-screen h-80"/>

      <div className="flex justify-center">

        <div className="flex flex-col ml-42">
          <MainText></MainText>
          <Instagram></Instagram>
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
