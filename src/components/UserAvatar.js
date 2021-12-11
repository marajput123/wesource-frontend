import { Box, Typography, Link, Avatar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'
import {useHistory} from 'react-router-dom'

const UserAvatar = (props) => {
    const history = useHistory()
    const onAvatarClick = () => {
        history.push(`/users/${id}`)
    }
    const {name, id} = props
    return (
        <>
            <Box onClick={onAvatarClick} sx={{ display: 'flex', alignItems: 'center', py: '1rem', cursor:"pointer"}}>
                <Avatar />
                <Typography sx={{ ml: '1rem' }}>{name}</Typography>
            </Box>
        </>
    )
}

export default UserAvatar
