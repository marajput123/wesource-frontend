import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import LandingPage from './pages/LandingPage';
import LogIn from './pages/login/LogIn';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Box } from '@mui/system';
import SearchProducts from './pages/SearchProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDashboard from './pages/ProductDashboard';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Box
            sx={{
              height: '100vh',
              display: 'flex',
              minHeight: '700px',
              flexDirection: 'column',
            }}
          >
            <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
              {/* Landing Page */}
              <Route exact path="/" component={LandingPage} />
              {/* Login Page */}
              <Route exact path="/login" component={LogIn} />
              {/* Search Products Page */}
              <Route exact path="/search-products" component={SearchProducts} />
              {/* Product Dashboard */}
              <Route
                exact
                path="/:productDashboardID"
                component={ProductDashboard}
              />
            </Container>
            <Footer />
          </Box>
        </Switch>
      </Router>
    </>
  );
}

export default App;
