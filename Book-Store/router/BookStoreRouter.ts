import express, {Router} from "express"
import { createBook, deleteBooks, getAllBooks, getOneBook, removeBook, updateBooks } from "../controller/bookStoreController"

const router: Router = Router()

// another router method
router.get("/getAllBooks", getAllBooks)

// another router methods
router.route("/createBook").post(createBook)
router.route("/getOneBook/:userId").get(getOneBook)
router.route("/updateBooks/:bookID").patch(updateBooks)
router.route("/deleteBooks/:bookID").delete(deleteBooks)
router.route("/removeBook/:bookId").delete(removeBook)

export default router