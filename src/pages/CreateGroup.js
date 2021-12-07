import {  Container, TextField, Typography } from '@mui/material'
import { Box, maxWidth, typography } from '@mui/system'
import React, {useState} from 'react'
import { PrimaryButton } from '../components/Buttons'

const CreateGroup = ({productRegister}) => {
    const [product1, setproduct1] = useState("")
    const [product1Price, setproduct1Price] = useState("")
    const [product2, setproduct2] = useState("")
    const [product2Price, setproduct2Price] = useState("")
    const [supplierURL, setsupplierURL] = useState("")
    const [maxSize, setmaxSize] = useState("")
    const [groupDesc, setgroupDesc] = useState("")

    const onCreateClick = () => {
        console.log("Product submitted")
    }

    return (
        <>
            <Container>
                <Typography variant="h4" sx={{padding:"30px", fontWeight:300, textAlign:"center"}}>Create a Group</Typography>
                <Box sx={{ display: "flex"}}>
                    <Container sx={{
                        alignItems: "center",
                    '& .MuiTextField-root ': { m: 1, maxWidth: '45ch', width:"90%" },
                    '& .MuiButton-root': { m: 1, maxWidth: '45ch', width:"90%" },}}>
                        <TextField label="Product #1" variant="outlined" value={product1} onChange={(e) => setproduct1(e.target.value)}/>
                        <TextField label="Product #1 Price" variant="outlined" value={product1Price} onChange={(e) => setproduct1Price(e.target.value)}/>
                        <TextField label="Product #2" variant="outlined" value={product2} onChange={(e) => setproduct2(e.target.value)}/>
                        <TextField label="Product #2 Price" variant="outlined" value={product2Price} onChange={(e) => setproduct2Price(e.target.value)} />
                        <TextField label="Supplier Website URL " variant="outlined" value={supplierURL} onChange={(e) => setsupplierURL(e.target.value)}/>
                        <TextField label="Max allowed group size" variant="outlined" value={maxSize} onChange={(e) => setmaxSize(e.target.value)} />
                        <TextField label="Group Description" variant="outlined" value={groupDesc} onChange={(e) => setgroupDesc(e.target.value)}/>
                        <PrimaryButton onClick={onCreateClick}>Create</PrimaryButton>
                    </Container>
                    {/* Dash */}
                    <Container sx={{display:"flex", justifyContent:"center"} }>
                        <Box sx={{
                            borderRight: "solid gray 1px",
                            height: "95%",
                            maxWidth: "5%",
                            mt:.5
                        }}>
                        </Box>
                    </Container>

                    <Container>
                        <Box sx={{ maxWidth:"100%" }}>
                            <img style={{maxWidth:"100%", paddingTop:"30%"}}
                            src={
                                'https://m.media-amazon.com/images/I/61VJWSztDcL._AC_SL1022_.jpg'
                                } />
                        </Box>
                    </Container>
                </Box>
            </Container>
        </>
    )
}

export default CreateGroup
