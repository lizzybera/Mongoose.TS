import mongoose from "mongoose";

const url = "mongodb://0.0.0.0:27017/MrJoeClass"

// function declaration
async function dbConfig() {

    try {
        
        const container = await mongoose.connect(url)
        console.log(`db connected on ${container.connection.host}`);
        

    } catch (error) {
        console.log("this is an error", error);
    }
    
}

export default dbConfig;