import express from 'express';
import { validationStatus } from '../middlewares/validation.js';
import { statusBookPost, statusBookGet } from '../controllers/statusControllers.js';
var router = express.Router();
router.post("/status", validationStatus, statusBookPost);
router.get("/status", statusBookGet);
export default router;
