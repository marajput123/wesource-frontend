import { useEffect, useState } from 'react';
import { Container, Grid, Link, Tab, Tabs, Typography } from '@mui/material';
import MainProductBox from '../components/MainProductBox';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/system';
import { MainContainer } from '../components/MainContainer';
import { wesourceBackend } from '../apis'
import {useSelector} from 'react-redux'
import MyGroups from '../components/MyGroups';
const SearchProducts = () => {
  const [currentTab, setCurrentTab] = useState("allProducts")
  const [allProducts, setAllProducts] = useState({
    data: []
  })
  let signedIn = false

  const auth = useSelector(state=>state.auth)
  // Check to see if user is signed in
  if(JSON.stringify(auth) !== '{}') {
    signedIn = true;
  }

  const DATA = [
    {
      id: '0',
      title: "Cut co. Utensil box",
      price: 638,
      quantity:1,
      ownername:"get_bopped90",
      status:"funding",
      imageUrl:"https://www.vhv.rs/dpng/d/405-4054687_knife-sets-png-free-image-download-pioneer-woman.png",
      description: 'This is an Item Set #1',
      date: '10/10/21'
     },
    {
      id: '1',
      title: "Costco Mini cars",
      price: 102,
      quantity:1,
      ownername:"aMighty_01",
      status:"funding",
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtGQkRZIH7xZjefLkzquXgOmAEv-SZ8kL3oQ&usqp=CAU",
      description: 'This is an Item Set #2',
      date: '10/10/21'
     },
    {
      id: '2',
      title: "Action figure box",
      price: 100,
      quantity:1,
      ownername:"7seven123",
      status:"Transfering",
      imageUrl:"https://i.pinimg.com/736x/00/af/88/00af88f587d6bd593c48e5789fd33627.jpg",
      description: 'This is an Item Set #3',
      date: '10/10/21'
     },
  ];

  const DATA1 = [
    {
      id: '0',
      title: "Cut co. Utensil box",
      price: 638,
      quantity:1,
      ownername:"get_bopped90",
      status:"Delivered",
      imageUrl:"https://www.vhv.rs/dpng/d/405-4054687_knife-sets-png-free-image-download-pioneer-woman.png",
      description: 'This is an Item Set #1',
      date: '10/10/21'
     }
  ];


  // useEffect(()=>{
  //   wesourceBackend.get("/group").then(res => {
  //     setAllProducts(res.data);
  //   }).catch(err => {
  //     console.log("No Products Available")
  // })
  // },[])

  const renderAllProducts = () => {
    // return allProducts.data.map((product) => (
    //   <Grid item key={product._id}>
    //     <MainProductBox product={product} key={product._id} />
    //   </Grid>
    // ))

    return DATA.map((product) => (
      <Grid item key={product.id}>
        <MainProductBox product={product} />
      </Grid>
    ))
  }

  const renderAllUserGroups = () => {
    // return DATA1.map((product) => (
    //   <Grid item key={product.id}>
    //     <MyGroups product={product} />
    //   </Grid>
    // ))

    return DATA1.map((product) => (
      <Grid item key={product.id}>
        <MainProductBox product={product} />
      </Grid>
    ))

  }


  return (
    <>
      <MainContainer>
        <Box
          sx={{
            flex: 1,
            margin:"40px 0px",
            width:"100%",
        }}
        >
          <Tabs sx={{justifyContent:"center", "& .MuiTabs-flexContainer":{justifyContent:"center"}}} value={currentTab} onChange={(e, tab) => setCurrentTab(tab)} >
            <Tab style={{flex:1}} value="allProducts" label="All Products" />
            {signedIn === true ? <Tab style={{flex:1}} value="myGroups" label="My Groups" /> : <Tab style={{flex:1}} disabled value="myGroups" label="My Groups" /> }
          </Tabs>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {currentTab === "allProducts" ? renderAllProducts() : renderAllUserGroups() }
        </Grid>
      </MainContainer>
    </>
  );
};

export default SearchProducts;
