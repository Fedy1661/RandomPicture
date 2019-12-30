import React from 'react';
import { ErrorConsumer } from '../error-context';

const withErrorContext = (Wrapped) => {
  return (props) => {
    return (
      <ErrorConsumer>
        {
          (state) => {
            return <Wrapped {...props} state={state}/>
          }
        }
      </ErrorConsumer>
    )
  }
}

export default withErrorContext;