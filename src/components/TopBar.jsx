import React from 'react';

const TopBar = () => {
  return (
    <div className="bg-vtyBlue py-4 px-6 flex items-center justify-center">
      <div className="flex items-center flex-wrap">
        <img src="./VTYpieni-e1630869792921.png" alt="VTY logo" className="h-18 w-auto" />
        <h1 className="text-gray-800 text-4xl ml-2 p-6 font-semibold">Oulun yliopiston Vesiteknillinen yhdistys ry</h1>
      </div>
    </div>
  );
};

export default TopBar;