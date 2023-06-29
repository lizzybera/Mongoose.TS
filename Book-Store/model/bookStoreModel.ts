import mongoose from "mongoose"

interface iBooks {
  title?: string;
  isBoring?: boolean;
  authorName?: string;
  details?: string;
  ISBN?: string;
  price?: string;
}

interface book extends iBooks, mongoose.Document{}

const bookSchema = new mongoose.Schema({
  title : {
    type : String,
    required: [true, "Please input ur name"],
    unique: true
  },
  isBoring : {
    type : String
  },
  authorName : {
    type : String
  },
  details : {
    type : String
  },
  ISBN : {
    type : String
  },
  price : {
    type : String
  },
}, {
  timestamps : true
})

const bookModel = mongoose.model("BookStore", bookSchema)

export default bookModel