import React from 'react';

const ErrorComponent = ({selectedItem}) => {
  return (
    <div className='mt-12'>
      <h2 className='text-xl p-2'>Error: Component Not Found! </h2>
      <p className='text-lg p-2'>We're sorry, the component you're trying to access could not be found.</p>
      <p className='text-lg p-2'>The click indentifier was "{selectedItem}"</p>
    </div>
  );
}

export default ErrorComponent;