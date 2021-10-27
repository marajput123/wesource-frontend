import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { PrimaryButton } from './Buttons';
import Logo from "../static/W.svg"
import SearchBar from './SearchBar';
import { useHistory } from 'react-router';

export default function NavBar() {
  const history = useHistory()

  const onGoToLoginPage = () => {
    history.push("/login")
  }

  const onGoToLandingPage = () => {
    history.push("/")
  }
  return (
    <Container>
            <Toolbar sx={{flex:1, display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <Box sx={{display:"flex", alignItems:"center"}}>
                    <img onClick={onGoToLandingPage} src={Logo} style={{width:"75px", cursor:"pointer"}}/>
                </Box>
                <SearchBar/>
                <Box>
                    <PrimaryButton onClick={onGoToLoginPage} color="inherit">Login</PrimaryButton>
                </Box>
            </Toolbar>
    </Container>
  );
}