import express from 'express'
import sendItResources from '../sendItResources1'


//  Instantiating
const router = express.Router()
const sir = new sendItResources


/*  These are API routes. */

router.get('/parcels', (request, response) => {
	response.send(sir.getAllSendItResources (  ))
})

router.get('/parcels/:parcelId', (request, response) => {
	const parcelId = parseInt(request.params.parcelId)
	const data = sir.getSpecificSendItResource( parcelId ) 
	response.send( data )
})
	
router.get('/users/:userId/parcels', (request, response) => {
	const userId = parseInt(request.params.userId)
	const data = sir.getSpecificSendItResource( userId ) 
	response.send( data )
})

router.put('/parcels/:userId/parcels/cancel', (request, response) => {
	const userId = parseInt(request.params.userId)
	const data = sir.cancelSendItResource( userId, cancelled ) 
	response.send( data )
})	


router.post('/parcels', (request, response) => {
	const data = sir.addToSendItResources( userName, userEmail, parcelName ) 
	response.send( data )
})


export default router