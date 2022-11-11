import express from 'express';
import { validationGenre } from '../middlewares/validation.js';
import { genreBookPost, genreBookGet } from '../controllers/genreControllers.js';

const router = express.Router();

router.post("/genre", validationGenre, genreBookPost);
router.get("/genre", genreBookGet);

export default router;