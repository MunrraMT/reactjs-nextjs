import * as types from './types';

const reducer = (state, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER: {
      return { ...state, counter: state.counter + 1 };
    }

    case types.DECREMENT_COUNTER: {
      return { ...state, counter: state.counter - 1 };
    }

    default:
      break;
  }

  return { ...state };
};

export default reducer;
