import React, {useState} from 'react';
import { Box} from '@mui/material'
import SignIn from './SignIn';
import SignUp from './SignUp';

const LogIn = () => {
    const [isRegister, useRegister] = useState(false)
    return (
        <>
        <Box 
            sx={{
                flex:1,
                borderRadius:"0px",
                margin:"50px 0px 10px 0px",
                maxHeight:"900px",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                '& .MuiTextField-root ': { m: 1},
                '& .MuiButton-root': { m: 1}
                }}
            >
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    width:"100%",
                    maxWidth:"340px"                    
                }}>
            {!isRegister? <SignIn useRegister={useRegister}/>:<SignUp useRegister={useRegister}/>}
            </Box>
        </Box>
        </>
    );
}

export default LogIn