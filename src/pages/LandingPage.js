import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Row, Card, Button, Col, Stack, Image } from 'react-bootstrap';
import { Typography } from '@mui/material';

const LandingPage = () => {
    return (
        <>
            <Typography>Hello world</Typography>
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
