import express from "express";
import BookController from "../controllers/bookController.js";

const router = express.Router();

router
  .get("/books", BookController.getBooks)
  .get("/books/search", BookController.getBooksByPublisher)
  .get("/books/:id", BookController.getBookById)
  .post("/books", BookController.inputBook)
  .put("/books/:id", BookController.updateBook)
  .delete("/books/:id", BookController.deleteBook);

export default router;
