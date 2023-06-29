import { Request, Response } from "express";
import userModel, { iUsers } from "../model/User";

const createUsers = async (req:Request<{}, {}, iUsers>, res: Response) =>{
    try {
        const {name, age, gender, email, hobbies} = req.body
        const newStudent = await userModel.create({
            name, age, gender, email, hobbies
        })

        // Second create method
        // const newStudent2 = new userModel({
        //     name, age, gender, email, hobbies
        // })
        // await newStudent2.save()

        res.status(201).json({
            mesage: "created Sucessfully",
            data: newStudent
            
        })
        
    } catch (error) {
        res.status(500).json({
            mesage: " weldone o, error master", error,
        })
        console.log(error);
        
    }
}

const getStudent = async (req:Request, res: Response) =>{

    // indexing - 
    try {
        const student = await userModel.find()
        res.status(200).json({
            message: "users gotten sucessfully",
            data: student
        })
    } catch (error) {
        res.status(500).json({
            message: "users not gotten", error,
        })
    }
}

const getOneStudent = async (req: Request, res: Response) =>{
    try {

        const student = await userModel.findById(req.params.studentID)

        if(!student){
            return res.status(400).json({message: "user not found"})
        }else{
            return res.status(200).json({ student })

        }

    } catch (error) {
        res.status(500).json({
            message: "users not gotten", error,
        })
    }
}

const updateStudent = async (req: Request, res: Response) =>{
    try {
        const {name, age} = req.body
        const student = await userModel.findByIdAndUpdate(req.params.studentID, {name, age}, {new: true})

        if(!student){
            return res.status(400).json({message: "user not found"})
        }else{
            return res.status(200).json({ student })

        }

    } catch (error) {
        res.status(500).json({
            message: "users not gotten", error,
        })
    }
}

const deleteStudent = async (req: Request, res: Response)=>{
    try {

        const student = await userModel.findByIdAndDelete(req.params.studentID)

        if(!student){
            return res.status(400).json({message: "user not found"})
        }else{
            return res.status(200).json({ student })

        }
        
    } catch (error) {
        res.status(500).json({
            message: "users not gotten", error,
        })
    }
}

export {createUsers, getStudent, getOneStudent, updateStudent, deleteStudent}

// Assignment get all status code 100 - 5, 200 -5, 300 -5, 400 -10, 500 - 5

// Andela page
// react-slick
// for hero do... background - Attachment: fixed