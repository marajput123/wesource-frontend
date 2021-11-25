import React, {useEffect, useState, useCallback} from 'react';
import LandingPage from './pages/LandingPage';
import LogIn from './pages/login';
import Profile from './pages/profile';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Paper } from '@mui/material'
import SearchProducts from './pages/SearchProducts'
import ProductDashboard from './pages/ProductDashboard'

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {PrivateRouter, UnprotectedRoute} from './components/authRoute';
import { signInAction, signOutAction } from './store/actions/actionCreators';
import { AUTH_REDUCER_INITIAL_STATE } from './store/reducers/authReducer';
import Loading from './components/Loading';



function App() {
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth)
  const [loader, setLoader] = useState(true);

  const dispatchAuth = useCallback( async () => {
    const wesourceToken = window.localStorage.getItem('wesource-token');
    if(wesourceToken){
      dispatch(signInAction(wesourceToken));
    }else{
      dispatch(signOutAction())
    }
  }, []);

  useEffect(() => {
      dispatchAuth();
  }, [dispatchAuth]);

  useEffect(() => {
    if(authState !== AUTH_REDUCER_INITIAL_STATE){
      setLoader(false)
    }
  },[authState])
  
  if(loader){
    return(
      <Loading/>
    );
  }

  return (
    <>
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
    </>
  );
}

export default App;
