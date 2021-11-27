import { useState, useEffect } from 'react';
import { Link as LinkRoute, useParams, useHistory } from 'react-router-dom';
import { PrimaryButton } from '../components/Buttons';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Container, Box, Avatar, Typography } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import Logo from '../static/W.svg';
import { wesourceBackend } from '../apis'
import UserAvatar from '../components/UserAvatar';

const ProductDashboard = () => {
  const history = useHistory();
  const {productDashboardID} = useParams()

  const onGoToLandingPage = () => {
    history.push('/');
  };

  const DATA1 = [
    {
      id: '0',
      title: "Cut co. Utensil box",
      price: 638,
      quantity:1,
      ownername:"get_bopped90",
      status:"Delivered",
      imageUrl:"https://www.vhv.rs/dpng/d/405-4054687_knife-sets-png-free-image-download-pioneer-woman.png",
      description: 'This is an Item Set #1',
      date: '10/10/21'
     }
  ];


  // useEffect(()=>{
  //   wesourceBackend.get(`group/${productDashboardID}`).then(res => {
  //     setAllProducts(res.data);
  //   }).catch(err => {
  //     console.log("No Products Available")
  // })
  // },[])

  const [announcements, setAnnouncements] = useState(true);
  const [lockIn, setLockIn] = useState(true);

  return (
    <>
      <Box
        sx={{
          boxShadow: '2px 0 5px rgb(0 0 0 / 20%)',
          bgcolor: '',
        }}
      >
        {/* Top Heading */}
        <Container
          sx={{
            display: 'flex',
            mt: '3rem',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: '2rem',
            borderBottom: '2px solid yellow',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box>
              <Typography variant='h5'>
              {DATA1[0].ownername}'s Group!
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ pr: '1rem' }}>Lock In</Typography>
            <PrimaryButton onClick={() => setLockIn(!lockIn)}>
              {lockIn && <LockOpenIcon />}
              {!lockIn && <LockIcon />}
            </PrimaryButton>
          </Box>
          <Typography>Status: {DATA1[0].status}</Typography>
        </Container>

        {/* Middle */}
        <Box
          sx={{
            display: 'flex',
          }}
        >
          {/* Left Content */}
          <Box
            sx={{
              p: '2rem',
              display: 'flex',
              flexDirection: 'column',
              width: '80%',
            }}
          >
            {/* First Level | Triple Box */}
            <Box sx={{ display: 'flex', maxHeight: '20rem', my: '2rem' }}>
              <Box
                sx={{
                  width: '20%',
                }}
              >
                <img
                  src={
                    `${DATA1[0].imageUrl}`
                  }
                  style={{ height: '100%', width: '100%' }}
                />
              </Box>
              <Box
                sx={{
                  borderRight: 'solid 2px yellow',
                  width: '40%',
                  px: '2rem',
                }}
              >
                <Typography>
                  {DATA1[0].date}
                </Typography>
                <Typography>
                  {DATA1[0].description}
                </Typography>
                <Typography>
                  $ {DATA1[0].price}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '40%',
                  px: '2rem',
                }}
              >
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident,
                </Typography>
              </Box>
            </Box>

            {/* Second Level | Announcement/Comments Button */}
            <Box
              sx={{
                display: 'flex',
                pt: '2rem',
                borderTop: 'green 2px dotted',
                mb: '3rem',
              }}
            >
              <Box
                sx={{
                  width: '50%',
                  textAlign: 'center',
                  borderRight: 'solid 1px black',
                }}
              >
                <PrimaryButton
                  sx={{ width: '10rem' }}
                  onClick={() => setAnnouncements(true)}
                >
                  Announcements
                </PrimaryButton>
              </Box>
              <Box
                sx={{
                  width: '50%',
                  textAlign: 'center',
                }}
              >
                <PrimaryButton
                  sx={{ width: '10rem' }}
                  onClick={() => setAnnouncements(false)}
                >
                  Comments
                </PrimaryButton>
              </Box>
            </Box>

            {/* Third Level | Box for Announcements or Comments */}
            {announcements && (
              <Box sx={{ borderTop: 'orange solid 2px', pt: '1rem' }}>
                {/* List of Comments */}
                <Box
                  sx={{
                    display: 'flex',
                    my: '1rem',
                  }}
                >
                  <Avatar />
                  <Typography sx={{ pl: '2rem' }} variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident,
                  </Typography>
                </Box>
                {/* Coment 2 */}
                <Box
                  sx={{
                    display: 'flex',
                    my: '1rem',
                  }}
                >
                  <Avatar />
                  <Typography sx={{ pl: '2rem' }} variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident,
                  </Typography>
                </Box>
              </Box>
            )}
            {!announcements && (
              <Box sx={{ display: 'flex' }}>
                <Avatar variant="square" />
                <Typography sx={{ ml: '1rem' }}>
                  How does a train eat? it choo chews! How does a train eat? it
                  choo chews! How does a train eat? it choo chews! How does a
                  train eat? it choo chews! How does a train eat? it choo chews!
                  How does a train eat? it choo chews!
                </Typography>
              </Box>
            )}
          </Box>

          {/* Right Side Bar */}
          <Box
            sx={{
              width: '20%',
              display: 'flex',
              flexDirection: 'column',
              borderLeft: 'solid 2px orange',
              p: '1rem',
              height: '100vh',
            }}
          >
            <Typography variant="body1" color="red">
              Organizer
            </Typography>
            {/* User Component */}
            <UserAvatar id='1001' name='Billy Bob ' />

            <Typography variant="body1" color="brown">
              Users
            </Typography>

            {/* User Component */}
            <UserAvatar id='1002' name='Bob Bill' />
            <UserAvatar id='1003' name='Bob Bill' />
            <UserAvatar id='1004' name='Bob Bill' />
            <UserAvatar id='1005' name='Bob Bill' />

          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductDashboard;
