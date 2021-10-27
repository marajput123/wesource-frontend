import {  TextField, Typography } from '@mui/material'
import React, {useState} from 'react'
import { PrimaryButton } from '../../components/Buttons'

const SignUp = ({useRegister}) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 

    const onRegisterClick = () => {
        console.log("register click")
    }

    return (
            <>
                <Typography variant="h5" sx={{paddingBottom:"10px", fontWeight:200}}>Hello new user!</Typography>
                <Typography variant="h6" sx={{paddingBottom:"20px"}}>Register</Typography>
                <TextField label="First Name" variant="outlined" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <TextField label="Last Name" variant="outlined" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                <TextField label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <TextField label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <PrimaryButton onClick={onRegisterClick}>Register</PrimaryButton>
                <PrimaryButton onClick={e => useRegister(false)} >Already a user?</PrimaryButton>
            </>
    )
}

export default SignUp
