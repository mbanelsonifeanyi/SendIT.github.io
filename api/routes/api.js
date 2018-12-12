import express  from 'express';
import Og from '../controllers/addToSendItResourcesRoute';
import Og1 from '../controllers/allParcelsRoute';
import Og2 from '../controllers/deleteSpecificSendItResourceByParcelIdRoute';
import cancelSendItResourceRoute from '../controllers/cancelSendItResourceRoute';
import getSpecificResourceWithParcelIdRoute from '../controllers/getSpecificResourceWithParcelIdRoute';
import validatorObject from '../controllers/postRouteValidatorHandler';
import checkAuthorization from '../../middlewares/checkAuthorization';

const router = express.Router();
/*  These are API routes. */
router.get('/parcels', checkAuthorization, Og1.allParcelsRoute);
router.get('/parcels/:parcelId', getSpecificResourceWithParcelIdRoute);
router.get('/users/:userId/parcels', getSpecificResourceWithParcelIdRoute);
router.delete('/parcels/:parcelId', Og2.deleteSpecificSendItResourceByParcelIdRoute);
router.post('/parcels', validatorObject.postRouteValidatorHandler(), Og.addToSendItResourcesRoute);
router.put('/parcels/:parcelId', validatorObject.updateRouteValidator(), cancelSendItResourceRoute);

export default router;
