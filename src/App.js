import './App.css';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Business from './pages/Business';
import Sports from './pages/Sports';
import Entertainment from './pages/Entertainment';
import World from './pages/World';
import Technology from './pages/Technology';
import Startup from './pages/Startup';
import Automobile from './pages/Automobile';
import Science from './pages/Science';
import Unconventional from './pages/Unconventional';
import Miscellaneous from './pages/Miscellaneous';
import Politics from './pages/Politics';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/business' element={<Business />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/entertainment' element={<Entertainment />} />
        <Route path='/world' element={<World />} />
        <Route path='/politics' element={<Politics />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='/startup' element={<Startup />} />
        <Route path='/science' element={<Science />} />
        <Route path='/automobile' element={<Automobile />} />
        <Route path='unconventional' element={<Unconventional />} />
        <Route path='/miscellaneous' element={<Miscellaneous />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
