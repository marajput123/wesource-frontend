import {TextField} from '@mui/material';
import { styled } from '@mui/system';

const DateTextField = styled(TextField)((props) => ({
    // background: `${props.disabled? "grey":"linear-gradient(to right, #ff416c, #ff4b2b)"}`,
    "& label":{
        color:"white"
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
    },
    "& .MuiOutlinedInput-input":{
        color:"white"
    },
    '& .MuiOutlinedInput-root':{
        '& fieldset': {
            borderColor: 'white',
          },
          '&:hover fieldset': {
            borderColor: 'white',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white',
          },
    },
    "& svg":{
        color:"white"
    },
    "& .MuiFormHelperText-root":{
        color:"white"
    }
}));


export default DateTextField;

