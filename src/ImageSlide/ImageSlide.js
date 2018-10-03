import React from 'react';
import './ImageSlide.css';

const ImageSlide = ({ imageObj, deleteImage, selectFavorite }) => {
  const imgUrl = imageObj ? imageObj.url : null;
  const imgTitle = imageObj ? imageObj.title : null;

  return (
    <div className="image-slide">
      <img className="image-slide--img" src={imgUrl} alt="" />
      <h4>{imgTitle}</h4>
      <button className="image-slide-button--favorite" onClick={() => selectFavorite(imageObj.id)}>Favorite</button>
      <button className="image-slide-button--delete" onClick={() => deleteImage(imageObj.id)}>Delete</button>
    </div>
  );
};

export default ImageSlide;
