import books from "../models/Book.js";

class BookController {
  static getBooks = (req, res) => {
    books
      .find()
      .populate("writer")
      .exec((err, books) => {
        res.status(200).json(books);
      });
  };

  static getBookById = (req, res) => {
    const id = req.params.id;
    books
    .findById(id)
    .populate('writer', 'name')
    .exec((err, books) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - could not find Id` });
      } else {
        res.status(200).send(books);
      }
    });
  };

  static inputBook = (req, res) => {
    let book = new books(req.body);
    book.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - failed to input book` });
      } else {
        res.status(201).send(book.toJSON());
      }
    });
  };

  static updateBook = (req, res) => {
    const id = req.params.id;
    books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Book updated successfully." });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteBook = (req, res) => {
    const id = req.params.id;
    books.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Book removed successfully." });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static getBooksByPublisher = (req, res) => {
    const publisher = req.query.publisher;
    books.find({'publisher': publisher}, {}, (err, books) => {
      res.status(200).send(books);
    })
  }
}

export default BookController;
