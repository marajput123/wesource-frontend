import React, {useState, useRef} from 'react'
import { ArrowDropDown, ArrowDropUp, Search } from '@mui/icons-material';
import { IconButton, InputBase, Paper } from '@mui/material';
import { FilterButton } from '../Buttons';
import {getAllProducts} from "../../server"
import Filter from "./Filter"
import { formatFilter} from '../../util/helpers';
import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux'
import {searchQueryAction} from "../../store/actions/actionCreators"

const INITIALFILTERSTATE = {
    minimumValue:"",
    maximumValue:"",
    sortingType:"",
    isAscending:false,
    isDescending:false,
    date:null
}

const SearchBar = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [openFilter, setOpenFilter] = useState(false)
    const [searchInput, setSearchInput] = useState("")
    const [filters, setFilters] = useState(INITIALFILTERSTATE)

    const onFilterChange = (type, value=null) => {
        switch(type){
            case "onMinPriceChange":
                if(!isNaN(value)){
                    return setFilters(currentState => {
                        return {...currentState, ["minimumValue"]:value}
                    })
                }
                break;
            case "onMaxPriceChange":
                if(!isNaN(value)){
                    return setFilters(currentState => {
                        return {...currentState, ["maximumValue"]:value}
                    })
                }
                break;
            case "onSortSelect":
                return setFilters(currentState => {
                    return {...currentState, ["sortingType"]:value}
                })
            case "isDescending":
            case "isAscending":
            case "isNeither":
                return setFilters( currentState => {
                    return {
                        ...currentState,
                        isAscending: type === "isAscending"? true:false,
                        isDescending: type === "isDescending"? true:false,
                    }
                })
            case "dateChange":
                return setFilters(currentState => ({
                    ...currentState,
                    date:value !== ""? value:null
                }))
            case "reset":
                return setFilters(INITIALFILTERSTATE)
            default:
                return;
        }
    }

    const onSearch = async () => {
        const query = formatFilter(filters, searchInput)
        dispatch(searchQueryAction(query))
        history.push("/search-products")
    }
    return (
        <>
            <Paper 
                sx={{
                    width:"500px",
                    borderRadius:"20px",
                    display:"flex",
                    alignItems:"center",
                    flex:2,
                    position:"relative"
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
                <IconButton onClick={onSearch}>
                    <Search color="primary"/>
                </IconButton>
                <FilterButton onClick={() => setOpenFilter(!openFilter)}>
                    Filter
                    {openFilter? <ArrowDropUp/>:<ArrowDropDown/>}
                </FilterButton>
                {
                    openFilter
                    &&
                    <Filter
                        filterState={filters}
                        onFilterChange={onFilterChange}
                    />
                }
            </Paper>
        </>
    )
}


export default SearchBar;