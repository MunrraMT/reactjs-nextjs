import * as types from './types';

const reducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_LOADING: {
      console.log(action.type);
      return { ...state, loading: true };
    }

    case types.POSTS_SUCCESS: {
      console.log(action.type);
      return { ...state, posts: action.payload, loading: false };
    }

    default:
      break;
  }

  console.log('Action inválida!');
  return { ...state };
};

export default reducer;
