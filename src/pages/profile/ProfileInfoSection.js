import React, { useState } from 'react'
import { Typography } from '@mui/material'
import { Box } from "@mui/material"
import { PrimaryButton } from '../../components/Buttons'
import { useDispatch, useSelector } from 'react-redux'
import "./profilePage.css"
import { wesourceBackend } from '../../apis'
import { updateUser } from '../../store/actions/actionCreators'
import ForumTextField  from '../../components/textFields/ForumTextFields'


const ProfileInfoSection = ({profile, ...props}) => {
    const {id, jwtToken} = profile
    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState(profile.firstName || "")
    const [lastName, setLastName] = useState(profile.lastName)
    const [email, setEmail] = useState(profile.email)
    const [username, setUsername] = useState(profile.username)
    const [isValid, setIsValid] = useState(true)
    const [updated,setUpdated] = useState(false)


    const onUpdate = () => {
        if(!isValid){
            return
        }
        wesourceBackend.put(
            `/auth/${id}`,
            {
                firstName,
                lastName,
                username,
                email
            },
            {headers: { Authorization: `Bearer ${jwtToken}` }}
        ).then(res => {
            if(res.status === 200){
                dispatch(updateUser({
                    firstName,
                    lastName,
                    username,
                    email
                }));
                setUpdated("Success")
            }
        })
        .catch(err => {
            setUpdated("Failed")
        })
    }

    const setValidation = (validationState) => {
        if(validationState !== isValid){
            setIsValid(validationState)
        }
    }

    return (
        <>
            <Typography variant={"h6"} style={{fontWeight:"400"}}>Update Information about yourself</Typography>
            <Box>
                {
                    updated &&
                    <Box
                        sx={{
                            width:"100%",
                            backgroundColor:(theme) => updated === "Success"
                                ? theme.palette.success.light
                                : theme.palette.error.light,
                            marginBottom:"15px",
                            padding:"0px 10px"
                        }}
                    >
                        <Typography>
                            {
                                updated === "Success"
                                ? "Profile information updated!"
                                : "Profile information could not be updated."
                            }
                        </Typography>
                    </Box>
                }
                <ForumTextField 
                    label="First Name" 
                    fullWidth variant="filled"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    minLength={2}
                    validation={setValidation}
                />
                <ForumTextField 
                    label="Last Name" 
                    fullWidth variant="filled"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    minLength={2}
                    validation={setValidation}
                />
                <ForumTextField 
                    label="Username" 
                    fullWidth variant="filled"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    minLength={5}
                    maxLength={20}
                    validation={setValidation}
                />
                <ForumTextField 
                    label="Email"
                    fullWidth variant="filled"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    email
                    validation={setValidation}
                />
                <div>
                    <PrimaryButton disabled={!isValid} onClick={onUpdate} fullWidth>Update</PrimaryButton>
                </div>
            </Box>
        </>
    )
}


export default ProfileInfoSection
