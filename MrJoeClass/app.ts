import express, { Application } from "express";
import router from "./route/router";


const appConfig = (app: Application) =>{
    app

    // MIDDLEWARES
    app.use(express.json())

    // routes
    .use('/api', router )
}

export default appConfig