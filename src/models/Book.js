import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  writer: { type: mongoose.Schema.Types.ObjectId, ref: 'writer', required: true },
  publisher: { type: String, required: true },
  pages: { type: Number },
});

const books = mongoose.model("books", bookSchema);

export default books;
