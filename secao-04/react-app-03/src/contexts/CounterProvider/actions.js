import * as types from './types';

const IncrementCounter = (dispatch) => {
  dispatch({ type: types.INCREMENT_COUNTER });
};

const decrementCounter = (dispatch) => {
  dispatch({ type: types.DECREMENT_COUNTER });
};

export { IncrementCounter, decrementCounter };
