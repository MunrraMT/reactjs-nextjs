import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.loadPosts();
  }

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

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { posts } = this.state;

    return (
      <main className='container'>
        <section className='posts'>
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <article className='post' key={post.id} id={post.id}>
                <header>
                  <img
                    className='post__img'
                    src={post.cover}
                    alt={post.title}
                  />
                </header>
                <section className='post__content'>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </section>
              </article>
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
