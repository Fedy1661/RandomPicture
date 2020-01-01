import React, { Component } from 'react';
import ErrorBoundary from '../error-boundary';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export const Record = ({ title, func, onSetPicture }) => {
  return (
    <li className="navbar__item nav-item">
      <button
        onClick={() => onSetPicture(func)}
        variant="contained"
        type="button"
        class="navbar__btn btn btn-secondary my-2 my-sm-0"
      >
        {title}
      </button>
    </li>
  );
};

class Navbar extends Component {
  render() {
    const { children, onSetPicture } = this.props;
    return (
      <ErrorBoundary>
        <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="navbar-collapse" id="navbarColor01">
              <ul className="navbar mr-auto">
                {React.Children.map(children, (child) => {
                  return React.cloneElement(child, {
                    title: child.props.title,
                    func: child.props.func,
                    onSetPicture
                  });
                })}
                <li className="navbar__item nav-item"></li>
              </ul>
            </div>
          </nav>
        </React.Fragment>
      </ErrorBoundary>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      onSetPicture: actions.setUrlImage
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Navbar);
