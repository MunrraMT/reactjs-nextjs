import * as actionTypes from './action-types';

const buildActions = (dispatch) => {
  return {
    increase: () =>
      dispatch({
        type: actionTypes.INCREASE,
      }),

    decrease: () =>
      dispatch({
        type: actionTypes.DECREASE,
      }),

    reset: () =>
      dispatch({
        type: actionTypes.RESET,
      }),
  };
};

export { buildActions };
