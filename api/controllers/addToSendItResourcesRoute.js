// import { validationResult } from 'express-validator/check';
// import sendItResources from './sendItResources1';

// const Og = {
//   addToSendItResourcesRoute: (request, response) => {
//     const validationResultObject = validationResult(request);
//     if (validationResultObject.isEmpty()) {
//       const { userName, userEmail, parcelName } = request.body;
//       const data = sendItResources.addToSendItResources(userName, userEmail, parcelName);
//       return response.status(201).json({
//         status: 201,
//         message: 'Parcel was successfully added',
//         data: data
//       });
//     }
//     response.status(400).json({
//     success: false,
//     error: 'Some credentials are missing',
//     errors: validationResultObject.array()
//   });
//   }
// };
// export default Og;
import { validationResult } from 'express-validator/check';
import { Client } from 'pg';

const client  = new Client();
const Og = {
  addToSendItResourcesRoute: (request, response) => {
    const validationResultObject = validationResult(request);
    console.log(validationResultObject.isEmpty());
      client.connect()
      .catch(error => {
        return console.log(error);
      })
      .then(() => {
        const userEmail = request.body.userEmail;
        const userName = request.body.userName;
        const productimage = `http://localhost:3000/uploads/${ request.file.originalname }`;
        const sql = 'INSERT INTO senditresources (userid, username, email, cancelled, productimage)  VALUES($1, $2, $3, $4, $5)';
        const params = [1, userName, userEmail, true, productimage];
        return client.query(sql, params);
      }).catch(error => {
        console.log(error);
        return response.status(500).json('Oops something went wrong');
      }).then(() => {
        return response.status(201).json('The parcel was successfully created');
      }).catch(error => {
        return console.log(error);
      });
    // return response.status(400).json({
    //   status: 400,
    //   error: validationResultObject.array()
    // });
  }
};
export default Og;
