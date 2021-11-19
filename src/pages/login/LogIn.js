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
                margin:"10px 0px",
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
            {!isRegister? <SignIn useRegister={useRegister}/>:<SignUp useRegister={useRegister}/>}
            </Box>
        </Box>
        </>
    );
}

export default LogIn