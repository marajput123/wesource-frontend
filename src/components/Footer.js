import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Container, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                marginTop:"10px",
                display: 'flex',
                bottom: 0,
                left: 0,
                py: 2,
                width: '100%',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
            }}
        >
            <Container maxWidth="sm" color='primary.main'>
                <Typography variant="body2" color="text.secondary" align="center" >
                    {'Copyright © '}
                    <Link color="inherit" href="https://material-ui.com/">
                        WeSource
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Container>
        </Box>
    )
}

export default Footer
