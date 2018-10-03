import React, { Component } from 'react';
import ImageSlide from '../ImageSlide/ImageSlide';
import Arrow from '../Arrow/Arrow';
import './Carousel.css';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0
    };
  }

  previousSlide = () => {
    const { currentImageIndex } = this.state;
    const { carouselImagesArr } = this.props;
    const lastIndex = carouselImagesArr.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  };

  nextSlide = () => {
    const { currentImageIndex } = this.state;
    const { carouselImagesArr } = this.props;
    const lastIndex = carouselImagesArr.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  };

  render() {
    const { currentImageIndex } = this.state;
    const { carouselImagesArr, deleteImage, selectFavorite } = this.props;
    return (
      <div className="carousel">
        <Arrow
          direction="left"
          clickFunc={this.previousSlide}
          glyph="&#9664;"
        />
        <ImageSlide
          imageObj={carouselImagesArr[currentImageIndex]}
          deleteImage={deleteImage}
          selectFavorite={selectFavorite}
        />
        <Arrow direction="right" clickFunc={this.nextSlide} glyph="&#9654;" />
      </div>
    );
  }
}

export default Carousel;
