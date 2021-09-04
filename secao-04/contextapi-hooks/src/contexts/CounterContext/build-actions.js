import * as actionTypes from './action-types';

const buildActions = (dispatch) => {
  return {
    increase: () =>
      dispatch({
        type: actionTypes.INCREASE,
      }),
  };
};

export default buildActions;
