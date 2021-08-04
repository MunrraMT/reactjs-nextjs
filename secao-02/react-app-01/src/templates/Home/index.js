import './styles.css';

import { Component } from 'react';

import loadPosts from '../../utils/load-posts';
import Posts from '../../components/Posts';
import Button from '../../components/Button';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2
  };

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();

    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  render() {
    const { posts, allPosts } = this.state;
    const noMorePosts = posts.length === allPosts.length;

    return (
      <>
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.5rem',
            height: '3rem'
          }}
        >
          <h1>Estudo de ReactJS - App Posts</h1>
        </header>

        <main className='container'>
          <Posts posts={posts} />
        </main>

        <footer>
          <Button disabled={noMorePosts} handleClick={this.loadMorePosts}>
            Ver mais posts
          </Button>
        </footer>
      </>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default Home;
