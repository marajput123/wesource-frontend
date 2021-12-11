import {  Container, Grid, Modal, Paper, TextField, Typography } from '@mui/material'
import { Box, margin, maxWidth, typography, width } from '@mui/system'
import React, {useState} from 'react'
import { PrimaryButton } from '../../components/Buttons'
import {MainContainer} from "../../components/MainContainer"
import ForumtextField from "../../components/textFields/ForumTextFields"

const ProductDetailForum = ({groupTitle, groupDescription, groupQuantity, groupImageURL,setValidationError,...props}) => {
    return (
        <>
            <Box sx={{paddingBottom:"20px"}}>
                <Typography color="#535252" variant={"h4"}>Group Details</Typography>
            </Box>
            <ForumtextField
                fullWidth
                value={groupTitle.value}
                onChange={(e) => groupTitle.setGroupTitle(e.target.value)}
                label="Product/Group Title"
                required
                validation = {setValidationError}
            />
            <ForumtextField
                fullWidth
                value={groupDescription.value}
                onChange={(e) => groupDescription.setGroupDescription(e.target.value)}
                label="Description"
                required
                validation = {setValidationError}
            />
            <ForumtextField
                fullWidth
                value={groupQuantity.value}
                onChange={(e) => groupQuantity.setGroupQuantity(e.target.value)}
                label="Quantity"
                required
                numericInteger
                validation = {setValidationError}
            />
            <ForumtextField
                fullWidth
                value={groupImageURL.value}
                onChange={(e) => groupImageURL.setGroupImageURL(e.target.value)}
                label="Image URL"
                required
                validation = {setValidationError}
            />
        </>
    )
}

export default ProductDetailForum