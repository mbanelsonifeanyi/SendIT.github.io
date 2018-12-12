import { Client } from 'pg';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;
const client = new Client();
const userControllerObject = {
  signUpControllerFunction: (request, response) => {
    const email = request.body.email;
    const password = request.body.password;
    bcrypt.hash('password', 10, (error, hashedPassword) => {
      console.log(hashedPassword);
      console.log(error);
    })
    .then(result => console.log(result))
    .catch(error => console.log(error));
    client.connect()
    .catch(error => console.log('On Connect', error))
    .then(() => {
      const sql = 'INSERT INTO senditresources (userid, username, email, cancelled) VALUES($1, $2, $3, $4)';
        // console.log('na me', request.body);
        const params = [5, password, email, true];
        return client.query(sql, params);
    })
    .catch(error =>{return console.log('After Connect?', error);})
    .then(result => {return console.log(result);})
    .catch(error =>{return console.log('from here?12345', error);});
  },
  signInControllerFunction: (request, response) => {
    const data = {email: 'mbanelsonifeanyi@gmail.com', username: 'min\'slinx' };
    const token = jwt.sign(data, JWT_PRIVATE_KEY, { expiresIn: '1h' });
    console.log(token);
  }
};
export default userControllerObject;
