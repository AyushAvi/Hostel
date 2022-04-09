import { AuthProvider } from './context/AuthContext.js';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from './component/Dashboard.js';
import Welcome from './component/Welcome.js';
import Login from './component/Login';
import React from 'react';
import SignUp from './component/Signup.js';

function App(){
  return(
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>
          <Route exact path='/' element={<SignUp/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/welcome' element={<Welcome/>}></Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App;
