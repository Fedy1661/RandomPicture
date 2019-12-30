import React, { Component } from 'react';

import ImageRandom from '../image-random';
import RandomPictureService from '../../service/random-picture-service';
import Navbar, { Record } from '../Navbar';
import ErrorBoundary from '../error-boundary';
import { ErrorProvider } from '../error-context';

class App extends Component {
  randomPictureService = new RandomPictureService();
  state = {
    url: null,
    hasError: false
  }
  handleSetPicture = (func) => {
    func().then(url => this.setState({ url }))
  }
  handleChangeStateError = () => {
    this.setState(({ hasError }) => {
      return { hasError: !hasError }
    })
  }
  render() {
    const { getRandomDog,
      getRandomCat,
      getRandomGrayscale,
      getRandomBlur } = this.randomPictureService;
    const { url, hasError } = this.state;
    return (
      <ErrorBoundary>
        <ErrorProvider value={hasError}>
          <div className="container">
            <Navbar onSetPicture={this.handleSetPicture}
              onChangeStateError={this.handleChangeStateError}>
              <Record title='Собачка' func={getRandomDog} />
              <Record title='Кошечка' func={getRandomCat} />
              <Record title='Grayscale' func={getRandomGrayscale} />
              <Record title='Blur' func={getRandomBlur} />
            </Navbar>
            <ImageRandom urlImage={url} />
          </div>
        </ErrorProvider>
      </ErrorBoundary>
    )
  }
}

export default App

