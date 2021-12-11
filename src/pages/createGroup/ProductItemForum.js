import { IconButton, Modal, Paper ,Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, {useRef, useState} from 'react'
import { PrimaryButton } from '../../components/Buttons'
import ForumTextField from '../../components/textFields/ForumTextFields'
import ProductItems from "../../models/ProductItems"
import {v4 as uuidv4} from "uuid"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    minWidth:"360px",
    maxWidth:"425px",
    bgcolor: 'background.paper',
    padding:"15px 20px",
    borderRadius:"10px"
}

const ProductItemForum = ({onAddProductItem, productItemList,...props}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const renderProductItems = () => {
        if(productItemList.length === 0){
            return <Typography color="#535252">No Products</Typography>
        }
        return(
            productItemList.map(productItem => (
                <React.Fragment key={productItem.tempId}>
                    <ProductListItem
                        onDeleteProductItem={props.onDeleteProductItem}
                        productListItem={productItem}
                    />
                </React.Fragment>
            ))
        )
    }

    return (
        <Box sx={{paddingBottom:"10px"}}>
            <Box sx={{paddingBottom:"10px"}}>
                <Typography color="#535252" variant={"h6"}>Product Items</Typography>
            </Box>
            <Box sx={{display:"flex", flexDirection:"column", paddingBottom:"10px"}}>
                {renderProductItems()}
            </Box>
            <PrimaryButton onClick={() => setIsModalOpen(true)} fullWidth>Add Product</PrimaryButton>
            {
                isModalOpen &&
                <ProductItemModal
                    isModalOpen={isModalOpen}
                    handleChange={setIsModalOpen}
                    onAddProductItem={onAddProductItem}
                />
            }
            
        </Box>
    )
}

const ProductItemModal = ({isModalOpen, handleChange, onAddProductItem,...props}) => {
    const isValid = useRef(false)
    const [productTitle, setProductTitle] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [productQuantity, setProductQuantity] = useState("")
    const [productImageUrl, setProductImageUrl] = useState("")

    const onSave = () => {
        const ProductItem = new ProductItems(
            productTitle,
            productDescription,
            productPrice,
            productQuantity,
            productImageUrl,
            uuidv4()
        )
        onAddProductItem(ProductItem)
        handleChange(false)
    }

    const setValidationError = (hasError) => {
        if(hasError !== isValid.current){
            isValid.current = hasError
        }
    }

    const computeValidation = () => {
        return (
            productTitle !== "" &&
            productDescription !== "" &&
            productPrice !== "" &&
            productQuantity !== "" &&
            productImageUrl !== ""
        )
    }

    return (
        <Modal
            open={isModalOpen}
            onClose={() => handleChange(false)}
        >
            <Paper sx={style}>
                <Typography variant="h6">Product Item Details</Typography>
                <Box sx={{ display:"flex", flexDirection:"column", padding:"15px 0px", "& .MuiBox-root":{paddingBottom:"10px"}}}>
                    <ForumTextField
                        fullWidth
                        label="Title"
                        value={productTitle}
                        onChange={(e) => setProductTitle(e.target.value)}
                        required
                        validation={setValidationError}
                    />
                    <ForumTextField
                        fullWidth
                        label="Description"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        required
                        validation={setValidationError}
                    />
                    <ForumTextField
                        fullWidth
                        label="Price"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        required
                        numeric
                        validation={setValidationError}
                    />
                    <ForumTextField
                        fullWidth
                        label="Quantity"
                        value={productQuantity}
                        onChange={(e) => setProductQuantity(e.target.value)}
                        required
                        numericInteger
                        validation={setValidationError}
                    />
                    <ForumTextField
                        fullWidth
                        label="Image Url"
                        value={productImageUrl}
                        onChange={(e) => setProductImageUrl(e.target.value)}
                        required
                        validation={setValidationError}
                    />
                    <PrimaryButton disabled={computeValidation() === false} onClick={onSave}>Save</PrimaryButton>
                </Box>
            </Paper>
        </Modal>
    )
}

const ProductListItem = ({productListItem, ...props}) => {
    const onProductItemDelete = () => {
        props.onDeleteProductItem(productListItem.tempId)
    }
    return (
        <Box sx={{padding:"0 10px",height:"50px", width:"100%",marginBottom:"10px", backgroundColor:"#efefef",
        display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <Typography>{productListItem.title}</Typography>
            <Box >
                <PrimaryButton onClick={onProductItemDelete}>
                    <DeleteIcon/>
                </PrimaryButton>
            </Box>
        </Box>
    )
}

export default ProductItemForum