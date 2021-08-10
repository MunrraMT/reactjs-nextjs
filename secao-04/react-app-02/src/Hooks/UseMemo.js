import Prop from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import '../App.css';

const Post = ({ title, body }) => {
  console.log('filho');

  return (
    <article className='post'>
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  );
};

Post.propTypes = {
  title: Prop.string.isRequired,
  body: Prop.string.isRequired,
};

const UseMemo = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  console.log('pai');

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((item) => setPosts(item));
    }, 5000);
  }, []);

  return (
    <main className='App'>
      <h1>Oi</h1>

      <input
        type='search'
        value={value}
        onInput={(e) => setValue(e.target.value)}
      />

      <section className='posts'>
        {useMemo(
          () =>
            posts.length === 0 ? (
              <p>Loading...</p>
            ) : (
              posts.map((post) => (
                <Post key={post.id} title={post.title} body={post.body} />
              ))
            ),
          [posts],
        )}
      </section>
    </main>
  );
};

export default UseMemo;
