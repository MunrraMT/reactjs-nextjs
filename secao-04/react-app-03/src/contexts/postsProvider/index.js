import { useReducer } from 'react';
import Prop from 'prop-types';

import PostsContext from './context';
import reducer from './reducer';
import data from './data';

const PostsProvider = ({ children }) => {
  const [postsState, PostsDispatch] = useReducer(reducer, data);

  return (
    <PostsContext.Provider value={{ postsState, PostsDispatch }}>
      {children}
    </PostsContext.Provider>
  );
};

PostsProvider.propTypes = {
  children: Prop.node.isRequired,
};

export default PostsProvider;
