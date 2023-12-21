import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Register from './components/Register';
import NavBar from './components/NavBar';

function App(){
  return(
    <Router>
      <div>
        <Routes>
           <Route path='/' element={<Login/>}/>
           <Route path='/Register' element={<Register />}/>
           <Route path='/NavBar' element={<NavBar />}/>

        </Routes>
        
      </div>
    </Router>
  );
}
export default App;