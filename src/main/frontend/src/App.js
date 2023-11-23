import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import FamilyLogin from './pages/Family/Login';
import MateLogin from './pages/Mate/Login';

const App = () => {
  console.log(<Home/>);
  return (
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/family/login' element={<FamilyLogin />} />
            <Route path='/mate/login' element={<MateLogin />} />
          </Routes>
        </Router>
      </div>
    );
}

export default App;
