import sendItResources from './sendItResources1';
import sendItResourcesArray from '../models/sendItResourcesArray';
const cancelSendItResourceRoute = (request, response) => {
  const { parcelId, cancelled } = {
    parcelId: parseInt(request.params.parcelId, 10),
    cancelled: request.body.cancelled
  };
  const obj = sendItResourcesArray.find(sendItResource => sendItResource.parcelId === parcelId);
  const data = sendItResources.cancelSendItResource(parcelId, cancelled);
  if (!obj) {
    return response.status(404).json({
      success: false,
      error: 'No Parcels, You can create one',
    });
  }
  return response.status(200).json(data);
};
export default cancelSendItResourceRoute;

// import { Client } from 'pg';
// const client = new Client();
// const Og3 = {
//   cancelSendItResourceRoute: (request, response) => {
//     const parcelId = parseInt(request.params.parcelId, 10);
//     const cancelled = request.body.cancelled;
//     client.connect()
//     .catch(error => {
//       console.log(`${ error }`);
//       return response.status(500).json({
//         status: 500,
//         message: 'The server is down'
//       });
//     })
//     .then(()=>{
//       const sql = 'UPDATE senditresources SET cancelled=$2 WHERE parcelid=$1';
//       const params = [parcelId, cancelled];
//       return client.query(sql, params);
//     })
//     .catch(error => {
//       console.log(`${error}`);
//       return response.status(500).json({
//         status: 500,
//         message: 'The server is down at the moment'
//       });
//     })
//     .then(result => {
//       console.log(result);
//       if (result.rowCount !== 0) {
//         return response.status(301).json({
//           status: 301,
//           message: `Parcel ${ parcelId } was successfully modified`
//         });
//       }
//       return response.status(404).json({
//         status: 404,
//         message: `Parcel ${ parcelId } does not exist, Check the parcel id and try again`
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//       return response.status(500).json({
//         success: false,
//         error: 'we have some issues, try again later'
//       });
//     });
//   }
// };
// export default Og3;

// import { validationResult } from 'express-validator/check';
// import senditresources from './sendItResources1';

// const cancelSendItResourceRoute = (request, response) => {
//   const validationResultObject = validationResult(request);
//   if (validationResultObject.isEmpty()) {
//   const parcelId = parseInt(request.params.parcelId, 10);
//   const cancelled = request.body.cancelled;
//   const data = senditresources.cancelSendItResource(parcelId, cancelled);
//   if (data !== undefined) {
//     return response.status(200).json({
//       success: true,
//       message: 'the parcel has been cancelled',
//       data: data
//     });
//   }
//   return response.status(404).json({
//     success: false,
//     status: 404,
//     message: 'That parcel is not found!'
//   });
//   }
//   const error = validationResultObject.array();
//   return response.status(400).json({
//     success: false,
//     status: 400,
//     message: 'Something went wrong!',
//     error: error
//   });
// };
// export default cancelSendItResourceRoute;
