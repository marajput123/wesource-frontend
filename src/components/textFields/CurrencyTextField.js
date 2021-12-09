import React from 'react'
import {
    FilledInput,
    FormControl,
    InputAdornment,
    InputLabel,
    Typography 
} from '@mui/material'

export const CurrencyTextField = ({...props}) => {
    return (
        <FormControl color="secondary" focused fullWidth variant="filled" sx={{width:"50%", padding:"0 2px", ...props.sx}}>
            <InputLabel htmlFor="filled-adornment-amount">{props.label}</InputLabel>
            <FilledInput
                placeholder={props.placeholder}
                sx={{color:"white"}}
                id="filled-adornment-amount"
                startAdornment={<InputAdornment position="start"><Typography sx={{color:"white"}} >{props.currency}</Typography></InputAdornment>}
                value={props.value}
                onChange={e => props.onChange(e)}
                type="number"
            />
        </FormControl>
    )
}
