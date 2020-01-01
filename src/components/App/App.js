import React, { Component } from 'react';

import ImageRandom from '../image-random';
import RandomPictureService from '../../service/random-picture-service';
import Navbar, { Record } from '../Navbar';
import ErrorBoundary from '../error-boundary';

class App extends Component {
  randomPictureService = new RandomPictureService();
  render() {
    const { getRandomDog,
      getRandomGrayscale,
      getRandomBlur } = this.randomPictureService;
    return (
      <ErrorBoundary>
          <div className="container">
            <Navbar>
              <Record title='Собачка' func={getRandomDog} />
              <Record title='Grayscale' func={getRandomGrayscale} />
              <Record title='Blur' func={getRandomBlur} />
            </Navbar>
            <ImageRandom />
          </div>
      </ErrorBoundary>
    )
  }
}

export default App

