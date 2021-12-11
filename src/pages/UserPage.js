import { Box, Typography } from '@mui/material';
import { MainContainer } from '../components/MainContainer';
import UnAuthorizedSVG from "../static/unauthorizedSVG.svg"

const UserPage = () => {


  return(
    <MainContainer>
      <Box sx={{display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"center", marginTop:"70px"}}>
        <Typography sx={{fontWeight:700}} variant={"h4"}>
          WHOOPS DOO, you shouldn't be here
        </Typography>
        <Typography sx={{padding:"10px 0px", fontWeight:300}} variant={"h6"}>
          (We couldn't finish the review page due shear amount of work)
        </Typography>
        <img style={{height:"800px"}}src={UnAuthorizedSVG} />
      </Box>
    </MainContainer>
  )
};

export default UserPage;
