import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Fetch from './components/Fetch'

function App() {
  return (
    <>
      <Routes>
        <Route path='fetch' element={<Fetch/>}></Route>
      </Routes>
    </>
  );
}

export default App;

