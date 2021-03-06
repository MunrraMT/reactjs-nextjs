import { string } from 'prop-types';
import './styles.css';

const PostCard = ({ cover, title, body }) => (
  <article className='post'>
    <header>
      <img className='post__img' src={cover} alt={title} />
    </header>
    <section className='post__content'>
      <h2 style={{ marginBottom: '1rem' }}>{title}</h2>
      <p>{body}</p>
    </section>
  </article>
);

PostCard.propTypes = {
  cover: string.isRequired,
  title: string.isRequired,
  body: string.isRequired
};

export default PostCard;
