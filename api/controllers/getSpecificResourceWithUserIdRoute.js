// import sendItResources from './sendItResources1';
// const getSpecificResourceWithUserIdRoute = (request, response) => {
//   const userId = parseInt(request.params.userId, 10);
//   const data = sendItResources.getSpecificSendItResourceByUserId(userId);
//   if (data) {
//     return response.status(404).json({
//       success: false,
//       status: 200,
//       error: 'User has no parcels',
//     });
//   }
//   return response.status(200).json(data);
// };
// export default getSpecificResourceWithUserIdRoute;

import { validationResult } from 'express-validator/check';
import { Client } from 'pg';

const client = new Client();
const NewObject = {
  getSpecificResourceWithUserIdRoute: (request, response) => {
    const validationResultObject = validationResult(request);
    console.log(validationResultObject);
    const userId = parseInt(request.params.userId, 10);
      client.connect()
      .catch(error => {
        console.log(`${error}`);
        return response.status(500).json({
          status: 500,
          message: 'The server is down at the moment, try again later!'
        });
      })
      .then(() => {
        const sql = 'SELECT * FROM senditresources WHERE userid=$1';
        const param = [userId];
        return client.query(sql, param);
      })
      .catch(error => {
        console.log(`${ error }`);
        return response.status(500).json({
          status: 500,
          message: 'The server had an issue, try again later'
        });
      })
      .then(result => {
        console.log(result);
        if (result.rowCount >= 1) {
          return response.status(200).json({
            status: 200,
            message: 'Successfully Fetched',
            data: result.rows
          });
        }
        return response.status(404).json({
          status: 404,
          message: 'parcel not found'
        });
      }).catch(error => console.log(error));
    // return response.status(400).json({
    //   status: 400,
    //   message: 'User id must be an integer',
    //   error: validationResultObject.array()
    // });
  }
};
export default NewObject;
