import * as actionTypes from './action-types';

const asyncIncreaseFN = async (dispatch) => {
  dispatch({
    type: actionTypes.ASYNC_INCREASE_START,
  });

  return await new Promise((resolve, reject) =>
    setTimeout(() => {
      dispatch({
        type: actionTypes.ASYNC_INCREASE_END,
      });

      resolve('Resolved');
    }, 2000),
  );
};

const asyncErrorFN = async (dispatch) => {
  dispatch({
    type: actionTypes.ASYNC_INCREASE_START,
  });

  return await new Promise((resolve, reject) =>
    setTimeout(() => {
      dispatch({
        type: actionTypes.ASYNC_INCREASE_ERROR,
      });

      reject(new Error('Deu erro!'));
    }, 2000),
  );
};

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

    setCounter: (payload) =>
      dispatch({
        type: actionTypes.SET_COUNTER,
        payload,
      }),

    asyncIncrease: () => asyncIncreaseFN(dispatch),
    asyncError: () => asyncErrorFN(dispatch),
  };
};

export default buildActions;
