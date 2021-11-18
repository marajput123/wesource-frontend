import * as React from 'react';
import LandingPage from './pages/LandingPage';
import LogIn from './pages/login';
import Profile from './pages/profile';
import NavBar from './components/navbar/NavBar';
import Footer from './components/Footer';
import { Box } from '@mui/system';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            minHeight: '700px',
            flexDirection: 'column',
          }}
        >
          <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
            <Switch>
              {/* Landing Page */}
              <Route exact path="/" component={LandingPage} />
              {/* Login Page */}
              <Route exact path="/login" component={LogIn} />
              {/* Search Products Page */}
              <Route exact path="/search-products" component={SearchProducts} />
              {/* Product Dashboard */}
              <Route
                exact
                path="/dashboard/:productDashboardID"
                component={ProductDashboard}
              />
            </Switch>
          </Container>
          <Footer />
        </Box>
      </Router>
      <ThemeProvider theme={theme}>
        <Paper sx={{bgcolor:"background.default"}}>
          <Router>
            <NavBar/>
            <Switch>
              <Box sx={{height:"100vh", display:"flex", minHeight:"700px", flexDirection:"column"}}>
                <Container maxWidth="lg" sx={{flexGrow:1}}>
                    {/* Landing Page */}
                    <Route exact path='/' component={LandingPage} />
                    {/* Login Page */}
                    <Route exact path='/login' component={LogIn} />
                    {/* Search Products Page */}
                    <Route exact path='/search-products' component={SearchProducts} />
                    {/* Profile Page */}
                    <Route exact path='/profile' component={Profile} />
                </Container>
                <Footer/>    
              </Box>
            </Switch>
          </Router>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
