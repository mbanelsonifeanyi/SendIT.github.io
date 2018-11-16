import express from 'express'
import { check, validationResult } from 'express-validator/check';
import sendItResources from '../controller/sendItResources1'



//  Instantiating
const router = express.Router()


/*  These are API routes. */

router.get('/parcels', (request, response) => {
	response.status( 200 ).json(sendItResources.getAllSendItResources (  ))
})

router.get('/parcels/:parcelId', (request, response) => {
	const parcelId = parseInt(request.params.parcelId)
	const data = sendItResources.getSpecificSendItResourceByParcelId( parcelId ) 
	if(data.length === 0) {
		return response.status(404).json({
			success: false,
			error: 'Your Parcel is not found!'
		})
	}
	response.status( 200 ).json( data )
})
	
router.get('/users/:userId/parcels', (request, response) => {
	const userId = parseInt(request.params.userId)
	
	const data = sendItResources.getSpecificSendItResourceByUserId( userId ) 
	if(data.length === 0){
		return response.status(404).json({
			success: false,
			error: 'User has no parcels',
		})
	}
	return response.status( 200 ).json( data )
})

router.put('/parcels/:parcelId/cancel', (request, response) => {
	const parcelId = parseInt(request.params.parcelId)
	const result = sendItResources.getSpecificSendItResourceByParcelId(parcelId);
	const data = sendItResources.cancelSendItResource( parcelId);
	if (result.length === 0) {
		return response.status(404).json({
			success: false,
			error: 'No Parcels, You ccan create one',
		})
	}
 		return response.status( 200 ).json( data )
})	


router.post('/parcels', [
check('userName').isLength({min: 1}).withMessage('Username cannot be empty'),
check('userEmail').isLength({min:1}).withMessage('UserEmail cannot be blank'),
check('parcelName').isLength({min:1}).withMessage('Parcel name cannot be blank'),
], 




(request, response) => {
	const errors = validationResult(request);

	if(!errors.isEmpty()){
		return response.status(400).json({
			success: false,
			error: 'Some credential are blank',
			errors: errors.array(),
		})
	}
	const userName = request.body.userName;
	const userEmail = request.body.userEmail;
	const parcelName = request.body.parcelName;
	const data = sendItResources.addToSendItResources( userName, userEmail, parcelName ) 
return 	response.status( 201 ).json( data)
})


export default router