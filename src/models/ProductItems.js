import {v4 as uuidv4} from "uuid"

export default class ProductItem{
    constructor(title, description, price, quantity, imageUrl, tempId){
        this.title = title;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.imageUrl = imageUrl;
        this.tempId = tempId
    }
}