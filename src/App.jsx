// import './styles/reset.css';
import './styles/App.css';
import Header from './components/layout/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { Toaster } from 'react-hot-toast';
import ProfilePage from './pages/ProfilePage';
import PostPage from './pages/PostsPage';
import SinglePostPage from './pages/SinglePostPage';

function App() {
  return (
    <div>
      <Toaster />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/posts' element={<PostPage />} />
        <Route path='/posts/:postUid' element={<SinglePostPage />} />
      </Routes>
    </div>
  );
}
export default App;
