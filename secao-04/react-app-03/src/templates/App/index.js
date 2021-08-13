import './styles.css';

import PostsProvider from '../../contexts/postsProvider';
import Posts from '../../components/Posts';
import CounterProvider from '../../contexts/CounterProvider';

function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <main className='App'>
          <Posts />
        </main>
      </PostsProvider>
    </CounterProvider>
  );
}

export default App;
