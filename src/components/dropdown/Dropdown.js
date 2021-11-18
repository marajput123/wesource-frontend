import React from 'react'
import {ClickAwayListener, MenuList, Paper} from '@mui/material';
import "./dropdown.css"

const Dropdown = ({open, handleClose, children}) => {
    return (
        <>
        <Paper elevation={1} className={`custom-dropdown ${open? null:"custom-dropdown-invisible"}`}>
            <ClickAwayListener onClickAway={handleClose}>
            <MenuList>
                {children}
            </MenuList>
            </ClickAwayListener>
        </Paper>
        </>
    )
}

export default Dropdown
