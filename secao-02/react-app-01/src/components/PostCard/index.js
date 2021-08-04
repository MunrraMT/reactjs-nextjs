import './styles.css';

import LazyLoad from 'react-lazyload';

const PostCard = ({ cover, title, body }) => (
  <article className='post'>
    <header>
      <LazyLoad
        once
        scroll
        debounce={200}
        offset={100}
        height={50}
        placeholder={
          <p
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            Loading...
          </p>
        }
      >
        <img className='post__img' src={cover} alt={title} />
      </LazyLoad>
    </header>
    <section className='post__content'>
      <h2 style={{ marginBottom: '1rem' }}>{title}</h2>
      <p>{body}</p>
    </section>
  </article>
);

export default PostCard;
