
import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

const Instagram = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InstagramEmbed url="https://www.instagram.com/vtyoulu/" width={700} height={700} />
    </div>
  );
};

export default Instagram;

