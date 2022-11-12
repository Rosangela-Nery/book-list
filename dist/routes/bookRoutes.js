import express from 'express';
import { validationBook } from '../middlewares/validation.js';
import { bookPost, bookGet } from '../controllers/bookControllers.js';
var router = express.Router();
router.post("/book", validationBook, bookPost);
router.get("/book", bookGet);
export default router;
