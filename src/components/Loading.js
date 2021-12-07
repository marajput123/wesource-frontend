import { LinearProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Logo from "../static/W.svg"
import { BorderLinearProgress } from './loaders'
import { MainContainer } from './MainContainer'

const Loading = () => {
    return (
        <Box
            sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                height:"100vh",
                flexDirection:"column"
            }}
        >
              <img  src={Logo} style={{width:"150px", height:"90px"}}/>
              <BorderLinearProgress sx={{width:"90vw", maxWidth:"250px"}}/>
        </Box>
    )
}

export default Loading
