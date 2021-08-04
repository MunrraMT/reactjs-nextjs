import './App.css';
import { Component } from 'react';

import loadPosts from './utils/load-posts';
import Posts from './components/Posts';

class App extends Component {
  state = {
    posts: []
  };

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();

    this.setState({ posts: postsAndPhotos });
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  render() {
    const { posts } = this.state;

    return (
      <>
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.5rem'
          }}
        >
          <h1>Estudo de ReactJS - App Posts</h1>
        </header>
        <main className='container'>
          <Posts posts={posts} />
        </main>
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

export default App;
