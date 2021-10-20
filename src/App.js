import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Container} from '@mui/material'
import LandingPage from './pages/LandingPage';
import LogIn from './pages/login/LogIn';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <Router>
    <NavBar/>
      <Switch>
        {/* Landing Page */}
        <Route exact path='/' component={LandingPage} />
        {/* Login Page */}
        <Route exact path='/login' component={LogIn} />
        {/* Sign Up Page */}
        <Route exact path='/signup' component={SignUp} />
      </Switch>
    </Router>
    
    </>

  );
}

export default App;