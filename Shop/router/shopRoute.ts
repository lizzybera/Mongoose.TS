import { Router, Request, Response } from "express"
import { collectItems, deleteItems, readItem, readItems, updateItems } from "../controller/shopController"

const router = Router()

router.route("/default").get((req:Request, res: Response)=>{
    try {
        res.status(200).json({message: "welcome to my shop"})
    } catch (error) {
        res.status(404).json({message: "error has occured",})
        console.log(error);
        
    }
})

router.get("/read", readItems)
router.get("/readOne/:itemID", readItem)
router.post("/addToCart", collectItems)
router.patch("/addToCart/:itemID", updateItems)
router.delete("/delete/:itemID", deleteItems)

export default router