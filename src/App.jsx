import './styles/reset.css';
import './styles/App.css';
import Header from './components/layout/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/books' element={<BooksPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </div>
  );
}
export default App;
