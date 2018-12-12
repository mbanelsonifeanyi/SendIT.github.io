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
      client.connect().catch(error => {
        return response
        .status(500)
        .json('Oops! Server is down! Try again later');
      })
      .then(() => {
        const sql = 'SELECT FROM senditresources WHERE parcelid=$1';
        const params = [parcelId];
        return client.query(sql, params);
      }).catch(error => {
        return response
        .status(500)
        .json(`Oops ${parcelId}`);
      })
      .then((result) => {
        console.log(result.rows);
        const data = result.rows.lenght;
        console.log(data);
        if ((result.rows.lenght) !== 0) {
        const sql = 'DELETE FROM senditresources WHERE parcelid=$1';
        const params = [parcelId];
        return client.query(sql, params);
        }
        return response.status(404).json(`the parcel id ${parcelId} is not found`);
    })
      .catch(error => {
        console.log(error);
        return response.status(500).json(`${parcelId} is ........`);
      }).then(() => {
        return response.status(200).json(`Parcel ${parcelId} has been deleted`);
      });
    }
};
export default Og2;
