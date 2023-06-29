import {Request,Response} from "express"
import shopModel from "../model/shopModel"

export const readItems = async (req: Request, res: Response) =>{
    try {
        
        const items = await shopModel.find()

       res.status(200).json({
        message: " items",
        data : items
       })

    } catch (error) {
        res.status(500).json({
                message: "Items not Sucessfully gotten"
        })
    }
}

export const readItem = async (req: Request, res: Response) =>{
    try {
        
        const items = await shopModel.findById(req.params.itemID)

       res.status(200).json({
        message: " item",
        data : items
       })

    } catch (error) {
        res.status(500).json({
                message: "Items not Sucessfully gotten"
        })
    }
}

export const collectItems = async (req: Request, res: Response) =>{
    try {
        
        const {item, quantity, countryMade } = req.body

        const items = await shopModel.create({item, quantity, countryMade})

        res.status(201).json({
            message: "Items Sucessfully added to cart",
            data: items
    })

    } catch (error) {
        res.status(404).json({
            message: "Items not Sucessfully added to the cart"
    })
    }
}

export const updateItems = async (req: Request, res: Response) =>{
    try {

        const {quantity} = req.body
        const items = await shopModel.findByIdAndUpdate(req.params.itemID, {quantity}, {new: true})

        res.status(201).json({
            message: "Item Sucessfully updated",
            data: items
    })
        
    } catch (error) {
        res.status(404).json({
            message: "Item not Sucessfully updated"
    })
    }
}

export const deleteItems = async (req: Request, res: Response) =>{
    try {

        const item = await shopModel.findByIdAndDelete(req.params.itemID)

        res.status(200).json({
            item
        })
        
    } catch (error) {
        res.status(400).json({
            message: "error"
        })
    }
}
