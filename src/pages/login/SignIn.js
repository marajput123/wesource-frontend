import { TextField, Typography } from '@mui/material'
import React, {useState} from 'react'
import { PrimaryButton } from '../../components/Buttons'

const SignIn = ({useRegister}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <>
            <Typography variant="h5" sx={{paddingBottom:"10px", fontWeight:200}}>Welcome back!</Typography>
            <Typography variant="h6" sx={{paddingBottom:"20px"}}>Login</Typography>
            <TextField label="Email" variant="filled" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <TextField label="Password" variant="filled" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <PrimaryButton>Login</PrimaryButton>
            <PrimaryButton onClick={e => useRegister(true)}>Create a account</PrimaryButton>
        </>
    )
}

export default SignIn


