import { Box, Typography, Link, Avatar } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom'
const UserAvatar = (props) => {
    const {name, id} = props
    return (
        <>
                <Link component={RouterLink} to={`/users/${id}`}>
            <Box sx={{ display: 'flex', alignItems: 'center', py: '1rem' }}>
                    <Avatar />
                    <Typography sx={{ ml: '1rem' }}>{name}</Typography>
            </Box>
                </Link>
        </>
    )
}

export default UserAvatar
