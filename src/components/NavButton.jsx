import React, { useState, useRef } from 'react';

const NavButton = ({ name, secondary, onItemClick, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const handleItemClick = (item) => {
    clearTimeout(timeoutRef.current);
    onItemClick(item);
    setIsOpen(false);
  };

  const routeTo = secondary || name;
  // href for webcrawlers
  return (
    <>
      <div
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      > 
        <button className="mx-6 hover:brightness-110" href={routeTo} onClick={() => onItemClick(routeTo)}>
          {name}
        </button>

        {isOpen && items && items.length > 0 && (
          <div
            ref={dropdownRef}
            className="absolute z-10 mt-3 w-48 bg-neutral-700 rounded-md shadow-lg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="py-1">
              {items.map((item, index) => (
                <button
                  href={item}
                  key={index}
                  className="block px-4 py-2 text-neutral-200 hover:brightness-110 w-full text-left"
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavButton;

