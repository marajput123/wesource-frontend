import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PrimaryButton } from '../components/Buttons';
import {Box, Typography, Tabs, Tab, Grid, Paper, TextField } from '@mui/material';
import {useSelector} from "react-redux"
import UserAvatar from '../components/UserAvatar';
import { DELETEAnnouncement, getGroup, POSTAnnouncement } from '../server';
import Loading from "../components/Loading"
import { MainContainer } from '../components/MainContainer';
import { DataGrid } from '@mui/x-data-grid';
import { isValidHttpUrl } from '../util/helpers';
import ImageNotFoundSVG from "../static/Astronaut-01.svg"
import DeleteIcon from '@mui/icons-material/Delete';

const ProductDashboard = () => {
  const profile = useSelector(currentState => currentState.profile)
  const {groupId} = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [groupInfo, setGroupInfo] = useState({})
  const [tabValue, setTabValue] = useState("announcement")
  
  const onSuccess = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    const getGroupInfo = async() => {
      const group = await getGroup(groupId)
      setGroupInfo(group)
      onSuccess()
    }
    getGroupInfo()
  },[])

  const renderUsers = () => {
    const users = groupInfo.user_id.filter(user => user._id["$oid"] !== groupInfo.Organizer._id["$oid"])
    return users.map(user => {
      return (
        <React.Fragment key={user._id["$oid"]}>
          <UserAvatar id={user._id["$oid"]} name={user.username}/>
        </React.Fragment>
      )
    })
  }

  const renderOwner = () => {
    const owner = groupInfo.user_id.filter(user => user._id["$oid"] === groupInfo.Organizer._id["$oid"])
    return owner.map(user => {
      return (
        <React.Fragment key={user._id["$oid"]}>
          <UserAvatar id={user._id["$oid"]} name={user.username}/>
        </React.Fragment>
      )
    })
  }
  
  const isOwner = () => {
    return profile.id === groupInfo.Organizer._id["$oid"]
  }

  const onTabChange = (e,tab) => {
    setTabValue(tab)
  }

  if(isLoading){
    return <Loading/>
  }

  return (
    <>
    <MainContainer>
      <Box sx={{display:"flex", padding:"20px 0px"}}>
        <Box sx={{flex:5}}>
          <Box>
            <RenderMainDashBoard
              product={groupInfo.Product}
              productItems={groupInfo.Product.items}
            />
          </Box>
          <Paper elevation={12}>
          <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs variant={"fullWidth"} value={tabValue} onChange={onTabChange} centered>
              <Tab label="Announcement" value={"announcement"} />
            </Tabs>
          </Box>
          <Box sx={{height:"400px"}}>
              <RenderAnnouncements 
                announcements={groupInfo.announcement}
                groupId={groupId}
                jwtToken={profile.jwtToken}
                isOwner={isOwner()}
              /> : 
          </Box>
        </Paper>
        </Box>
        <Paper elevation={12} sx={{flex:1, minWidth:"170px", padding:"10px", marginLeft:"15px"}}>
          <Typography>Owner</Typography>
          {renderOwner()}
          {
            renderUsers().length !==0 &&
          <Typography>Users</Typography>
          }
          {renderUsers()}
        </Paper>
      </Box>
    </MainContainer>
    </>
  )
};

const RenderMainDashBoard = ({product, productItems, ...props}) => {
  return (
    <Paper elevation={10} sx={{marginBottom:"20px"}}>
    <Grid container>
      <Grid sx={{width:"100%", padding:"10px", height:"400px"}} md={4} item>
        <RenderProductDashboard product={product}/>
      </Grid>
      <Grid sx={{width:"100%", padding:"10px", height:"400px"}} md={8} item>
        <RenderDatagrid
          productItems={productItems}
        />
      </Grid>
    </Grid>
    </Paper>
  )
}

const RenderProductDashboard = ({product,...props}) => {
  return (
    <Paper sx={{height:"100%"}}>
      <Box sx={{ width:"100%"}}>
        <img style={{
          width: "100%",
          height:"300px",
          objectFit: "cover",
          overflow: "hidden",
        }} src={`${isValidHttpUrl(product.imageURL)?product.imageURL:ImageNotFoundSVG}`}/>
      </Box>
      <Box sx={{padding:"10px"}}>
        <Typography>{product.title}</Typography>
        <Typography>{product.description}</Typography>
      </Box>
    </Paper>
  )
}

const RenderDatagrid = ({productItems, ...props}) => {
  return (
    <DataGrid
      sx={{
        '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus': {
          outline: 'none',
        },
      }}
      columns={[{ field: 'title', flex:1 }, { field: 'price' }, {field: 'quantity'}]}
      rows={productItems.map(productItem => ({id:productItem._id["$oid"],title:productItem.title, price:`$${productItem.price}`,quantity:productItem.quantity}))}
    />
  )
  
}

const RenderMessage = ({id, message, date, onDelete,...props}) => {
  return (
    <Paper elevation={3} sx={{padding:"15px", marginBottom:"10px"}}>
      <Typography>{message}</Typography>
      <Box sx={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
        <Typography variant="caption">{date? date:"No Date Provided"}</Typography>
        <PrimaryButton onClick={() => onDelete(id)}>
          <DeleteIcon/>
        </PrimaryButton>
      </Box>
    </Paper>
  )
}

const message = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."

const RenderAnnouncements = ({announcements, groupId, jwtToken,isOwner ,...props}) => {
  const [announcementList, setAnnouncementList] = useState([...announcements])
  const [announcement, setAnnouncement] = useState("")
  const [disable, setDisable] = useState(false)
  const [error, setError] = useState(false)

  const onInputChange = (e) => {
    if(!disable){
      setDisable(false)
    }
    setAnnouncement(e.target.value)
  }

  const onDelete = async(id) => {
    const newList = announcementList.filter(announcement => announcement._id["$oid"]!==id)
    try{
      const deleted = await DELETEAnnouncement(groupId, id, jwtToken)
      if(deleted){
        setAnnouncementList([...newList])
      }
    }catch(err){
      setError(true)
    }
  }

  const onSubmitAnnouncement = async () => {
    setDisable(true)
    try{
      const createdAnnouncement = await POSTAnnouncement(groupId, announcement, jwtToken)
      setAnnouncementList((stateList) => [...stateList, createdAnnouncement])
    }catch{
      setError(true)
    }
    setAnnouncement("")
    setDisable(false)
  }

  return (
    <Box sx={{height:"100%",display:"flex", flexDirection:"column"}}>
      <Box sx={{flex:1, overflow:"scroll", overflowX:"hidden", padding:"10px"}}>
        {announcementList.map(announcement => {
          return (
            <React.Fragment key={announcement._id["$oid"]}>
              <RenderMessage 
                id={announcement._id["$oid"]} 
                message={announcement.description}
                date={announcement.date}
                onDelete={onDelete}
              />
            </React.Fragment>
          )
        })}
      </Box>
      <Paper elevation={10} sx={{display:"flex", marginTop:"12px", padding:"10px"}}>
        <TextField disabled={!isOwner} value={announcement} onChange={e => onInputChange(e)} fullWidth label={isOwner?`Announcements`:"Only organizer may post announcements"}/>
        <PrimaryButton disabled={(!isOwner || disable)} onClick={onSubmitAnnouncement} sx={{width:"100px", marginLeft:"10px"}}>Send</PrimaryButton>
      </Paper>
    </Box>
  )
}


export default ProductDashboard;
