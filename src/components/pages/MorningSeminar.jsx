import React from 'react';

//<LinkText clickHandler={onItemClick} item={"hello"}></LinkText>
const MorningSeminar = ({onItemClick}) => {
  return ( 
    <div className="max-w-3xl p-4">
      <h1 className="text-3xl font-semibold text-left mb-4">Aamupalaseminaari</h1>
      <p className="text-xl text-gray-700"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, voluptatem officia suscipit dignissimos deleniti illum quis. In vitae nam ratione! A cupiditate magni rem enim aut corrupti voluptates mollitia? Velit.</p>
    </div>
  );
};

export default MorningSeminar;