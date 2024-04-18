import React from 'react';
import LinkText from './LinkText';

const Events = ({onItemClick}) => {
  return (
    <div>
        <p className='text-lg font-semibold drop-shadow-lg mt-4'> Tapahtumia: </p>
        <LinkText className={"text-md"} clickHandler={onItemClick} item={"Pikkujoulut"}>Pikkujoulut</LinkText>
        <br></br>
        <LinkText className={"text-md"} clickHandler={onItemClick} item={"Ulkomaan excursio"}>Ulkomaan excursio</LinkText>
        <br></br>
        <LinkText className={"text-md"} clickHandler={onItemClick} item={"Kotimaan excursio"}>Kotimaan excursio</LinkText>
        <br></br>
        <LinkText className={"text-md"} clickHandler={onItemClick} item={"Aamupala seminaari"}>Aamupala seminaari</LinkText>
    </div>
  );
};

export default Events;