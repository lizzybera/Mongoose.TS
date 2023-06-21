import mongoose from "mongoose";

interface iBook {
  book_title: string;
  author_name: string;
  description: string;
  author_Image: string;
  email: string;
  views: string[];
  isbn: string;
  cover_image: string;
}

interface bookStore extends iBook, Document {}

const bookSchema = new mongoose.Schema<iBook>({
  book_title: String,
  author_name: String,
  description: String,
  author_Image: String,
  email: {
    type: String,
    unique: true
  },
  // email: String,
  views: [],
  isbn: String,
  cover_image: String,
});

const bookModel = mongoose.model<iBook>("BookStoreColection", bookSchema);

export default bookModel;
