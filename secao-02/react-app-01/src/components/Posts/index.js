import PostCard from '../PostCard';

const Posts = ({ posts }) => (
  <section className='posts'>
    {posts.length > 0 ? (
      posts.map(({ id, cover, title, body }) => (
        <PostCard key={id} cover={cover} title={title} body={body} />
      ))
    ) : (
      <p>Loading...</p>
    )}
  </section>
);

export default Posts;
