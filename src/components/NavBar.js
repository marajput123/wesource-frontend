import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { PrimaryButton } from './Buttons';
import Logo from "../static/W.svg"
import SearchBar from './SearchBar';

export default function NavBar() {
  return (
    <Container>
            <Toolbar sx={{flex:1, display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <Box sx={{display:"flex", alignItems:"center"}}>
                    <img src={Logo} style={{width:"75px"}}/>
                </Box>
                <SearchBar/>
                <Box>
                    <PrimaryButton color="inherit">Login</PrimaryButton>
                </Box>
            </Toolbar>
    </Container>
  );
}