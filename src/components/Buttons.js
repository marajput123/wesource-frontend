import { Button } from '@mui/material';
import { styled } from '@mui/system';

export const PrimaryButton = styled(Button)((props) => ({
  background: `${props.disabled? "grey":"linear-gradient(to right, #ff416c, #ff4b2b)"}`,
  color: 'white',
}));

export const FilterButton = styled(Button)(({ theme }) => ({
  background: ' linear-gradient(to right, #ff416c, #ff4b2b)',
  color: 'white',
  height: '46px',
  borderRadius: '0px 20px 20px 0px',
}));
