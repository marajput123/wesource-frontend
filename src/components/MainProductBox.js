import { Typography, Box, Button } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { PrimaryButton } from './Buttons';
import { useHistory } from 'react-router-dom';
import ImageNotFoundSVG from "../static/Astronaut-01.svg";
import { isValidHttpUrl } from '../util/helpers';


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
    _id,
    imageURL
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
          height:"400px",
          display:"flex",
          flexDirection:"column"
        }}
      >
        {/* Top of Card */}
        <Box sx={{ py: '1rem', flex:1 }}>
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
            {isValidHttpUrl(imageURL)? <img src={imageURL}/> : <img src={ImageNotFoundSVG}/>}
          </Box>
          <Box sx={{ textAlign: 'center', mt: '1rem', padding:"0 10px" }}>
            <Typography variant="h5">{title}</Typography>
            <Typography>{Organizer}</Typography>
            <Box>
              <Typography sx={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                display: "block"
              }} variant="caption">{description}</Typography>
            </Box>
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
              color: 'white',
              borderBottomLeftRadius: '1rem',
              borderBottomRightRadius: '1rem',
              mt: '.5rem',
              width: '100%',
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