import React, {useState} from 'react'
import { TextField, Typography, Box } from '@mui/material'
import ErrorIcon from '@mui/icons-material/ErrorOutline';

import { useSelector, useDispatch } from 'react-redux';
import { wesourceBackend } from '../../apis'
import { PrimaryButton } from '../../components/Buttons'
import { signInAction } from '../../store/actions/actionCreators';
import "./styling/signIn.css"
import { useHistory } from 'react-router';

const SignIn = ({useRegister}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const goToLandingPage = () => {
        history.push("/")
    }

    const login = () => {
        wesourceBackend.post("login", {
            email, password
        }).then(res => {
            dispatch(signInAction(res.data.jwt))
            goToLandingPage()
        }).catch(err => {
            console.log(err)
            if(err.response){
                setError(err.response.data.message)
            }
        })
    }
    
    return (
        <>
            <Typography variant="h5" sx={{paddingBottom:"10px", fontWeight:200}}>Welcome back!</Typography>
            <Typography variant="h6" sx={{paddingBottom:"10px"}}>Login</Typography>
            {error && 
                <ErrorBox error={error}/>
            }
            <TextField
                error={error? true:false}
                helperText={error? "Did you use your favorite email?":"Your favorite email!"}
                fullWidth
                label="Email"
                variant="filled"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                error={error? true:false}
                helperText={error? "Or maybe you entered the wrong password.":"Your super secret password!"}
                fullWidth
                label="Password"
                variant="filled"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <PrimaryButton fullWidth onClick={login}>Login</PrimaryButton>
            <PrimaryButton fullWidth onClick={e => useRegister(true)}>Create a account</PrimaryButton>
        </>
    )
}

const ErrorBox = ({error}) => {
    return (
        <Box sx={{backgroundColor:"#fb5d5d4a", borderRadius:"5px", padding:"10px"}}>
            <div style={{display:"flex",alignItems:"center"}}>
                <ErrorIcon style={{marginRight:"5px"}}/>
                <Typography style={{fontWeight:400}} variant="h6">Ooops</Typography>
            </div>
            <Typography variant="body2">{error}</Typography>
        </Box>
    )
}

export default SignIn


