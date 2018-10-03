import React, { Component } from 'react';
import Carousel from '../Carousel/Carousel';
import Form from '../Form/Form';
import Favorite from "../Favorite/Favorite";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      carouselImagesArr: [],
      favoriteImage: {}
    };
  }

  componentDidMount() {
    this.getImagesFromDB();
  }

  getImagesFromDB = () => {
    fetch('https://mr-photo-keeper.herokuapp.com/api/v1/photos')
      .then(response => response.json())
      .then(carouselImagesArr => this.setState({ carouselImagesArr }))
      .catch(error => console.log(error));
  };

  addImage = imgObj => {
    fetch('https://mr-photo-keeper.herokuapp.com/api/v1/photos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(imgObj)
    })
      .then(response => response.json())
      .then(imgDbId => this.addImageToCarousel(imgObj, imgDbId))
      .catch(error => console.log(error));
  };

  addImageToCarousel = (imgObj, imgId) => {
    this.setState({
      carouselImagesArr: [...this.state.carouselImagesArr, { ...imgObj, imgId }]
    });
  };

  deleteImage = imgId => {
    const carouselImagesArr = this.state.carouselImagesArr.filter(
      img => img.id !== imgId
    );
    this.setState({ carouselImagesArr });
    fetch(`https://mr-photo-keeper.herokuapp.com/api/v1/photos/${imgId}`, {
      method: 'DELETE'
    });
  };

  selectFavorite = (id) => {
    const favoriteImage = this.state.carouselImagesArr.find(image => image.id === id);
    this.setState({ favoriteImage })
  }

  render() {
    return (
      <div className="App">
        <h1>Pick a Pic</h1>
        <h3>Submit a photo title and url to save it to your slideshow!</h3>
        <h3>
          Click the Favorite button under a photo to select it as your Favorite
        </h3>
        <Form addImage={this.addImage} />
        <Carousel
          carouselImagesArr={this.state.carouselImagesArr}
          deleteImage={this.deleteImage}
          selectFavorite={this.selectFavorite}
        />
        <Favorite favoriteImage={this.state.favoriteImage}/>
      </div>
    );
  }
}

export default App;
