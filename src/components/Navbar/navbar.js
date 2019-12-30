import React, { Component } from 'react';
import ErrorBoundary from '../error-boundary';

export const Record = ({ title, func, onSetPicture }) => {
  return (
    <li className="navbar__item nav-item">
      <button
        onClick={() => onSetPicture(func)}
        className="navbar__btn btn btn-secondary my-2 my-sm-0"
        type="submit">
        {title}
      </button>
    </li>
  );
}

class Navbar extends Component {
  render() {
    const { children, onSetPicture, onChangeStateError } = this.props;
    return (
      <ErrorBoundary>
        <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

            <div className="navbar-collapse" id="navbarColor01">
              <ul className="navbar mr-auto">
                {
                  React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                      title: child.props.title,
                      func: child.props.func,
                      onSetPicture
                    })
                  })
                }
                <li className="navbar__item nav-item">
                  <button onClick={onChangeStateError}
                    className="navbar__btn btn btn-secondary my-2 my-sm-0"
                    type="submit">
                    Error
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </React.Fragment>
      </ErrorBoundary>
    )
  }
}

export default Navbar;