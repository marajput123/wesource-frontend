import React from 'react'
import {Container, Box} from '@mui/material'
import Footer from './Footer'

export const MainContainer = ({children}) => {
    return (
        <>
         <Box sx={{display:"flex", minHeight:"100vh", flexDirection:"column"}}>
            <Container maxWidth="lg" sx={{flexGrow:1}}>
                {children}
            </Container>
            <Footer/>
        </Box> 
        </>
    )
}
