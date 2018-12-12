import express from 'express';
import Og1 from '../controllers/allParcelsRoute';
// Instantiating
const router = express.Router();

router.get('/', Og1.allParcelsRoute);

export default router;
