import { useContext, useEffect, useRef } from 'react';
import loadPosts from '../../contexts/postsProviders/actions';
import PostsContext from '../../contexts/postsProviders/context';

const Posts = () => {
  const isMounted = useRef(true);
  const { postsState, PostsDispatch } = useContext(PostsContext);

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
