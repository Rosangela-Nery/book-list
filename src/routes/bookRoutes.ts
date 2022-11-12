import express from 'express';
import { validationBook } from '../middlewares/validation.js';
import { bookPost, bookGet, bookDelete, bookUpdate } from '../controllers/bookControllers.js';

const router = express.Router();

router.post("/book", validationBook, bookPost);
router.get("/book", bookGet);
router.delete("/book/:id", bookDelete);
router.put("/book/:id", bookUpdate);

export default router;