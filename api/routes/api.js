import express  from 'express';
import Og from '../controllers/addToSendItResourcesRoute';
import Og1 from '../controllers/allParcelsRoute';
import Og2 from '../controllers/deleteSpecificSendItResourceByParcelIdRoute';
import Og3 from '../controllers/cancelSendItResourceRoute';
import getSpecificResourceWithParcelIdRoute from '../controllers/getSpecificResourceWithParcelIdRoute';
import validatorObject from '../controllers/postRouteValidatorHandler';
import upload from '../../middlewares/imageUpload';
import uploadImageFunction from '../controllers/imageUpload';
import NewObject from '../controllers/getSpecificResourceWithUserIdRoute';
// import checkAuthorization from '../../middlewares/checkAuthorization';

const router = express.Router();
/*  These are API routes. */
router.get('/parcels', Og1.allParcelsRoute);
router.get('/parcels/:parcelId', getSpecificResourceWithParcelIdRoute);
router.get('/users/:userId/parcels', validatorObject.getSpecificResourceRouteValidator(), NewObject.getSpecificResourceWithUserIdRoute);
router.delete('/parcels/:parcelId', Og2.deleteSpecificSendItResourceByParcelIdRoute);
router.post('/parcels', upload.single('productImage'), Og.addToSendItResourcesRoute);
router.post('/parcels/image', upload.single('productImage'), uploadImageFunction);
router.put('/parcels/:parcelId', validatorObject.updateRouteValidator(), Og3.cancelSendItResourceRoute);

export default router;
