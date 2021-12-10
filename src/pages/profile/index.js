import React, { useState } from 'react'
import { Avatar, IconButton, TextField, Typography } from '@mui/material'
import { Box} from "@mui/material"
import { PrimaryButton } from '../../components/Buttons'
import { MainContainer } from '../../components/MainContainer'
import ProfileInfoSection from './ProfileInfoSection'
import { useDispatch, useSelector } from 'react-redux'
import RefreshIcon from '@mui/icons-material/Refresh';
import { wesourceBackend } from '../../apis'
import {updateUser} from "../../store/actions/actionCreators"


const index = () => {
    const profile = useSelector(rootState => rootState.profile)
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
                        <ProfileInfoSection profile={profile}/>
                    </Box>
                </Box>
                <Box className="profile-inner-right-container">
                    <ProfileUpdateSection profile={profile}/>
                </Box>
            </Box>
        </Box>  
        </MainContainer>
        </>
    )
}


const ProfileUpdateSection = ({profile, ...props}) => {
    const dispatch = useDispatch()
    const [imageUrl, setImageUrl] = useState(profile.imageUrl? profile.imageUrl:"")
    const [updated, setUpdated] = useState(null)

    const {id,jwtToken} = profile

    const onReset = () => {
        setImageUrl(profile.imageUrl? profile.imageUrl:"")
    }
    
    
    const imageSave = () => {
        wesourceBackend.put(
            `/auth/${id}`,
            {
                imageURL:imageUrl
            },
            {headers: { Authorization: `Bearer ${jwtToken}` }}
        ).then(res => {
            if(res.status === 200){
                dispatch(updateUser({
                    imageUrl:imageUrl
                }));
                setUpdated("Success")
            }
        })
        .catch(err => {
            setUpdated("Failed")
        })
    }
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
            {
                updated &&
                <Box
                    sx={{
                        width:"100%",
                        backgroundColor:(theme) => updated === "Success"
                            ? theme.palette.success.light
                            : theme.palette.error.light,
                    }}
                >
                    <Typography style={{padding:'5px 5px'}}>
                        {
                            updated === "Success"
                            ? "Image updated!"
                            : "Image could not be updated."
                        }
                    </Typography>
                </Box>
            }
            <Avatar 
                style={{width:"250px", height:"250px", margin:"20px"}}
                alt="Jerry Top"
                src={imageUrl}
            />
            <Box sx={{display:"flex", alignItems:"center", width:"90%"}}>
                <TextField style={{flex:1}} value={imageUrl} onChange={e => setImageUrl(e.target.value)} variant="filled" required style={{width:"90%", padding:"10px 0px"}} label="Image Url" />
                <IconButton onClick={onReset} sx={{width:"50px", height:"50px", margin:"2px"}}>
                    <RefreshIcon/>
                </IconButton>
            </Box>
            <PrimaryButton onClick={imageSave} style={{width:"90%"}}>Upload</PrimaryButton>
        </>
    )
}

export default index


