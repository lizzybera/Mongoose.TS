import {Request, Response} from 'express'
import model from "../model/bookStoreModel"


const getAllBooks = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const allbooks = await model.find()

        if(allbooks.length > 0){
            return res.status(200).json({
                message: "Sucessfully gotten all Books",
                data: allbooks
            })
        }else{
            return res.status(200).json({
                message: "No books found"
            })
        }

        

    } catch (error) {
        return res.status(404).json({
            error: error,
            message: "An error has occured"
        })
    }
}

const getOneBook = async (req:Request, res:Response): Promise<Response> =>{
        try {
            const userId = req.params.bookId

            const getBook = await model.findById(userId)

            return res.status(200).json({
                message: "An error has occured",
                data: getBook
            })
            
        } catch (error: any) {
            return res.status(404).json({
                error: error.message,
                message: "An error has occured",
            })
        }
}

const updateBooks = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const { title, price} = req.body

        const bookID = req.params.bookID

        const update = await model.findByIdAndUpdate(bookID,{title, price}, {new: true})

       return res.status(200).json({
            message: 'book Updated Sucessfully',
            data: update
        })
        
    } catch (error) {
        return res.status(404).json({
            message: 'book Not deleted', error
        })
    }
}

const deleteBooks = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const bookID = req.params.bookID

        const deletes = await model.findByIdAndDelete(bookID)

       return res.status(200).json({
            message: 'Users deleted Sucessfully',
            data: deletes
        })
        
    } catch (error) {
        return res.status(404).json({
            message: 'User Not deleted', error
        })
    }
}

const createBook = async (req: Request, res: Response): Promise<Response> =>{
    try {

        // const getAuthorIndex = await authorName.charAt(0).toUpperCase()

        const {title,isBoring,authorName,details,ISBN,price } = req.body

        const create = await model.create({title,isBoring,authorName,details,ISBN,price})

        console.log(create);
        

        return res.status(201).json({
            message: 'Book Created',
            data: create
        })
    } catch (error:any) {
        return res.status(404).json({
            message: 'Book Not created', error,
            data : error.message
        })
    }
}

const removeBook = async (req: Request, res: Response): Promise<Response> =>{
    try {
        
        const remove = await model.findByIdAndRemove(req.params.bookId)

        return res.status(200).json({
            message: 'Book Sucessfully removed',
            date: remove
        })

    } catch (error) {
        return res.status(404).json({
            message: 'Book Not created', error
        })
    }
}


export {getOneBook, getAllBooks, updateBooks, deleteBooks, createBook, removeBook}