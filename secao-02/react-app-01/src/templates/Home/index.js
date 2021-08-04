import './styles.css';

import { Component } from 'react';

import loadPosts from '../../utils/load-posts';
import Posts from '../../components/Posts';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: ''
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

  handleInput = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  componentDidUpdate() {
    console.log(this.props['test-props']);
  }

  render() {
    const { posts, allPosts, searchValue } = this.state;

    const noMorePosts = posts.length === allPosts.length;

    const filteredPosts = allPosts.filter((post) => {
      return (
        post.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 ||
        post.body.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
      );
    });

    return (
      <>
        <header
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            height: '7rem'
          }}
        >
          <h1>Estudo de ReactJS - App Posts</h1>
          <TextInput searchValue={searchValue} handleInput={this.handleInput} />
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
            <Button disabled={noMorePosts} handleClick={this.loadMorePosts}>
              Ver mais posts
            </Button>
          </footer>
        )}
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
