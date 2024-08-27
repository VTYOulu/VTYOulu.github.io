import React from 'react';

//<LinkText clickHandler={onItemClick} item={"hello"}></LinkText>
const Contact = ({onItemClick}) => {
  return ( 
    <div className="max-w-3xl p-4 mr-8">
      <h1 className="text-3xl font-semibold text-left mb-4">Yhteystiedot</h1>
      <p className="text-xl text-gray-700 mt-4 font-bold">Postiosoite</p>
      <p className="text-xl text-gray-700 mt-4">Oulun yliopiston Vesiteknillinen Yhdistys ry</p>
      <p className="text-xl text-gray-700 mt-2">PL 3000</p>
      <p className="text-xl text-gray-700 mt-2">90014 OULUN YLIOPISTO</p>
      <p className="text-xl text-gray-700 mt-4 font-bold">Sähköposti</p>
      <p className="text-xl text-gray-700 mt-2"><a class="text-blue-500 hover:underline" href="mailto:vty@student.oulu.fi">vty@student.oulu.fi</a></p>
    </div>
  );
};

export default Contact;