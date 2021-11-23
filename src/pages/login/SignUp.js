import React, {useState} from 'react'
import {  TextField, Typography, Box } from '@mui/material'
import ErrorIcon from '@mui/icons-material/ErrorOutline';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { wesourceBackend } from '../../apis'
import { PrimaryButton } from '../../components/Buttons'
import { signInAction } from '../../store/actions/actionCreators'

const SignUp = ({useRegister}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    const [error, setError] = useState("")

    const goToLandingPage = () => {
        history.push("/")
    }

    const onRegisterClick = async() => {
        wesourceBackend.post("auth", {
            firstName,
            lastName,
            username,
            email,
            password
        }).then(res => {
            dispatch(signInAction(res.data.jwt))
            goToLandingPage()
        }).catch(err => {
            setError("Incorrect information provided, please make sure to fill all the credentials correctly.")
        })
    }

    return (
            <>
                <Typography variant="h5" sx={{paddingBottom:"10px", fontWeight:200}}>Hello new user!</Typography>
                <Typography variant="h6" sx={{paddingBottom:"20px"}}>Register</Typography>
                {error && 
                <ErrorBox error={error}/>
                }
                <TextField 
                    helperText="Your first name."
                    fullWidth
                    label="First Name"
                    variant="filled"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField 
                    helperText="Your last name."
                    fullWidth
                    label="Last Name"
                    variant="filled"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                    helperText="A name that defines who you are!"
                    fullWidth
                    label="Username"
                    variant="filled"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    helperText="We will not share your email with anyone!"
                    fullWidth
                    label="Email"
                    variant="filled"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    helperText="Do not share password with anyone!"
                    fullWidth
                    label="Password"
                    variant="filled"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <PrimaryButton fullWidth onClick={onRegisterClick}>Register</PrimaryButton>
                <PrimaryButton fullWidth  onClick={e => useRegister(false)} >Already a user?</PrimaryButton>
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

export default SignUp
