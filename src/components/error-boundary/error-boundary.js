import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false
  }
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  render() {
    const { hasError } = this.state;
    if (hasError === true) {
      return (
        <div>
          Oops... Что-то пошло не так... Возможно, стоит перезагурзить страницу.
        </div>
      )
    }
    return this.props.children;
  }
}