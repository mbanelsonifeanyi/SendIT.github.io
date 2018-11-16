import express from 'express'
import sendItResources from './controller/sendItResources1'
import bodyParser from 'body-parser'

const app = express()

// import routes
import index from './routes/index'
import api from './routes/api'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false} ) )
app.use('/', index)
app.use('/api', api)

const port = process.env.PORT  || 3000
 
app.listen( port, ( ) => console.log( `Listening On Port ${port}...` ) )

export default app