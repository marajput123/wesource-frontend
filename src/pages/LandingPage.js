import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { PrimaryButton } from '../components/Buttons';
import { useSelector } from 'react-redux';
import {useHistory} from "react-router-dom"
import { MainContainer } from '../components/MainContainer';

const LandingPage = () => {
    const history = useHistory()
    const authState = useSelector(authState => {return authState.profile})
    const {id} = authState

    const goToLoginPage = () => {
        history.push("/login")
    }

    const goToSearchProductPage = () =>{
        history.push("/search-products")
    }

    return (
        <>
        <MainContainer>
           <Box 
            sx={{
                flex:1,
                height:"100vh",
                maxHeight:900,
                minHeight:700,
                justifyContent:"center",
                alignItems:"center",
                display:"flex"
            }}
           >
               <Box sx={{mb:"12rem"}}>
                   <Typography variant={"h2"}>WeSource</Typography>
                   <Box sx={{width:425}}>
                        <Typography variant="h6" sx={{padding:"5px 10px", fontWeight:400}}>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. 
                        </Typography>
                    </Box>
                    <Box style={{paddingTop:"20px", flex:1, display:"flex"}}>
                        {
                        !id && 
                        <PrimaryButton onClick={goToLoginPage} sx={{margin:"0px 10px"}} fullWidth>
                            Sign Up
                        </PrimaryButton>
                        }
                        <PrimaryButton onClick={goToSearchProductPage} sx={{margin:"0px 10px"}} fullWidth>
                            Search Products
                        </PrimaryButton>
                    </Box>
               </Box>
           </Box>
           </MainContainer>
        </>
        // <Box>
        //     <Container component="main">

        //         <Row className= "mb-5">
        //             <Card className="col-centered mt-4" style={{
        //                 width: '33.33%',
        //                 border: "none"
        //             }}>
        //                 <Card.Body>
        //                     <Card.Title style={{
        //                             fontSize: "3em",
        //                             letterSpacing: 2,
        //                             marginBlockEnd: "0.25em"
        //                         }}>
        //                         WeSource
        //                     </Card.Title>
        //                     <Card.Text>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos!
        //                     </Card.Text>
        //                     <Button style={{ marginRight: "2em" }} variant="primary" size="lg" active>
        //                         Sign Up
        //                     </Button>{' '}
        //                     <Button variant="secondary" size="lg" active>
        //                         Find Products
        //                     </Button>
        //                 </Card.Body>
        //             </Card>
        //         </Row>

        //         <Row className= "mb-5">
        //             <Col>
        //                <Card>
        //                 <Card.Body>
        //                     <Card.Title className="text-center" style={{
        //                         fontSize: "1.5em",
        //                         letterSpacing: .5,
        //                         marginBlockEnd: "0.25em"
        //                     }}>
        //                         Products
        //                     </Card.Title>
        //                     <Card.Text className="text-center">
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos!
        //                     <br></br><br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos!
        //                     <br></br><br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos!          
        //                     </Card.Text>
        //                     </Card.Body>
        //                 </Card> 
        //             </Col>
        //             <Col>
        //                 <Stack gap={3}>
        //                     <div className="text-center">
        //                         <Image className="w-50" src="https://www.actionfiguresitalia.it/132193-large_default/sekiro-shadows-die-twice-figma-action-figure-sekiro-16-cm.jpg" rounded ></Image>
        //                     </div>
        //                     <div className="text-center">
        //                         <Image className="w-50" src="https://m.media-amazon.com/images/I/81j8GYy9pNL._AC_SL1500_.jpg" rounded></Image>
        //                     </div>
        //                     <div className="text-center">
        //                         <Image className="w-50" src="https://cdn.shopify.com/s/files/1/0269/7976/2309/products/2_559d85a6-be97-4434-a497-14d1c20e6a3c.jpg?v=1587740177" rounded></Image>
        //                     </div>
        //                 </Stack>
        //             </Col>
        //         </Row>
                
        //         <Row className= "mb-5">
        //             <Col>
        //                 <Stack gap={3}>
        //                     <div className="text-center">
        //                         <Image className="w-50" src="https://www.actionfiguresitalia.it/132193-large_default/sekiro-shadows-die-twice-figma-action-figure-sekiro-16-cm.jpg" rounded ></Image>
        //                     </div>
        //                     <div className="text-center">
        //                         <Image className="w-50" src="https://m.media-amazon.com/images/I/81j8GYy9pNL._AC_SL1500_.jpg" rounded></Image>
        //                     </div>
        //                     <div className="text-center">
        //                         <Image className="w-50" src="https://cdn.shopify.com/s/files/1/0269/7976/2309/products/2_559d85a6-be97-4434-a497-14d1c20e6a3c.jpg?v=1587740177" rounded></Image>
        //                     </div>
        //                 </Stack>
        //             </Col>
        //             <Col>
        //                 <Card>
        //                 <Card.Body>
        //                     <Card.Title className="text-center" style={{
        //                         fontSize: "1.5em",
        //                         letterSpacing: .5,
        //                         marginBlockEnd: "0.25em"
        //                     }}>
        //                         Delivered
        //                     </Card.Title>
        //                     <Card.Text className="text-center">
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos!
        //                     <br></br><br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos!
        //                     <br></br><br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos! <br></br>
        //                     How does a train eat? it choo choos!          
        //                     </Card.Text>
        //                     </Card.Body>
        //                 </Card>
        //             </Col>
        //         </Row>

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

// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import { Typography } from '@mui/material';
// import { PrimaryButton } from '../components/Buttons';
// import { React, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { MainContainer } from '../components/MainContainer';

// const LandingPage = () => {
//     const history = useHistory()
//     const authState = useSelector(authState => {return authState.auth})
//     const {id} = authState

//     const goToLoginPage = () => {
//         history.push("/login")
//     }

//     const goToSearchProductPage = () =>{
//         history.push("/search-products")
//     }
//     return (
//         <>
//             <Box>
//                 <Container component="main">
//                     <Box className="text-center">
//                         <Typography variant="h5" style={{
//                         fontSize: "3em",
//                         letterSpacing: 2,
//                         marginBlockEnd: "0.25em",
//                         textAlign:"center"
//                         }}> WeSource </Typography>
//                         <Typography className="description" style={{
//                             textAlign: "center",
//                             paddingBottom: "1%"
//                             }}>
//                             How does a train eat? it choo choos! <br></br>
//                             How does a train eat? it choo choos! <br></br>
//                             How does a train eat? it choo choos!
//                         </Typography>
//                         <Container sx={{textAlign:"Center"}}>
//                             {
//                             !id && 
//                             <PrimaryButton onClick={goToLoginPage} sx={{margin:"0px 10px"}}>
//                                 Sign Up
//                             </PrimaryButton>
//                             }
//                             <PrimaryButton onClick={goToSearchProductPage}>
//                                 Search Products
//                             </PrimaryButton>
//                         </Container>
                        
//                     </Box>

//                     {/*Product showcase*/}
//                     <Box sx={{ display: "flex", paddingTop: "3%"}}>
//                         {/* Products Description or something */}
//                         <Container sx={{
//                             alignItems: "center"}}>
//                             <Typography variant="h4" style={{
//                             textAlign: "center"
//                             }}>
//                                 Products
//                             </Typography>
//                             <Typography style={{
//                             textAlign: "center"
//                             }}>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos!
//                                 <br></br><br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos!
//                                 <br></br><br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos!
//                             </Typography>
//                         </Container>

//                         {/* Empty container for middle part*/}
//                         <Container sx={{display:"flex", justifyContent:"center"} }>
//                         </Container>

//                         {/* Image stacks*/}
//                         <Container>
//                             <Container sx={{
//                                 alignItems: "center"}}>
//                                 <img style={{maxWidth:"100%", paddingBottom:"10%"}} src={
//                                 'https://www.actionfiguresitalia.it/132193-large_default/sekiro-shadows-die-twice-figma-action-figure-sekiro-16-cm.jpg'
//                                 }/>
//                                 <img style={{maxWidth:"100%", paddingBottom:"10%"}} src={
//                                 'https://m.media-amazon.com/images/I/81j8GYy9pNL._AC_SL1500_.jpg'
//                                 }/>
//                                 <img style={{maxWidth:"100%", paddingBottom:"10%"}} src={
//                                 'https://cdn.shopify.com/s/files/1/0269/7976/2309/products/2_559d85a6-be97-4434-a497-14d1c20e6a3c.jpg?v=1587740177'
//                                 }/>
//                             </Container>
//                         </Container>
//                     </Box>
                    
//                     {/*Product showcase 2*/}
//                     <Box sx={{ display: "flex", paddingTop: "3%"}}>
//                         {/* Image stacks*/}
//                         <Container>
//                             <Container sx={{
//                                 alignItems: "center"}}>
//                                 <img style={{maxWidth:"100%", paddingBottom:"10%"}} src={
//                                 'https://www.actionfiguresitalia.it/132193-large_default/sekiro-shadows-die-twice-figma-action-figure-sekiro-16-cm.jpg'
//                                 }/>
//                                 <img style={{maxWidth:"100%", paddingBottom:"10%"}} src={
//                                 'https://m.media-amazon.com/images/I/81j8GYy9pNL._AC_SL1500_.jpg'
//                                 }/>
//                                 <img style={{maxWidth:"100%", paddingBottom:"10%"}} src={
//                                 'https://cdn.shopify.com/s/files/1/0269/7976/2309/products/2_559d85a6-be97-4434-a497-14d1c20e6a3c.jpg?v=1587740177'
//                                 }/>
//                             </Container>
//                         </Container>

//                         {/*Empty container for middle part*/}
//                         <Container sx={{display:"flex", justifyContent:"center"} }>
//                         </Container>

//                         {/* Description or something */}
//                         <Container sx={{
//                             alignItems: "center"}}>
//                             <Typography variant="h4" style={{
//                             textAlign: "center"
//                             }}>
//                                 Delivered
//                             </Typography>
//                             <Typography style={{
//                             textAlign: "center"
//                             }}>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos!
//                                 <br></br><br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos!
//                                 <br></br><br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos! <br></br>
//                                 How does a train eat? it choo choos!
//                             </Typography>
//                         </Container>
//                     </Box>

//                     <Container sx={{textAlign:"Center"}}>
//                         <PrimaryButton onClick={goToSearchProductPage}>
//                                 Search Products
//                         </PrimaryButton>
//                     </Container>
//                 </Container>
//             </Box>
//         </>
//     )
// }

// export default LandingPage
