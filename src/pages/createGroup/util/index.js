export const formatBody = (title, description, quantity,imageURL, _productItems) => {
    let totalPrice = 0;
    _productItems.forEach(product => {
        totalPrice += parseFloat(product.price)
    })
    const productItems = _productItems.map(product => {
        return ({
            title:product.title,
            description:product.description,
            price: product.price,
            quantity: parseInt(product.quantity),
            imageURL: product.imageURL,
        })
    })
    return ({
        title,
        description,
        quantity:parseInt(quantity),
        price:totalPrice,
        items:productItems,
        imageURL:imageURL
    })
}
