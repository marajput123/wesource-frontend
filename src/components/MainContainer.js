import React from 'react'
import {Container, Box} from '@mui/material'
import Footer from './Footer'

export const MainContainer = ({children}) => {
    return (
        <>
         <Box sx={{height:"100vh", display:"flex", minHeight:"900px", flexDirection:"column"}}>
            <Container maxWidth="lg" sx={{flexGrow:1}}>
                {children}
            </Container>
            <Footer/>
        </Box> 
        </>
    )
}
