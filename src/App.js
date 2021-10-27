import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import SearchProducts from './pages/SearchProducts';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Switch>
        {/* Landing Page */}
        <Route exact path='/' component={LandingPage} />
        {/* Login Page */}
        <Route  path='/login' component={LogIn} />
        {/* Sign Up Page */}
        <Route  path='/signup' component={SignUp} />
        {/* Search Products Page */}
        <Route exact path='/search-products' component={SearchProducts} />
      </Switch>
    </Router>
  );
}

export default App;