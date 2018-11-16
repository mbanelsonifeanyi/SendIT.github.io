import express from 'express'
import sendItResources from '../controller/sendItResources1'


//Instantiating
const router = express.Router()

router.get('/', (request, response) => {
	const data = sendItResources.getAllSendItResources(  ) 
	// console.log( data )
	response.send( data )
})

export default router