import React from 'react';
import './Arrow.css';

const Arrow = ({ direction, clickFunc, glyph }) => {
  return (
    <div className={`slide-arrow ${direction}`} onClick={() => clickFunc()}>
      {glyph}
    </div>
  );
};

export default Arrow;
