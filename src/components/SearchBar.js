import { ArrowDropDown, ArrowDropUp, Search } from '@mui/icons-material';
import { IconButton, InputBase, Paper } from '@mui/material';
import React, {useState} from 'react'
import { FilterButton } from './Buttons';

const SearchBar = () => {
    const [openFilter, setOpenFilter] = useState(false)
    const [searchInput, setSearchInput] = useState("")
    return (
        <>
            <Paper 
                sx={{
                    width:"500px",
                    borderRadius:"20px",
                    display:"flex",
                    alignItems:"center",
                    flex:2
                }}
                elevation={10}
        >
                <InputBase
                    sx={{
                    padding:"7px 15px",
                    flex:1,
                    }}
                    placeholder="Search..."
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                />
                <IconButton>
                    <Search color="primary"/>
                </IconButton>
                <FilterButton onClick={() => setOpenFilter(!openFilter)}>
                    Filter
                    {openFilter? <ArrowDropUp/>:<ArrowDropDown/>}
                </FilterButton>
            </Paper>
        </>
    )
}


export default SearchBar;