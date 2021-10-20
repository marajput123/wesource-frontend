import React, {useState} from 'react';
import { Box, Container} from '@mui/material'
import Footer from '../../components/Footer';
import SignIn from './SignIn';
import SignUp from './SignUp';

const LogIn = () => {
    const [isRegister, useRegister] = useState(false)
    return (
        <>
            <Container maxWidth="lg">
                <Box sx={{height:"100vh", display:"flex"}}>
                    {!isRegister? <SignIn useRegister={useRegister}/>:<SignUp useRegister={useRegister}/>}
                </Box>
            </Container>
            <Footer/>
        </>
    );
}

export default LogIn