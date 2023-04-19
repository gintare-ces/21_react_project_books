// import './styles/reset.css';
import './styles/App.css';
import Header from './components/layout/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { Toaster } from 'react-hot-toast';
import ProfilePage from './pages/ProfilePage';
import PostPage from './pages/PostsPage';

function App() {
  return (
    <div>
      <Toaster />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/posts' element={<PostPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </div>
  );
}
export default App;
