import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Register from './components/Register';

function App() {
  return (
    <>
    <header className="header">
    <div className="header-content responsive-wrapper">
        <div className="header-logo">
            <Link to="#">
                <h3>File cloud</h3>
            </Link>
        </div>
        <div className="header-navigation">
            <nav className="header-navigation-links">
                <Link to="register"> Регистрация </Link>
                <Link to="#"> Вход в систему </Link>
                <Link to="#"> Загрузка файлов </Link>
            </nav>
        </div>
        <Link to="#" className="button">
            <i className="ph-list-bold"></i>
            <span>Menu</span>
        </Link>
    </div>
</header>
      <main className='main'>
        <div className='responsive-wrapper'>
          <Routes>
            <Route path="register" element={<Register/>}></Route>
          </Routes>

        </div>
      </main>
    </>
  );
}

export default App;

