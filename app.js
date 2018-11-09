import express from 'express'
import sendItResources from './sendItResources1'


// import routes
import index from './routes/index'
import api from './routes/api'

//Instantiating 
const app = express()
const sir = new sendItResources
const router = express.Router()

// set routes
app.use('/', index)
app.use('/api', api)

const port = process.env.PORT  || 3000
 
app.listen( port, ( ) => console.log( 'Listening On Port ${port}...' ) )

