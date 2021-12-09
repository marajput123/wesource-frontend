import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { PrimaryButton } from '../Buttons';
import Logo from "../../static/W.svg"
import { useHistory } from 'react-router';
import {useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import SearchBar from "../searchBar/index"
import "./navbar.css"



export default function NavBar() {
  const history = useHistory()
  const {id,firstName,lastName,email} = useSelector(rootState =>  rootState.profile)

  const onGoToLoginPage = () => {
    history.push("/login")
  }

  const onGoToLandingPage = () => {
    history.push("/")
  }

  const GoToProducts=()=>{
    history.push("/Products")
  }
  return (
    <Container style={{maxWidth:"1500px"}}>
      <Toolbar sx={{flex:1, display:"flex", justifyContent:"space-around", alignItems:"center"}}>
          <Box sx={{display:"flex", alignItems:"center", flex:1}}>
              <img onClick={onGoToLandingPage} src={Logo} style={{width:"150px", height:"90px", cursor:"pointer"}}/>
          </Box>
          <SearchBar/>
          <Box sx={{width:"150px", display:"flex", justifyContent:"space-evenly", position:'relative', flex:1}}>
            {id? <PrimaryButton variant="contained">Create Group</PrimaryButton> : null}
            {id? <ProfileButton firstName={firstName} lastName={lastName} email={email} id={id}/> : <LoginButton onClick={onGoToLoginPage}/>}
          </Box>
      </Toolbar>
    </Container>
  );
}

const LoginButton = (props) => {
  return (
    <>
      <PrimaryButton onClick={props.onClick} color="inherit">Login</PrimaryButton>
    </>
  )
}

const GroupButton = (props) =>{
  return(
    <>
      <PrimaryButton onClick={props.onClick} color="inherit">Create Group</PrimaryButton>
    </>
  )
}