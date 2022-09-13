import writers from "../models/Writer.js";

class WriterController {
  static getWriters = (req, res) => {
    writers.find((err, writers) => {
      res.status(200).json(writers);
    });
  };

  static getWriterById = (req, res) => {
    const id = req.params.id;
    writers.findById(id, (err, writers) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - could not find Id` });
      } else {
        res.status(200).send(writers);
      }
    });
  };

  static inputWriter = (req, res) => {
    let writer = new writers(req.body);
    writer.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - failed to input Writer` });
      } else {
        res.status(201).send(writer.toJSON());
      }
    });
  };

  static updateWriter = (req, res) => {
    const id = req.params.id;
    writers.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Writer updated successfully." });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteWriter = (req, res) => {
    const id = req.params.id;
    writers.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Writer removed successfully." });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default WriterController;
