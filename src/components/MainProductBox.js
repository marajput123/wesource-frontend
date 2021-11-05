import { Typography, Box, Button } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { PrimaryButton } from './Buttons';
const MainProductBox = () => {
  return (
    <>
      <Box
        sx={{
          boxShadow: '5px 5px 20px rgb(0 0 0 / 60%)',
          borderRadius: '1rem',
          width: '20rem',
        }}
      >
        {/* Top of Card */}
        <Box sx={{ py: '1rem' }}>
          <Box
            sx={{
              p: '1rem',
              width: '60%',
              m: 'auto',
              border: '1px green solid',
              borderRadius: '1rem',
            }}
          >
            <img
              style={{ maxHeight: '100%', maxWidth: '100%' }}
              src="https://st.cdjapan.co.jp/pictures/l/05/27/NEOGDS-435844.jpg?v=1"
            />
          </Box>
          <Box sx={{ textAlign: 'center', mt: '1rem' }}>
            <Typography variant="h5">Product Name</Typography>
            <Typography>Owner Name</Typography>
            <Typography variant="caption">Lorem 123</Typography>
          </Box>
        </Box>
        {/* Bottom of Card */}
        <Box>
          {/* Info */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2">10/10/21</Typography>
              <Typography variant="caption">Date Created</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2">2</Typography>
              <Typography variant="caption">Quantity</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <CircleIcon sx={{ fontSize: '1rem', color: 'green' }} />
              <Typography variant="caption">Status</Typography>
            </Box>
          </Box>
          {/* Join Server Button */}
          <PrimaryButton
            sx={{
              textAlign: 'center',
              bgcolor: 'indianred',
              color: 'white',
              borderBottomLeftRadius: '1rem',
              borderBottomRightRadius: '1rem',
              mt: '.5rem',
              width: '100%',
              ':hover': {
                bgcolor: 'red',
              },
            }}
          >
            Join Server
          </PrimaryButton>
        </Box>
      </Box>
    </>
  );
};

export default MainProductBox;
