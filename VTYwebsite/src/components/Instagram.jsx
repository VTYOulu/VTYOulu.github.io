
import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

const Instagram = ({selectedItem}) => {
  return ( // Just hides and avoids reRenders
    <div className={`flex justify-center ${selectedItem !== 'Etusivu' ? 'hidden' : ''}`}> 
        <InstagramEmbed url="https://www.instagram.com/vtyoulu/" width={700} height={700} />
    </div>
  );
};

export default Instagram;

