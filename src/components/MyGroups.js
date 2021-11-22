import { Typography, Box, Button } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { PrimaryButton } from './Buttons';
import { useHistory } from 'react-router-dom';

const MyGroups = (props) => {
  const {product} = props
  const history = useHistory();

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
              src={product.imageUrl}
            />
          </Box>
          <Box sx={{ textAlign: 'center', mt: '1rem' }}>
            <Typography variant="h5">{product.title}</Typography>
            <Typography>{product.ownername}</Typography>
            <Typography variant="caption">{product.description}</Typography>
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
              <Typography variant="body2">{product.date}</Typography>
              <Typography variant="caption">Date Created</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2">{product.quantity}</Typography>
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
              <Typography variant="caption">{product.status}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MyGroups;