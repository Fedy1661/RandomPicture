import React, { Component } from 'react';
import ErrorBoundary from '../error-boundary';
import CreateError from '../create-error';
import Spinner from '../Spinner';
import { connect } from 'react-redux';
import { imageLoaded, imageRequested, imageError } from '../../actions';


class ImageRandom extends Component {
  UNSAFE_componentWillUpdate(prevProps) {
    if (this.props.url !== prevProps.url) {
      this.props.imageRequested()
    }
  }
  handleImageLoaded = () => {
    this.props.imageLoaded()
  }
  handleImageError = (err) => {
    this.props.imageError()
  }
  render() {
    const { url, state, loading, error } = this.props;
    const errorMessage = error ? `Картинка не загрузилась, выберите другую.` : null;
    const spinner = loading && url ? <Spinner /> : null;
    const chooseCategory = url ? null : 'Выберите категорию';
    const imageVisible = !loading ? 'image-random__image-visible' : null
    return (
      <ErrorBoundary>
        <div className="image-random">
          {errorMessage}
          {spinner}
          {chooseCategory}
          {(url && !error) && <img ref="img"
            onLoad={this.handleImageLoaded}
            onError={this.handleImageError}
            className={`image-random__image ${imageVisible}`}
            src={`${url}`} alt={url} />}
          <CreateError state={state} />
        </div>
      </ErrorBoundary>
    )
  }
}
const mapStateToProps = ({ url, loading, error }) => {
  return {
    url, loading, error
  }
}
const mapDispatchToProps = {
  imageLoaded,
  imageRequested,
  imageError
}
export default connect(mapStateToProps, mapDispatchToProps)(ImageRandom)