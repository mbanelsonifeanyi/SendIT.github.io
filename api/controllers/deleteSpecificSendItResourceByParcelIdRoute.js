// import sendItResources from './sendItResources1';
// import { validationResult } from '../../node_modules/express-validator/check';
// const Og2 = {
//   deleteSpecificSendItResourceByParcelIdRoute: (request, response) => {
//     const validationResultObject = validationResult(request);
//     if (validationResultObject.isEmpty()) {
//       const parcelId = parseInt(request.params.parcelId);
//       const data = sendItResources.deleteSpecificSendItResourceByParcelId(parcelId);
//       if (data) {
//         return response.status(200).json({
//           status: 200,
//           data: data
//         });
//       }
//       response.status(404).json({
//         status: 200,
//         message: 'Not Found, Check the Parcel id and try again'
//       });
//     }
//   }
// };
// export default Og2;
import { Client } from 'pg';

const client = new Client();
const Og2 = {
  deleteSpecificSendItResourceByParcelIdRoute: (request, response) => {
    const parcelId = parseInt(request.params.parcelId, 10);
    client.connect()
    .catch(error => {
      console.log(`On conect ${error}`);
      return response.status(500).json({
        status: 500,
        message: 'The server is down'
      });
    })
    .then(() => {
      const sql = 'DELETE FROM senditresources WHERE parcelid=$1';
      const params = [parcelId];
      return client.query(sql, params);
    })
    .catch(error => {
      console.log(`After Query: ${error}`);
      return response.status(500).json({
        status: 500,
        message: 'the server is down'
      });
    })
    .then(result => {
      if (result.rowCount !== 0) {
        return response.status(200).json({
          status: 200,
          message: `Parcel ${parcelId} has been deleted`
        });
      }
      return response.status(404).json({
        status: 404,
        message: `Parcel ${parcelId} is not Found, Check the parcel id and try again`
      });
    })
    .catch(error => console.log(`After Result: ${ error }`));
    }
};
export default Og2;
