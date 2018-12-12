import express from 'express';
import userControllerObject from '../controllers/userController';

const router = express.Router();

router.post('/signup',  userControllerObject.signUpControllerFunction);
router.post('/signin',  userControllerObject.signInControllerFunction);
export default router;
