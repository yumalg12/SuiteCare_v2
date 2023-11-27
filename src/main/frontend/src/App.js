import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import FamilyLogin from './pages/Family/Login';
import MateLogin from './pages/Mate/Login';
import FamilySignUp from './pages/Family/SignUp';
import MateSignUp from './pages/Mate/SignUp';
import FamilyMain from './pages/Family/Main';
import MateMain from './pages/Mate/Main';
import Test from './pages/Test';

const App = () => {
  return (
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/family/login' element={<FamilyLogin />} />
            <Route path='/mate/login' element={<MateLogin />} />
            <Route path='/family/signup' element={<FamilySignUp />} />
            <Route path='/mate/signup' element={<MateSignUp />} />
            <Route path='/family/main' element={<FamilyMain />} />
            <Route path='/mate/main' element={<MateMain />} />
            <Route path='/test' element={<Test/>}/>
          </Routes>
        </Router>
      </div>
    );
}

export default App;
