import { useContext, useEffect, useRef } from 'react';

import {
  decrementCounter,
  IncrementCounter,
} from '../../contexts/CounterProvider/actions';
import CounterContext from '../../contexts/CounterProvider/context';
import loadPosts from '../../contexts/postsProvider/actions';
import PostsContext from '../../contexts/postsProvider/context';

const Posts = () => {
  const isMounted = useRef(true);

  const { postsState, PostsDispatch } = useContext(PostsContext);
  const { counterState, counterDispatch } = useContext(CounterContext);

  useEffect(() => {
    loadPosts(PostsDispatch).then((dispatch) => {
      if (isMounted.current) dispatch();
    });

    return () => {
      isMounted.current = false;
    };
  }, [PostsDispatch]);

  return (
    <>
      <h1>POSTS</h1>

      <section>
        <h2>{counterState.counter}</h2>

        <button onClick={() => IncrementCounter(counterDispatch)} type='button'>
          Incrementar
        </button>

        <button onClick={() => decrementCounter(counterDispatch)} type='button'>
          Decrementar
        </button>
      </section>

      <section>
        {postsState.loading && <h2>Carregando posts...</h2>}

        {postsState.posts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      </section>
    </>
  );
};

export default Posts;
