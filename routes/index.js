import express from 'express'
import sendItResources from '../sendItResources1'


//Instantiating
const router = express.Router()
const sir = new sendItResources

router.get('/', (request, response) => {
	const data = sir.getAllSendItResources(  ) 
	// console.log( data )
	response.send( data )
})

export default router