import React from 'react'
import {
    Divider,
    IconButton,
    InputAdornment,
    Paper,
    TextField,
    Typography 
} from '@mui/material'
import {DatePicker, LocalizationProvider} from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterLuxon'
import { Box } from '@mui/system'
import { CurrencyTextField } from '../textFields/CurrencyTextField'
import {ArrowUpward, ArrowDownward, Remove as ArrowMiddle} from '@mui/icons-material';
import { PrimarySelect } from '../select'
import { PrimaryButton } from '../Buttons'
import "./style.css"
import SecondaryTextField from '../textFields/DateTextField'


const Filter = ({onFilterChange, filterState,...props}) => {
    const onMinPriceChange = (e) => {
        const {value}= e.target;
        onFilterChange("onMinPriceChange",value)
    }
    const onMaxPriceChange = (e) => {
        const {value} = e.target;
        onFilterChange("onMaxPriceChange", value)
    }
    const onDateChange = (e) => {
        // const DateTime = luxon.DateTime;
        // const dt = DateTime.fromObject(e)
        onFilterChange("dateChange", e)
    }
    const onSortSelect = (e) => {
        const {value} = e.target
        onFilterChange("onSortSelect", value)
    }
    const onSortClick = (e) => {
        onFilterChange(e)
    }
    const onReset = (e) => {
        onFilterChange("reset")
    }
    return (
        <Paper
            className="filter-root-paper"
            elevation={22}
        >
            <Box 
                className="filter-container"
            >
                <Box>
                    <FilterTypography>
                        Price Range:
                    </FilterTypography>
                    <Box>
                        <CurrencyTextField value={filterState.minimumValue} onChange={e => onMinPriceChange(e)} label="Min" currency="$" placeholder="Min"/>
                        <CurrencyTextField value={filterState.maximumValue} onChange={e => onMaxPriceChange(e)} label="Max" currency="$" placeholder="Max"/>
                    </Box>
                    <Box sx={{marginTop:"10px"}}>
                        <DateFilter
                            onDateChange={e => onDateChange(e)}
                            filterDateState={filterState.date}
                        />
                    </Box>
                    <Box sx={{
                        display:"flex",
                        justifyContent:"center"
                    }}>
                        <Divider sx={{marginTop:"6px", borderColor:"#747474",width:"50%"}}/>
                    </Box>
                </Box>
                {/* <Box className="display-row">
                    <PrimarySelect value={filterState.sortingType} onChange={e => onSortSelect(e)}/>
                    <SortOrderButtonGroup filterState={filterState} onClick={e => onSortClick(e)}/>
                </Box> */}
                <PrimaryButton onClick={e => {onReset()}} fullWidth sx={{marginTop:"10px"}}>Reset</PrimaryButton>
            </Box>
        </Paper>
    )
}


const FilterTypography = (props) => {
    return (
        <Typography sx={{color:"white"}}>
            {props.children}
        </Typography>
    )
}

const SortOrderButtonGroup = ({onClick, ...props}) => {
    const {isDescending, isAscending} = props.filterState
    if(isAscending){
        return (
            <IconButton sx={{marginLeft:"5px"}} onClick={e => {onClick("isNeither")}}>
                <ArrowUpward sx={{color:"white"}}/>
            </IconButton>
        )
    }if(isDescending){
        return (
            <IconButton sx={{marginLeft:"5px"}} onClick={e => {onClick("isAscending")}}>
                <ArrowDownward sx={{color:"white"}}/>
            </IconButton>
        )
    }else{
        return (
            <IconButton sx={{marginLeft:"5px"}} onClick={e => {onClick("isDescending")}}>
                <ArrowMiddle sx={{color:"white"}}/>
            </IconButton>
        )
    }
}

export const DateFilter = ({onDateChange, filterDateState, ...props}) => {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Choose a date"
                    value={filterDateState}
                    onChange={(newValue) => {
                        onDateChange(newValue)
                    }}
                    renderInput={(params) => (
                        <SecondaryTextField
                            helperText="Filter before this date"
                            color="secondary"
                            {...params}
                        />
                    )}
                />
            </LocalizationProvider>
        </>
    )
}

export default Filter
