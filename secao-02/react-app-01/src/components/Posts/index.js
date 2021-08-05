import './styles.css';

import PostCard from '../PostCard';

const Posts = ({ posts }) => {
  if (Array.isArray(posts)) {
    return (
      <section className='posts'>
        {posts.length > 0 ? (
          posts.map(({ id, cover, title, body }) => (
            <PostCard key={id} cover={cover} title={title} body={body} />
          ))
        ) : (
          <p
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            Loading...
          </p>
        )}
      </section>
    );
  }

  return <p>Não existem posts</p>;
};

export default Posts;
