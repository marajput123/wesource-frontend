import { Typography, Box, Button } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { PrimaryButton } from './Buttons';
import { useHistory } from 'react-router-dom';


const IMAGE_URL = "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"

const MainProductBox = ({product, ...props}) => {
  const history = useHistory();
  
  const {
    Organizer,
    date,
    description,
    price,
    quantity,
    status,
    title,
    _id
  } = product
  const toProductDashboard = () => {
    history.push(`/dashboard/${_id["$oid"]}`);
  };

  const convertDate = (unformattedDate) => {
    const timeInSeconds = unformattedDate["$date"]
    const date = new Date(timeInSeconds).toISOString().split("T")[0]
    return date
  }

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
              m: 'auto',
              width:'200px',
              borderRadius: '1rem',
              display:'flex',
              justifyContent:'center',
              height:"200px"
            }}
          >
            <img
              style={{ maxHeight: '100%', maxWidth: '100%' }}
              src={IMAGE_URL}
            />
          </Box>
          <Box sx={{ textAlign: 'center', mt: '1rem' }}>
            <Typography variant="h5">{title}</Typography>
            <Typography>{Organizer}</Typography>
            <Typography variant="caption">{description}</Typography>
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
              <Typography variant="body2">{convertDate(date)}</Typography>
              <Typography variant="caption">Date Created</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2">{quantity}</Typography>
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
              <Typography variant="caption">{status}</Typography>
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
            onClick={toProductDashboard}
          >
            Join Server
          </PrimaryButton>
        </Box>
      </Box>
    </>
  );
};

export default MainProductBox;