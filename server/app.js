import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import allowCrossOriginAccess from '../allowCrossOriginAccess';
import api from '../api/routes/api';
import index from '../api/routes/index';
import user from '../api/routes/user';
import errorHandlerObject from '../middlewares/errorHandler';


const app = express();
const port = process.env.PORT;


app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1', api);
app.use('/api/v1', user);
app.use('/', index);
app.use(allowCrossOriginAccess);
app.use(errorHandlerObject.allErrorsHandlerFunction);
app.use(errorHandlerObject.allErrorsHandlerMessageFunction);


app.listen(port, () => console.log(`Listening On Port ${port}...`));
export default app;
