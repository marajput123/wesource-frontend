import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Switch>
        {/* Landing Page */}
        <Route exact path='/' component={LandingPage} />
        {/* Login Page */}
        <Route exact path='/login' component={LogIn} />
        {/* Sign Up Page */}
        <Route exact path='/signup' component={SignUp} />


      </Switch>
    </Router>
  );
}

export default App;