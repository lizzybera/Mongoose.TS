import mongoose from "mongoose";

const dbString = "mongodb://localhost/shop"

const dataBase = async () =>{
    try {
        const connection = await mongoose.connect(dbString)

        console.log(connection.connection.host);

    } catch (error) {
        console.log("an error has occured", error);
        
    }
    
}

export default dataBase