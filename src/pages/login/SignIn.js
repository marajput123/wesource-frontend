import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, {useState} from 'react'
import { PrimaryButton } from '../../components/Buttons'

const SignIn = ({useRegister}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <Box 
            sx={{
                flex:1,
                borderRadius:"0px",
                margin:"10px 0px",
                height:"100vh",
                maxHeight:"900px",
                }}
            >
                <Box sx={{
                    paddingTop:"7rem",
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    '& .MuiTextField-root ': { m: 1, maxWidth: '45ch', width:"90%" },
                    '& .MuiButton-root': { m: 1, maxWidth: '45ch', width:"90%" },
                }}>
                    <Typography variant="h5" sx={{paddingBottom:"10px", fontWeight:200}}>Welcome back!</Typography>
                    <Typography variant="h6" sx={{paddingBottom:"20px"}}>Login</Typography>
                    <TextField label="Email" variant="filled" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <TextField label="Password" variant="filled" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <PrimaryButton>Login</PrimaryButton>
                    <PrimaryButton onClick={e => useRegister(true)}>Create a account</PrimaryButton>
                </Box>
        </Box>
    )
}

export default SignIn


