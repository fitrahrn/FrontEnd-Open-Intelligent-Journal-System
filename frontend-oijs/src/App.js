import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/styles/App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Archives from './pages/Archives';
import About from './pages/About';
import Test from './pages/Test';
import Journal from './pages/Journal';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/archives' element={<Archives />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/test' elemennt = {<Test/>}/>
        <Route path='/:journal' element={<Journal/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
