import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Files from './components/Files';
import Edit from './components/Edit';

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
                <Link to="login"> Вход в систему </Link>
                <Link to="files"> Загрузка файлов </Link>
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
            <Route path="login" element={<Login/>}></Route>
            <Route path="files" element={<Files/>}></Route>
            <Route path="edit/.file-id/.file_name" element={<Edit/>}></Route>
          </Routes>

        </div>
      </main>
    </>
  );
}

export default App;

