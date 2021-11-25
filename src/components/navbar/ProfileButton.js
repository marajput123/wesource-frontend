import React, {useEffect, useRef, useState} from 'react';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router';
import { useDispatch} from 'react-redux';
import Dropdown from "../dropdown/Dropdown"
import { Avatar, MenuItem, Divider, Typography, ListItemText, ListItemIcon } from '@mui/material';
import { LogoutRounded, PersonRounded } from '@mui/icons-material';
import { signOutAction } from '../../store/actions/actionCreators';
import { wesourceBackend } from '../../apis';

const MenuListItemData = [
    {
      title:"My Profile",
      img: <PersonRounded color="primary"/>,
      path:"/profile"
    },
  ]

const ProfileButton = ({firstName, lastName, email, id}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false)
    const initials = `${(firstName.charAt(0)).toUpperCase()}${(lastName.charAt(0)).toUpperCase()}`
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
      setOpen(false)
    }
  
    const handleOpen = () => {
      setOpen(!open)
    }
  
    const onLogout = () => {
        dispatch(signOutAction())
        history.push("/login")
    }
    
    const goToPath = (path) => {
        setOpen(false)
        history.push(path);
    }

    return (
        <>
        <div ref={anchorRef} onClick={handleOpen} className="navbar-user-avatar">
          <Avatar  sx={{bgcolor: "primary.main", height:"46px", width:"46px"}} alt={firstName}>{initials}</Avatar>
        </div>
        <Dropdown open={open} handleClose={handleClose} handleOpen={handleOpen}>
          <Box className="navbar-dropdown-info-container">
              <Avatar sx={{marginRight:"7px", bgcolor:"white"}}>
                <PersonRounded color="primary" fontSize="large"/>
              </Avatar>
              <Box className="navbar-dropdown-info">
                  <Typography >{firstName} {lastName}</Typography>
                  <Typography variant="caption">{email}</Typography>
              </Box>
            </Box>
            <Divider/>
            {MenuListItemData.map((item) => {
              return (
                  <MenuItem key={item} onClick={() => goToPath(item.path)}>
                    <ListItemIcon>
                        {item.img}
                    </ListItemIcon>
                    <ListItemText>{item.title}</ListItemText>
                  </MenuItem>
              )
            })}
            <MenuItem onClick={onLogout}>
              <ListItemIcon>
                <LogoutRounded color="primary"/>
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </MenuItem>
        </Dropdown>
      </>
    )
  }

export default ProfileButton