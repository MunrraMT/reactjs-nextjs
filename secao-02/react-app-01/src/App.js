import './App.css';
import { Component } from 'react';
import PostCard from './components/PostCard';

class App extends Component {
  state = {
    posts: []
  };

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url };
    });

    this.setState({ posts: postsAndPhotos });
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { posts } = this.state;

    return (
      <main className='container'>
        <section className='posts'>
          {posts.length > 0 ? (
            posts.map(({ id, cover, title, body }) => (
              <PostCard key={id} cover={cover} title={title} body={body} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </main>
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
