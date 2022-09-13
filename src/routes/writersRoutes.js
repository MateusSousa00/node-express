import express from "express";
import WriterController from "../controllers/writerController.js";

const router = express.Router();

router
  .get("/writers", WriterController.getWriters)
  .get('/writers/:id', WriterController.getWriterById)
  .post("/writers", WriterController.inputWriter)
  .put('/writers/:id', WriterController.updateWriter)
  .delete('/writers/:id', WriterController.deleteWriter)

export default router;
