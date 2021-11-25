import React, {useEffect, useState, useCallback} from 'react';
import LandingPage from './pages/LandingPage';
import LogIn from './pages/login';
import Profile from './pages/profile';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Paper } from '@mui/material'
import SearchProducts from './pages/SearchProducts'
import ProductDashboard from './pages/ProductDashboard'
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import {PrivateRouter, UnprotectedRoute} from './components/authRoute';
import { signInAction } from './store/actions/actionCreators';



function App() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);

  const dispatchAuth = useCallback( async () => {
    const wesourceToken = window.localStorage.getItem('wesource-token');
    if(wesourceToken || wesourceToken !== undefined){
      console.log("dispatch");
      dispatch(signInAction(wesourceToken));
    }
    console.log("dispatchAuth");
    setLoader(false);
  }, []);
  
  useEffect(() => {
      dispatchAuth();
  }, [dispatchAuth]);
  
  if(loader){
    return(
      <div>
        <p>loading</p>
      </div>
    );
  }

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
                    <UnprotectedRoute exact path='/login'>
                      <LogIn/>
                    </UnprotectedRoute> 
                    {/* Search Products Page */}
                    <Route exact path='/search-products' component={SearchProducts} />
                    {/* Profile Page */}
                    <PrivateRouter exact path='/profile'>
                      <Profile/>
                    </PrivateRouter>
                    {/* Product Dashboard */}
                    <PrivateRouter exact path="/dashboard/:productDashboardID">
                      <ProductDashboard/>
                    </PrivateRouter>

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
