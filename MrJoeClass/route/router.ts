import { Router,Request, Response} from "express";
import { createUsers, deleteStudent, getOneStudent, getStudent, updateStudent } from "../controller/userController";

const router = Router()

// default route for testing
router.route("/home").get((req: Request, res:Response)=>{
    try {
        res.status(200).json({message: "welcome Server "})
        
    } catch (error) {
        
    }
})

// to create gotten from controller
router.post('/create', createUsers)
router.get('/get', getStudent)
router.get("/getOne/:studentID", getOneStudent)
router.patch("/update/:studentID", updateStudent)
router.delete("/delete/:studentID", deleteStudent)

export default router