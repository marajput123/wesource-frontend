import { useState, useEffect } from 'react';
import { Link as LinkRoute, useParams, useHistory } from 'react-router-dom';
import { PrimaryButton } from '../components/Buttons';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Container, Box, Avatar, Typography } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import Logo from '../static/W.svg';
import { wesourceBackend } from '../apis'
import { MainContainer } from '../components/MainContainer';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import Review from '../components/Review';

const UserPage = () => {
  const history = useHistory();
  const {userID} = useParams()
  const rating = 50

//   useEffect(()=>{
//     wesourceBackend.get(`group/${productDashboardID}`).then(res => {
//       setAllProducts(res.data);
//     }).catch(err => {
//       setError("No Products Available")
//   })
//   },[])

  return (
    <>
      <MainContainer>

          <Container sx={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'column',
              mt:'5rem'
          }}>
            <Typography variant='h1'>{userID}'s {`(${rating}`} <StarBorderPurple500Icon style={{verticalAlign:'top', fontSize:'65px', color:'#e53935'}}/>)</Typography>
            <Typography variant='h4' sx={{mb:'30px'}}>Feedback Page</Typography>
            <Box sx={{
                width: '65%',
                border: '2px solid gray',
                borderRadius: '15px',
                p:'10px'
            }}>
                <Review rating={5} description={'Great Group Organizer! 10/10 Stars Would Recommend Again!Great Group Organizer! 10/10 Stars Would Recommend Again!Great Group Organizer! 10/10 Stars Would Recommend Again!'} />
                <Review rating={3} description={'Great Group Organizer! 10/10 Stars Would Recommend Again!Great Group Organizer! 10/10 Stars Would Recommend Again!Great Group Organizer! 10/10 Stars Would Recommend Again!'} />
                <Review rating={5} description={'Great Group Organizer! 10/10 Stars Would Recommend Again!Great Group Organizer! 10/10 Stars Would Recommend Again!Great Group Organizer! 10/10 Stars Would Recommend Again!'} />
                <Review rating={4} description={'Great Group Organizer! 10/10 Stars Would Recommend Again!Great Group Organizer! 10/10 Stars Would Recommend Again!Great Group Organizer! 10/10 Stars Would Recommend Again!'} />
            </Box>


          </Container>
      </MainContainer>
    </>
  );
};

export default UserPage;
