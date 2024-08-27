import React from 'react';
import NavButton from './NavButton';

const NavBar = (props) => {
  return (
    <div className="bg-neutral-700 py-4 px-6 flex items-center justify-center">
      <div className="text-neutral-200 text-xl flex flex-wrap items-center justify-between py-2">
        <NavButton name={"Etusivu"} onItemClick={props.onItemClick}></NavButton>
        <NavButton name={"Toiminta"} items={["Hallitus", "Toimintakertomus", "Säännöt"]} onItemClick={props.onItemClick}></NavButton>
        <NavButton name={"Tapahtumat"} onItemClick={props.onItemClick}></NavButton>
        <NavButton name={"Liittyminen"} onItemClick={props.onItemClick}></NavButton>
        <NavButton name={"Yhteystiedot"} items={["Muita linkkejä"]} onItemClick={props.onItemClick}></NavButton>
      </div>
    </div>
  );
};

export default NavBar;
