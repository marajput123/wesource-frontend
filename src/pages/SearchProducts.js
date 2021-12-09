import { useEffect, useRef, useState } from 'react';
import { Container, Grid, Tab, Tabs, Typography } from '@mui/material';
import MainProductBox from '../components/MainProductBox';
import { Box } from '@mui/system';
import { MainContainer } from '../components/MainContainer';
import { wesourceBackend } from '../apis'
import {useSelector} from 'react-redux'
import MyGroups from '../components/MyGroups';
import Loading from '../components/Loading';
import { getAllProducts, getMyProducts } from '../server';



const SearchProducts = () => {
  const [currentTab, setCurrentTab] = useState("allProducts")
  const [products, setProducts] = useState([])
  const [myProducts, setMyProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const {auth, searchQuery, profile} = useSelector(state=>({
    auth:state.auth,
    searchQuery:state.searchQuery,
    profile:state.profile
  }))

  useEffect(() => {
    const getProducts = async () => {
      const searchProducts = await getAllProducts(searchQuery)
      setProducts(() => [...searchProducts.data])
      if(auth){
        const {product_ids} = (await getMyProducts(profile.id)).data
        const myProducts = searchProducts.data.filter(product => product_ids.includes(product._id["$oid"]))
        setMyProducts(() => [...myProducts])
      }
      setIsLoading(false)
    }
    getProducts()
  }, [searchQuery])

  const onChangeTab = (tab) => {
    setCurrentTab(tab)
  }

  const renderAllProducts = () => {
    return products.map((product) => (
      <Grid item key={product._id["$oid"]}>
        <MainProductBox product={product} />
      </Grid>
    ))
  }

  const renderMyProducts = () => {
    if(myProducts.length === 0){
      return <EmptyPage myProductsTab={true}/>
    }
    return myProducts.map((product) => (
      <Grid item key={product._id["$oid"]}>
        <MainProductBox product={product} />
      </Grid>
    ))

  }

  if(isLoading){
    return <Loading/>
  }

  return (
    <>
      <MainContainer>
        <Box sx={{marginBottom:"40px"}}>
          <Box
            sx={{
              flex: 1,
              margin:"40px 0px",
              width:"100%",
          }}
          >
            <Tabs
              sx={{
                justifyContent:"center",
                "& .MuiTabs-flexContainer":
                  {justifyContent:"center"}
                }} 
              value={currentTab}
              onChange={(e, tab) => onChangeTab(tab)}
            >
              <Tab
                style={{flex:1}}
                value="allProducts" 
                label="All Products" 
              />
              <Tab style={{flex:1}} value="myProducts" label="My Groups" disabled={auth !== true? true:false} />
            </Tabs>
          </Box>
          <Grid sx={{margin:0,width:"100%"}} container spacing={4} justifyContent="center">
            {currentTab === "allProducts" ? renderAllProducts() : renderMyProducts() }
          </Grid>
        </Box>
      </MainContainer>
    </>
  );
};

const EmptyPage = ({myProductsTab}) => {
  const emptyProductMessage = "Hmmmmm, we couldn't find any products"
  const emptyMyProductMessage = "Oh no, your not trying to buy any products O_O?"
  return (
    <Box
      sx={{
        display:"flex",
        alignItems:"center",
        height:"400px"
      }}
    >
      <Typography 
        sx={{
          color:"#9c9b9b"
        }}
        variant="h5"
      >
        {myProductsTab? emptyMyProductMessage: emptyProductMessage}
      </Typography>
    </Box>
  )
}

export default SearchProducts;
