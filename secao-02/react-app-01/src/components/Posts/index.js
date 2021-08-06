import './styles.css';
import { arrayOf, shape, string } from 'prop-types';

import PostCard from '../PostCard';

const Posts = ({ posts }) => (
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
          justifyContent: 'center',
        }}
      >
        Loading...
      </p>
    )}
  </section>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: arrayOf(
    shape({
      cover: string.isRequired,
      title: string.isRequired,
      body: string.isRequired,
    }),
  ),
};

export default Posts;
