import { Container, Box, Avatar, Typography } from '@mui/material';
const Review = (props) => {
    const {rating, description} = props
    return (
        <>
            <Box sx={{
                    display:'flex',
                    borderBottom: '1px gray solid',
                    p:'5px'
                }}>
                    <Typography sx={{mr:'2rem'}}>{rating}</Typography>
                    <Typography>{description}</Typography>
                </Box>
        </>
    )
}

export default Review
