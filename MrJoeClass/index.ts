import express, { Application } from "express"
import appConfig from "./app";
import dbConfig from "./config/DataBase";

const app: Application = express();
const port : number = 3001;

const server = async() => {

    try {
        appConfig(app); //initializing app

        dbConfig(); //initialize db

        app.listen(port, () => {console.log("");
        console.log("listening");})

    } catch (error) {
        console.log(error);
        
    }

    }

    // Server initialization
    server()









// IIFE immediately invoked function expression

// Check types of function 

// const app: Application = express();

// Annonymous function - doesnt have a name

// ((async)=>{
//     app.listen(3001, ()=>{console.log("listening");})

// })()