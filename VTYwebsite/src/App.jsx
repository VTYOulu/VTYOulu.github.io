import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/TopBar'
import NavBar from './components/NavBar'
import Instagram from './components/Instagram'


function App() {
  const [count, setCount] = useState(0)
  const [selectedItem, setSelectedItem] = useState(null);

  const handleNavBarItemClick = (item) => {
    console.log(item);
    setSelectedItem(item);
  };

  return (
    <>
      <TopBar></TopBar>
      <NavBar onItemClick={handleNavBarItemClick}></NavBar>
      <Instagram></Instagram>
    </>
  )
}


export default App
