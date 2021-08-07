import './styles.css';

import { useEffect, useState } from 'react';

import loadPosts from '../../utils/load-posts';
import Posts from '../../components/Posts';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setaAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(3);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    let isCancelled = false;

    loadPosts().then((postsAndPhotos) => {
      if (!isCancelled) {
        setPosts(postsAndPhotos.slice(page, postsPerPage));
        setaAllPosts(postsAndPhotos);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    setPosts((prevPosts) => [...prevPosts, ...nextPosts]);
    setPage(nextPage);
  };

  const handleInput = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const noMorePosts = posts.length === allPosts.length;

  const filteredPosts = allPosts.filter(
    (post) =>
      post.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1,
  );

  return (
    <>
      <header
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          height: '7rem',
        }}
      >
        <h1>Estudo de ReactJS - App Posts</h1>
        <TextInput searchValue={searchValue} handleInput={handleInput} />
      </header>

      <main className='container'>
        {searchValue ? (
          (filteredPosts.length === 0 && <p>Busca não encontrada</p>) ||
          (filteredPosts.length > 0 && <Posts posts={filteredPosts} />)
        ) : (
          <Posts posts={posts} />
        )}
      </main>

      {!searchValue && (
        <footer>
          <Button
            disabled={noMorePosts}
            handleClick={loadMorePosts}
            text='Ver mais posts'
          />
        </footer>
      )}
    </>
  );
};

export default Home;
