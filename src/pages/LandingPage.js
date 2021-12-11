
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { PrimaryButton } from '../components/Buttons';
import { useSelector } from 'react-redux';
import {useHistory} from "react-router-dom"
import { MainContainer } from '../components/MainContainer';

const LandingPage = () => {
    const history = useHistory()
    const authState = useSelector(authState => {return authState.profile})
    const {id} = authState

    const goToLoginPage = () => {
        history.push("/login")
    }

    const goToSearchProductPage = () =>{
        history.push("/search-products")
    }

    return (
        <>
        <MainContainer>
           <Box 
            sx={{
                flex:1,
                height:"100vh",
                maxHeight:900,
                minHeight:700,
                justifyContent:"center",
                alignItems:"center",
                display:"flex"
            }}
           >
               <Box sx={{mb:"12rem"}}>
                   <Typography variant={"h2"}>WeSource</Typography>
                   <Box sx={{width:425}}>
                        <Typography variant="h6" sx={{padding:"5px 10px", fontWeight:400}}>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. 
                        </Typography>
                    </Box>
                    <Box style={{paddingTop:"20px", flex:1, display:"flex"}}>
                        {
                        !id && 
                        <PrimaryButton onClick={goToLoginPage} sx={{margin:"0px 10px"}} fullWidth>
                            Sign Up
                        </PrimaryButton>
                        }
                        <PrimaryButton onClick={goToSearchProductPage} sx={{margin:"0px 10px"}} fullWidth>
                            Search Products
                        </PrimaryButton>
                    </Box>
               </Box>
           </Box>
           </MainContainer>
        </>
    )
}

export default LandingPage
