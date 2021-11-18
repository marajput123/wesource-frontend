import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Row, Card, Button, Col, Stack, Image } from 'react-bootstrap';
import { Typography } from '@mui/material';

const LandingPage = () => {
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



        //         <Row className= "mb-5">
        //             <div className="text-center">
        //                 <Button variant="secondary" size="lg" active>
        //                     Find Products
        //                 </Button>
        //             </div>
        //         </Row>
        //     </Container>
        // </Box>
    )
}

export default LandingPage
