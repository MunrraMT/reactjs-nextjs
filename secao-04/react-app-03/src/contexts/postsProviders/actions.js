import * as types from './types';

const loadPosts = async (dispatch) => {
  dispatch({ type: types.POSTS_LOADING });

  const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsRaw.json();

  console.log('Fazendo Fetch');

  return () => dispatch({ type: types.POSTS_SUCCESS, payload: posts });
};

export default loadPosts;
