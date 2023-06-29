import express, { Application, Request, Response } from "express";
import dbConfig from "./config/Database"
import book from "./router/BookStoreRouter"

const port: number = 9856;
const app: Application = express();

app.use("/book", book)

dbConfig()

app.use(express.json()).get("/", (req: Request, res: Response) => {
  try {
    res.status(200).json({
      message: "Data Fetched ",
    });
  } catch (error) {
    res.status(404).json({
      message: "Error in fetching data",
    });
  }
});

app.listen(port, () => {
  console.log("");

  console.log("server is running");
});

