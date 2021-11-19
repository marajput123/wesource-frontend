import { useEffect, useState } from 'react';
import { Container, Grid, Link, Tab, Tabs, Typography } from '@mui/material';
import MainProductBox from '../components/MainProductBox';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/system';
import { MainContainer } from '../components/MainContainer';
const DATA = [
  { 
    id: '0',
    title: "Cut co. Utensil box",
    price: 638,
    quantity:1,
    ownername:"get_bopped90",
    status:"funding",
    imageUrl:"https://www.vhv.rs/dpng/d/405-4054687_knife-sets-png-free-image-download-pioneer-woman.png"
   },
  { 
    id: '1',
    title: "Costco Mini cars",
    price: 102,
    quantity:1,
    ownername:"aMighty_01",
    status:"funding",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtGQkRZIH7xZjefLkzquXgOmAEv-SZ8kL3oQ&usqp=CAU"
   },
  { 
    id: '2',
    title: "Action figure box",
    price: 100,
    quantity:1,
    ownername:"7seven123",
    status:"Transfering",
    imageUrl:"https://i.pinimg.com/736x/00/af/88/00af88f587d6bd593c48e5789fd33627.jpg"
   },
];

const SearchProducts = () => {
  const [currentTab, setCurrentTab] = useState("allProducts")

  const renderAllProducts = () => {
    return DATA.map((product) => (
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
            <Tab style={{flex:1}} value="searchProducts" label="Search Products" />
          </Tabs>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {currentTab === "allProducts"? renderAllProducts() : <Typography>My group</Typography>}
        </Grid>
      </MainContainer>
    </>
  );
};

export default SearchProducts;
