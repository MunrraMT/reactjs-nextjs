import './styles.css';

import PostsProvider from '../../contexts/postsProviders';
import Posts from '../../components/Posts';

function App() {
  return (
    <PostsProvider>
      <main className='App'>
        <Posts />
      </main>
    </PostsProvider>
  );
}

export default App;
