import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Row, Card, Button, Col, Stack, Image } from 'react-bootstrap';
import { Typography } from '@mui/material';
import { PrimaryButton } from '../components/Buttons';
import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
    const onGoToSignUp = () => {
        console.log("Go SignUp")
        // history.push("/SignUp")
    }
    const onGoToProducts = () => {
        console.log("Go Products")
        // history.push("/Products")
    }
    
    return (
        <>
            <Box>
                <Container component="main">
                    <Box className="text-center">
                        <Typography variant="h5" style={{
                        fontSize: "3em",
                        letterSpacing: 2,
                        marginBlockEnd: "0.25em",
                        textAlign:"center"
                        }}> WeSource </Typography>
                        <Typography className="description" style={{
                            textAlign: "center",
                            paddingBottom: "1%"
                            }}>
                            How does a train eat? it choo choos! <br></br>
                            How does a train eat? it choo choos! <br></br>
                            How does a train eat? it choo choos!
                        </Typography>
                        <PrimaryButton onClick={onGoToSignUp} sx={{
                            marginRight: "10px"
                        }}>Sign Up</PrimaryButton>
                        <PrimaryButton onClick={onGoToProducts}>Find Products</PrimaryButton>
                    </Box>

                    {/*Product showcase*/}
                    <Box sx={{ display: "flex", paddingTop: "3%"}}>
                        {/* Products Description or something */}
                        <Container sx={{
                            alignItems: "center"}}>
                            <Typography variant="h4" style={{
                            textAlign: "center"
                            }}>
                                Products
                            </Typography>
                            <Typography style={{
                            textAlign: "center"
                            }}>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos!
                                <br></br><br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos!
                                <br></br><br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos!
                            </Typography>
                        </Container>

                        {/* Empty container for middle part*/}
                        <Container sx={{display:"flex", justifyContent:"center"} }>
                        </Container>

                        {/* Image stacks*/}
                        <Container>
                            <Container sx={{
                                alignItems: "center"}}>
                                <img style={{maxWidth:"100%", paddingBottom:"10%"}} src={
                                'https://www.actionfiguresitalia.it/132193-large_default/sekiro-shadows-die-twice-figma-action-figure-sekiro-16-cm.jpg'
                                }/>
                                <img style={{maxWidth:"100%", paddingBottom:"10%"}} src={
                                'https://m.media-amazon.com/images/I/81j8GYy9pNL._AC_SL1500_.jpg'
                                } />
                                <img style={{maxWidth:"100%", paddingBottom:"10%"}} src={
                                'https://cdn.shopify.com/s/files/1/0269/7976/2309/products/2_559d85a6-be97-4434-a497-14d1c20e6a3c.jpg?v=1587740177'
                                } rounded/>
                            </Container>
                        </Container>
                    </Box>
                    
                    {/*Product showcase 2*/}
                    <Box sx={{ display: "flex", paddingTop: "3%"}}>
                        {/* Image stacks*/}
                        <Container>
                            <Container sx={{
                                alignItems: "center"}}>
                                <img style={{maxWidth:"100%", paddingBottom:"10%"}} src={
                                'https://www.actionfiguresitalia.it/132193-large_default/sekiro-shadows-die-twice-figma-action-figure-sekiro-16-cm.jpg'
                                }/>
                                <img style={{maxWidth:"100%", paddingBottom:"10%"}} src={
                                'https://m.media-amazon.com/images/I/81j8GYy9pNL._AC_SL1500_.jpg'
                                } />
                                <img style={{maxWidth:"100%", paddingBottom:"10%"}} src={
                                'https://cdn.shopify.com/s/files/1/0269/7976/2309/products/2_559d85a6-be97-4434-a497-14d1c20e6a3c.jpg?v=1587740177'
                                } rounded/>
                            </Container>
                        </Container>

                        {/* Empty container for middle part*/}
                        <Container sx={{display:"flex", justifyContent:"center"} }>
                        </Container>

                        {/* Description or something */}
                        <Container sx={{
                            alignItems: "center"}}>
                            <Typography variant="h4" style={{
                            textAlign: "center"
                            }}>
                                Delivered
                            </Typography>
                            <Typography style={{
                            textAlign: "center"
                            }}>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos!
                                <br></br><br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos!
                                <br></br><br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos! <br></br>
                                How does a train eat? it choo choos!
                            </Typography>
                        </Container>
                    </Box>

                    <Container className="text-center">
                        <PrimaryButton onClick={onGoToProducts}>Find Products</PrimaryButton>
                    </Container>
                </Container>
            </Box>
        </>
    )
}

export default LandingPage
