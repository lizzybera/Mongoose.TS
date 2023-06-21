import express, {Router} from "express"
import { deleteBooks, getAllBooks, getOneBook, updateBooks } from "../controller/bookStoreController"

const router: Router = Router()

router.route("getAllbook").get(getAllBooks)
router.route("getOneBook").get(getOneBook)
router.route("updateBooks").get(updateBooks)
router.route("deleteBooks").get(deleteBooks)

export default router