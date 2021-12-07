import React from 'react'
import { Avatar, Typography } from '@mui/material'
import { Box} from "@mui/material"
import { PrimaryButton } from '../../components/Buttons'
import { MainContainer } from '../../components/MainContainer'
import ProfileInfoSection from './ProfileInfoSection'

const index = () => {
    return (
        <>
        <MainContainer>
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
        </MainContainer>
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


