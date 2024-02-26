import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/styles/App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Archives from './pages/Archives';
import About from './pages/About';
import Journal from './pages/journal/Journal';
import Editorial from './pages/journal/Editorial';
import AboutJournal from './pages/journal/AboutJournal';
import Ethics from './pages/journal/Ethics';
import Guidelines from './pages/journal/Guidelines';
import Issue from './pages/journal/Issue';
import Subscriptions from './pages/journal/Subscriptions';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/archives' element={<Archives />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/:journal' element={<Journal/>}/>
        <Route path='/:journal/about' element={<AboutJournal/>}/>
        <Route path='/:journal/editorial' element={<Editorial/>}/>
        <Route path='/:journal/ethics' element={<Ethics/>}/>
        <Route path='/:journal/guidelines' element={<Guidelines/>}/>
        <Route path='/:journal/issue' element={<Issue/>}/>
        <Route path='/:journal/subscription' element={<Subscriptions/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
