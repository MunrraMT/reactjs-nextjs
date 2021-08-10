/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Prop from 'prop-types';
import { useEffect, useMemo, useRef, useState } from 'react';
import '../App.css';

const Post = ({ title, body, onClick }) => {
  console.log('filho');

  return (
    <article className='post'>
      <h2 onClick={() => onClick(title)}>{title}</h2>
      <p>{body}</p>
    </article>
  );
};

Post.propTypes = {
  title: Prop.string.isRequired,
  body: Prop.string.isRequired,
  onClick: Prop.func.isRequired,
};

const UseRef = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  const input = useRef(null);
  const contador = useRef(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((item) => setPosts(item));
  }, []);

  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  useEffect(() => {
    contador.current += 1;
  });

  console.log('pai');

  const handleClickTitle = (title) => {
    setValue(title);
  };

  return (
    <main className='App'>
      <h1>Rederizou: {contador.current}x</h1>

      <input
        ref={input}
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
                <Post
                  key={post.id}
                  title={post.title}
                  body={post.body}
                  onClick={handleClickTitle}
                />
              ))
            ),
          [posts],
        )}
      </section>
    </main>
  );
};

export default UseRef;
