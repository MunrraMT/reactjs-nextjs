/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState } from 'react';

import '../templates/App/styles.css';
import useFetch from './use-fetch';

const Home = () => {
  const [postID, setPostID] = useState('');

  const [result, loading] = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postID}`,
    { method: 'GET' },
  );

  const handleClick = (id) => {
    setPostID(id);
  };

  if (loading)
    return (
      <main className='App'>
        <h1>Loading...</h1>
      </main>
    );

  if (!loading && result)
    return (
      <main className='App'>
        <h1 onClick={() => handleClick('')}>Posts</h1>
        <section>
          {result.map((post) => (
            <article key={post.id} onClick={() => handleClick(post.id)}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </article>
          ))}
        </section>
      </main>
    );

  return (
    <main className='App'>
      <h1>Oi</h1>
    </main>
  );
};

export default Home;
