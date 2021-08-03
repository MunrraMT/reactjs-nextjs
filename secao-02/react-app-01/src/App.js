import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 0,
    posts: [
      { id: 1, title: 'O título 1', body: 'O corpo 1' },
      { id: 2, title: 'O título 2', body: 'O corpo 2' },
      { id: 3, title: 'O título 3', body: 'O corpo 3' }
    ]
  };

  setTimeoutUpdateTitle = null;
  setTimeoutUpdateCount = null;

  handleTimeoutTitle = () => {
    const { posts } = this.state;

    posts[0].title = 'Novo título';

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts });
    }, 5000);
  };

  handleTimeoutCounter = () => {
    const { counter } = this.state;

    this.setTimeoutUpdateCount = setTimeout(() => {
      this.setState({ counter: counter + 1 });
    }, 1000);
  };

  componentDidMount() {
    this.handleTimeoutTitle();
  }

  componentDidUpdate() {
    this.handleTimeoutCounter();
  }

  componentWillUnmount() {
    clearTimeout(this.setTimeoutUpdateCount);
    clearTimeout(this.setTimeoutUpdateTitle);
  }

  render() {
    const { posts, counter } = this.state;

    return (
      <div className='App'>
        <h2>{counter}</h2>
        {posts.map((post) => (
          <section key={post.id} id={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </section>
        ))}
      </div>
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
