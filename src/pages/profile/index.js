import React from 'react'
import { Avatar, Typography } from '@mui/material'
import { Box, TextField } from "@mui/material"
import { PrimaryButton } from '../../components/Buttons'
import { useSelector } from 'react-redux'
import "./profilePage.css"
import { fontWeight } from '@mui/system'

const index = () => {
    return (
        <>
        <Box sx={{display:"flex", padding:"20px 0px", flexDirection:"column"}}>
            <Box sx={{display:"flex"}}>
                <Box style={{flex:5, display:"flex", justifyContent:"center"}}>
                    <Box className="profile-inner-left-container">
                        <Typography variant={"h4"} style={{fontWeight:"400"}}>My Profile</Typography>
                    </Box>
                </Box>
                <Box sx={{flex:3}}/>
            </Box>
            
            <Box sx={{display:"flex"}}>
                <Box style={{flex:5, display:"flex", justifyContent:"center"}}>
                    <Box sx={{padding:"25px 20px 0px 20px"}} className="profile-inner-left-container">
                        <ProfileInfoSection/>
                    </Box>
                </Box>
                <Box className="profile-inner-right-container">
                    <ProfileUpdateSection/>
                </Box>
            </Box>
        </Box>  
        </>
    )
}

const ProfileInfoSection = () => {
    const {uname, fname, lname, email} = useSelector(rootState => rootState.auth)
    return (
        <>
            <Typography variant={"h6"} style={{fontWeight:"400"}}>Update Information about yourself</Typography>
            <Box>
                <TextField variant="filled" fullWidth label="First Name" defaultValue={fname}/>
                <TextField variant="filled" fullWidth label="Last Name" defaultValue={lname}/>
                <TextField variant="filled" fullWidth label="Username" defaultValue={uname} />
                <TextField variant="filled" fullWidth label="Email" defaultValue={email}/>
                <div>
                    <PrimaryButton fullWidth>Update</PrimaryButton>
                </div>
            </Box>
        </>
    )

}

const ProfileUpdateSection = () => {
    return (
        <>
            <Typography 
                variant={"h6"} 
                style={{
                    padding:"30px 0px 15px 0px", 
                    fontWeight:"400"
            }}>
                Upload Picture
            </Typography>
            <Avatar 
                style={{width:"250px", height:"250px", margin:"20px"}}
                alt="Jerry Top"
                src="https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
            />
            <PrimaryButton style={{width:"90%"}}>Upload</PrimaryButton>
        </>
    )
}

export default index


