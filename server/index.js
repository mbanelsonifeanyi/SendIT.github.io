//Importing Modules
const sendItResources = require('./sendItResources')
const express = require('express')

//Instantiate the web server
const app = express()

app.get( '/', ( request, response ) => {
	let sendItResourcesArray = sendItResources.sendItResourcesArray
	response.render('index.html', sendItResourcesArray[0].userName)
} ).listen( 3000, ( ) => console.log( 'listening on port 3000...' ))