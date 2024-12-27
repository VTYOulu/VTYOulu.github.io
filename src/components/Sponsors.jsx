import React from 'react';

const Sponsors = () => {
  //https://tailwindcss.com/docs/width
  //https://tailwindcss.com/docs/object-fit
  return (
    <div>
      <p className='text-lg font-semibold drop-shadow-lg mt-4'>Vesiteekkareita tukemassa: </p>
      <a href={"https://mvtt.fi/"}><img src="./mvtt-300x82.png" alt="Maa- ja vesitekniikan tuki ry" className="h-46 w-96 py-4 object-contain"/></a>
      <a href={"https://www.ril.fi/"}><img src="./ril.png" alt="RIL" className="h-32 w-48 py-4 object-contain"/></a>
    </div>
  );
};

export default Sponsors;