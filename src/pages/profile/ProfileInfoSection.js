import React, { useState } from 'react'
import { Typography } from '@mui/material'
import { Box, TextField, Button } from "@mui/material"
import { PrimaryButton } from '../../components/Buttons'
import { useDispatch, useSelector } from 'react-redux'
import "./profilePage.css"
import { wesourceBackend } from '../../apis'
import { updateUser } from '../../store/actions/actionCreators'
import ForumTextField  from '../../components/textFields/ForumTextFields'


const ProfileInfoSection = () => {
    const {uname, fname, lname, email, id, token} = useSelector(rootState => rootState.auth)
    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState(fname || "")
    const [lastName, setLastName] = useState(lname)
    const [userEmail, setUserEmail] = useState(email)
    const [username, setUsername] = useState(uname)
    const [isValid, setIsValid] = useState(true)


    const onUpdate = () => {
        if(!isValid){
            return
        }
        wesourceBackend.put(
            `/auth/${id}`,
            {
                firstName:firstName,
                lastName,
                username,
                email:userEmail
            },
            {headers: { Authorization: `Bearer ${token}` }}
        ).then(res => {
            if(res.status === 200){
                dispatch(updateUser({
                    fname:firstName,
                    lname:lastName,
                    uname:username,
                    email:userEmail
                }))
            }
        })
        .catch(err => {
            console.log(err);
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
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
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
