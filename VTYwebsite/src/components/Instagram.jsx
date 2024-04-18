
import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

const Instagram = ({selectedItem}) => {
  return ( // Just hides and avoids reRenders
    <div className={`flex ml-4 ${selectedItem !== 'Etusivu' ? 'hidden' : ''}`}> 
        <InstagramEmbed url="https://www.instagram.com/vtyoulu/" width={"56vh"} height={"56vh"} />
    </div>
  );
};

export default Instagram;

