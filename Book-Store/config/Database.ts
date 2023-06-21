import mongoose from "mongoose";

const dbString = "mongodb://127.0.0.1:27017/bookStore";

// const DataBase = async () =>{
//     try {

//         const dbConnect = await mongoose.connect(dbString)

//         console.log(`server is on ${dbConnect.connection.host}`);

//     } catch (error) {
//         console.log("error has occured", error);

//     }
//

mongoose.connect(dbString);

const dataBase = mongoose.connection
  .once("open", () => {
    console.log(`database is connected ${mongoose.connection.host}`);
  })
  .on("error", (err) => {
    console.log("an error has occured", err);
  });

export default dataBase;
