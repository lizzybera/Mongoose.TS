import express, { Application } from "express"
import router from "./router/shopRoute"


const appConfig2 = (app: Application)=>{
    app

    app.use(express.json())

    .use("/api", router)
}

export default appConfig2