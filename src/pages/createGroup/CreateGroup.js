import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, {useRef, useState} from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { PrimaryButton } from '../../components/Buttons'
import {MainContainer} from "../../components/MainContainer"
import { postProduct } from '../../server'
import { numericValidation } from '../../util/validators'
import ProductDetailForum from './ProductDetailForum'
import ProductItemForum from './ProductItemForum'
import { formatBody } from './util'

const CreateGroup = () => {
    const profile = useSelector(currentState => {
        return currentState.profile
    })
    let isValid = useRef(false)
    const [groupTitle, setGroupTitle] = useState("")
    const [groupDescription, setGroupDescription] = useState("")
    const [groupQuantity, setGroupQuantity] = useState("")
    const [groupImageURL, setGroupImageURL] = useState("")
    const [productItems, setProductItems] = useState([])
    const [isSaving, setIsSaving] = useState(false)
    const [postResult, setPostResult] = useState(null)

    const setValidationError = (error) => {
        if(isValid.current != error){
            isValid.current = error
        }
    }

    const computeIsValid = () => {
        return (
            isValid &&
            groupTitle !== "" &&
            groupDescription !== "" &&
            groupQuantity !== "" &&
            numericValidation(groupQuantity) &&
            productItems.length !== 0
            )
    }

    const onAddProductItem = (productItem) => {
        setProductItems((productItems) => [...productItems, productItem])
    }

    const onDeleteProductItem = (productTempId) => {
        const filtereProductItems = productItems.filter(productItem => productItem.tempId !== productTempId)
        setProductItems([...filtereProductItems])
    }

    
    const onClickSave = async () => {
        const onError = () => {
            setPostResult({
                message:"The product could not be saved",
                error:true
            })
        }
        const onSuccess = () => {
            setPostResult({
                message:"The product is saved!",
                error:false
            })
        }
        setIsSaving(true)
        const product = formatBody(
            groupTitle,
            groupDescription,
            groupQuantity,
            groupImageURL,
            productItems
        )
        await postProduct(product, profile.jwtToken, onSuccess, onError)
        setIsSaving(false)
    }

    return (
        <>
            <MainContainer>
                <Box 
                    sx={{display:"flex", justifyContent:"center", margin:"20px 0px"}}
                >
                    <Box 
                        sx={{ width:"75%", minWidth:"360px"}}
                    >
                        {
                            postResult !== null &&
                            <PostResultBox postResult={postResult} />
                        }
                        
                        <ProductDetailForum
                            groupTitle={{value:groupTitle, setGroupTitle:setGroupTitle}}
                            groupDescription={{value:groupDescription, setGroupDescription:setGroupDescription}}
                            groupQuantity={{value:groupQuantity, setGroupQuantity:setGroupQuantity}}
                            groupImageURL={{value:groupImageURL, setGroupImageURL:setGroupImageURL}}
                            setValidationError={setValidationError}
                        />
                        <ProductItemForum
                            onAddProductItem={onAddProductItem}
                            productItemList = {productItems}
                            onDeleteProductItem = {onDeleteProductItem}
                        />
                        <PrimaryButton
                            disabled={computeIsValid() === false || isSaving === true}
                            fullWidth
                            onClick={onClickSave}
                        >
                            Save
                        </PrimaryButton>
                    </Box>
                </Box>

            </MainContainer>
        </>
    )
}

const PostResultBox = ({postResult, ...props}) => {
    const history = useHistory()
    const goToProductPage = () => {
        history.push("/search-products")
    }
    return (
        <Box sx={{width:"100%", backgroundColor:`${postResult.error === false? "#81c784":"#f44336"}`, padding:"10px", marginBottom:"10px"}}>
            <Typography onClick={goToProductPage} sx={{fontWeight:400, cursor:"pointer"}} variant="h6">{postResult.message} {!postResult.error? "Go to Products":null}</Typography>
        </Box>
    )
}

export default CreateGroup
