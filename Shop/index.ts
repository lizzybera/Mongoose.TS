import express, { Application } from "express"
import dataBase from "./config/dataBase"
import appConfig2 from "./app"

const app : Application = express()
const port: number = 9785

const server = async ()=>{
    try {

        appConfig2(app)

        dataBase()
        
        app.listen(port, ()=>{
            console.log("");
            
            console.log("Server is running Sucessfully");
            
        })
    } catch (error) {
        console.log("error has occured", error);
        
    }
}

server()