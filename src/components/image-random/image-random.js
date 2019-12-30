import React, { Component } from 'react';
import ErrorBoundary from '../error-boundary';
import CreateError from '../create-error';
import withErrorContext from '../hoc-helper/with-error-context';
import Spinner from '../Spinner';


class ImageRandom extends Component {
  state = {
    loading: false,
    error: false
  }
  UNSAFE_componentWillUpdate(prevProps) {
    if (this.props.urlImage !== prevProps.urlImage) {
      this.setState({ loading: true, error: false })
    }
  }
  handleImageLoaded = () => {
    this.setState({ loading: false, error: false })
  }
  handleImageError = (err) => {
    console.log(err)
    this.setState({ loading: false, error: true })
  }
  render() {
    const { urlImage, state } = this.props;
    const { loading, error } = this.state;
    const errorMessage = error ? `Картинка не загрузилась, выберите другую.` : null;
    const spinner = loading && urlImage ? <Spinner /> : null;
    const chooseCategory = urlImage ? null : 'Выберите категорию';
    const imageVisible = !loading ? 'image-random__image-visible' : null
    return (
      <ErrorBoundary>
        <div className="image-random">
          {errorMessage}
          {spinner}
          {chooseCategory}
          {(urlImage && !error) && <img ref="img"
            onLoad={this.handleImageLoaded}
            onError={this.handleImageError}
            className={`image-random__image ${imageVisible}`}
            src={`${urlImage}`} alt={urlImage} />}
          <CreateError state={state} />
        </div>
      </ErrorBoundary>
    )
  }
}

export default withErrorContext(ImageRandom);