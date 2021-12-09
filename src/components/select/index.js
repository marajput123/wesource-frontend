import React from 'react'
import {
    Divider,
    FilledInput,
    FormControl,
    Input,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Paper,
    Select,
    Slider, 
    TextField, 
    ToggleButton, 
    ToggleButtonGroup, 
    Typography 
} from '@mui/material'

export const PrimarySelect = ({onChange,...props}) => {
    return (
        <FormControl
            fullWidth 
            color="secondary"
            focused
        >
            <InputLabel sx={{color:"white"}}>Order Options</InputLabel>
            <Select
                placeholder="Sort Options"
                id="demo-simple-select-helper"
                label="Sort Options"
                color="secondary"
                sx={{
                    color:"white",
                    "& svg":{
                        color:"white",
                        fill:"white"
                    }
                }}
                value={props.value}
                inputProps={{MenuProps: {disableScrollLock: true}}}
                onChange={e => {onChange(e)}}
            >
                <MenuItem value={"title"}>Title</MenuItem>
                <MenuItem value={"date"}>Date</MenuItem>
                <MenuItem value={"organizer"}>Organizer</MenuItem>
            </Select>
        </FormControl>
    )
}