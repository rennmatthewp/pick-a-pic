import React from 'react';

const Favorite = ({ favoriteImage }) => {
  return (
    <div>
      <img src={favoriteImage.url} alt={favoriteImage.title}/>
      <h3>{favoriteImage.title}</h3>
    </div>
  );
};

export default Favorite;