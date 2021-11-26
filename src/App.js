import * as React from 'react';
import LandingPage from './pages/LandingPage';
import LogIn from './pages/login';
import Profile from './pages/profile';
import NavBar from './components/navbar/NavBar';
import Products from './pages/Products';
import Footer from './components/Footer';
import { Box } from '@mui/system';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Container, Paper} from '@mui/material'
import SearchProducts from './pages/SearchProducts'
import ProductDashboard from './pages/ProductDashboard'
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper sx={{bgcolor:"background.default"}}>
          <Router>
            <NavBar/>
            <Switch>
              {/* <Box sx={{height:"100vh", display:"flex", minHeight:"900px", flexDirection:"column"}}>
                <Container maxWidth="lg" sx={{flexGrow:1}}> */}
                    {/* Landing Page */}
                    <Route exact path='/' component={LandingPage} />
                    {/* Login Page */}
                    <Route exact path='/login' component={LogIn} />
                    {/* Search Products Page */}
                    <Route exact path='/search-products' component={SearchProducts} />
                    {/* Profile Page */}
                    <Route exact path='/profile' component={Profile} />
                    <Route
                      exact
                      path="/dashboard/:productDashboardID"
                      component={ProductDashboard}
                    />
                    {/* Products Page */}
                    <Route exact path='/products' component={Products} />
                {/* </Container>
                <Footer/>    
              </Box> */}
            </Switch>
          </Router>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
