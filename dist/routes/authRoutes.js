import express from 'express';
import { validationSignIn, validationSignUp } from '../middlewares/validation.js';
import { signupPost } from '../controllers/signupControllers.js';
import { loginPost } from '../controllers/signinControllers.js';
var router = express.Router();
router.post("/signin", validationSignIn, loginPost);
router.post("/signup", validationSignUp, signupPost);
export default router;
