import express from 'express';
import bodyParser from 'body-parser';
// import { parseForESLint } from 'babel-eslint';

// import routes
import api from './routes/api';
import index from './routes/index';


const app = express();
// const { parseForESLint } = { parseForESLint: parseForESLint() };


app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.parseForESLint());
// app.use(bodyParser.json());
app.use('/', index);
app.use('/api', api);

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening On Port ${port}...`))

export default app
