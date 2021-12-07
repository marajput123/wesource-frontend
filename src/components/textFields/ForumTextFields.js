import React, {useEffect, useRef, useState} from 'react';
import { Box, Paper, Popover, Popper, TextField, Typography } from "@mui/material"
import InfoIcon from '@mui/icons-material/InfoOutlined';
import { alphanumericValidation, emailValidation } from '../../util/validators';

const ForumTextField = (props) => {
    const {fullWidth, label, variant, helperText} = props

    const [touched, setTouched] = useState(false);
    const [errors, setErrors] = useState([])
    const [value, setValue] = useState(props.value || "")

    const runValidation = (value) => {
        const {minLength, maxLength, email, alphanumeric, required, capatalize} = props;
        let validations = []
        if(minLength && minLength > value.length && minLength > 0){
            validations.push(`Length must be greater than ${minLength}`)
        } if(maxLength && maxLength < value.length && maxLength){
            validations.push(`Length must be less than ${maxLength}`)
        } if(email && !emailValidation(value)){
            validations.push('Must be a valid email')
        } if(alphanumeric && !alphanumericValidation(value)){
            validations.push('Must be Alphanumeric')
        } if(required && value.length === 0){
            validations.push("The field is required")
        } if(!required && value.length === 0){
            validations = []
        }
        setErrors(validations) 
        if(props.validation){
            props.validation(validations.length === 0)
        }
    }

    const onTextFieldClick = () => {
        if(!touched){
            setTouched(true)
            runValidation(value)
        }
    }

    const onChange = (e) => {
        setValue(e.target.value)
        runValidation(e.target.value)
        props.onChange(e)
    }

    return (
        <Box sx={{
            paddingBottom:`${errors.length === 0? "15px":"14px"}`,
            width:"100%"
        }}>
            <TextField 
                sx={{
                    "&.MuiFormControl-root":{
                        m:"0px",
                        textTransform:"capitalize"
                    }
                }}
                value = {props.value}
                fullWidth={fullWidth}
                variant={variant}
                label={label}
                onBlur={() => {onTextFieldClick()}}
                onChange={(e) => {onChange(e)}}
                error={errors.length !== 0}
                helperText={errors.length !==0? null: helperText}
                required={props.required}
            />
            {errors.length !== 0? <ErrorHelperText errors={errors}/> : null}
        </Box>
    )
}

const ErrorHelperText = ({errors}) => {
    const [showError, setShowError] = useState(false)

    return (
        <Box sx={{display:"flex", alignItems:"center", position:"relative", color:"red", width:"fit-content"}}>
                <Typography>Invalid Validation</Typography>
                <InfoIcon 
                    fontSize="small"
                    sx={{marginLeft:"5px"}}
                    onMouseEnter = {() => setShowError(true)}
                    onMouseLeave = {() => setShowError(false)}
                />
                {
                    showError &&
                    <Box sx={{position:"absolute", top:30, zIndex:1, left:"90%", width:"175px"}}>
                        <Paper 
                            sx={{display:"flex", flexDirection:"column", padding:"10px 3px", borderRadius:"7px"}}
                            elevation={12}
                        >
                            <Typography 
                                sx={{
                                    color:"red",
                                    "&.MuiTypography-root":{
                                        padding:'2px'
                                    }
                                }}
                            >
                                Whoops
                            </Typography>
                            {errors.map((errorText, index) => (
                                <React.Fragment key={index}>
                                    <Typography 
                                        sx={{
                                            fontSize:14,
                                            color:"red",
                                            "&.MuiTypography-root":{
                                                padding:'2px'
                                            }
                                        }}
                                    >
                                        - {errorText}
                                    </Typography>
                                </React.Fragment>
                            ))}
                        </Paper>
                    </Box>
                }
            </Box>
    )
}

export default ForumTextField;