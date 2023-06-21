import express, {Request, Response} from 'express'
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
            const userId = req.params

            const getBook = model.findById(userId)

            return res.status(200).json({
                message: "An error has occured",
                data: getBook
            })
            
        } catch (error) {
            return res.status(404).json({
                error: error,
                message: "An error has occured"
            })
        }
}

const updateBooks = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const { book_title,author_name,description,author_Image,email,views,isbn,cover_image} = req.body
        const userID = req.params.userId

        const deletes = await model.findByIdAndUpdate(userID,{book_title,author_name,description,author_Image,email,views,isbn,cover_image})

       return res.status(200).json({
            message: 'User Updated Sucessfully',
            data: deletes
        })
        
    } catch (error) {
        return res.status(404).json({
            message: 'User Not deleted', error
        })
    }
}

const deleteBooks = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const userID = req.params.userId

        const deletes = await model.findByIdAndDelete(userID)

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

export {getOneBook, getAllBooks, updateBooks, deleteBooks}