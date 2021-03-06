import { useEffect, useRef, useState } from 'react';
import { Container, Grid, IconButton, Tab, Tabs, Typography } from '@mui/material';
import MainProductBox from '../components/MainProductBox';
import { Box } from '@mui/system';
import { MainContainer } from '../components/MainContainer';
import { wesourceBackend } from '../apis'
import {useDispatch, useSelector} from 'react-redux'
import MyGroups from '../components/MyGroups';
import Loading from '../components/Loading';
import { getAllProducts, getMyProducts } from '../server';
import { errorAction } from '../store/actions/actionCreators';
import CloseIcon from '@mui/icons-material/Close';



const SearchProducts = () => {
  const dispatch = useDispatch()
  const [currentTab, setCurrentTab] = useState("allProducts")
  const [products, setProducts] = useState([])
  const [myProducts, setMyProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [onErrorJoin, setErrorJoin] = useState(false) 
  const [error,setError] = useState(false)

  const {auth, searchQuery, profile} = useSelector(state=>({
    auth:state.auth,
    searchQuery:state.searchQuery,
    profile:state.profile
  }))
  useEffect(() => {
    const getProducts = async () => {
      try{
        const searchProducts = await getAllProducts(searchQuery)
        let notJoinedProducts = searchProducts.data
        if(auth && profile.id){
          const {product_ids} = (await getMyProducts(profile.id)).data
          const myProducts = searchProducts.data.filter(product => product_ids.includes(product._id["$oid"]))
          notJoinedProducts = searchProducts.data.filter(product => !product_ids.includes(product._id["$oid"]))
          setMyProducts(() => [...myProducts])
        }
        setProducts(() => [...notJoinedProducts])
        setError(false)
      }catch(err){
        setError(true)
      }
      setIsLoading(false)
    }
    getProducts()
  }, [searchQuery, auth])

  const onChangeTab = (tab) => {
    setCurrentTab(tab)
  }

  const renderAllProducts = () => {
    return products.map((product) => (
      <Grid item key={product._id["$oid"]}>
        <MainProductBox onErrorJoin={setErrorJoin} product={product} />
      </Grid>
    ))
  }

  const renderMyProducts = () => {
    if(myProducts.length === 0){
      return <EmptyPage myProductsTab={true}/>
    }
    return myProducts.map((product) => (
      <Grid item key={product._id["$oid"]}>
        <MainProductBox joined product={product} />
      </Grid>
    ))

  }

  if(isLoading){
    return <Loading/>
  }

  if(error){
    return <Typography>Error</Typography>
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
          {
            onErrorJoin &&
            <Box sx={{bgcolor:(theme) => theme.palette.error.light, padding:"5px 10px", display:"flex", justifyContent:"space-between",alignItems:"center"}}>
              <Typography color="white" variant="h6">Could not join group. Please try agian later.</Typography>
              <IconButton onClick={() => setErrorJoin(false)}>
                <CloseIcon/>
              </IconButton>
            </Box>
          }
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
