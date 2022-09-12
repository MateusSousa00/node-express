import express from "express";

const app = express();

app.use(express.json());

const books = [
  { id: 1, title: "Lord of Rings" },
  { id: 2, title: "The Hobbit" },
];

app.get("/", (req, res) => {
  res.status(200).send("Node Course");
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
    let index = searchBook(req.params.id);
    res.json(books[index]);
});

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("Book registered successfully.");
});

app.put("/books/:id", (req, res) => {
    let index = searchBook(req.params.id);
    books[index].title = req.body.title;
    res.json(books);
});

app.delete("/books/:id", (req, res) => {
    let {id} = req.params;
    let index = searchBook(id);
    books.splice(index,1);
    res.send(`Book ${id} deleted successfully`);
});

function searchBook(id) {
    return books.findIndex(book => book.id == id);
}

export default app;
