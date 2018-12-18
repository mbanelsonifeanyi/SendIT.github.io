// import sendItResources from './sendItResources1';
// const getSpecificResourceWithParcelIdRoute = (request, response) => {
//   const userId = parseInt(request.params.userId, 10);
//   const data = sendItResources.getSpecificSendItResourceByUserId(userId);
//   if (data && data.length !== 0) {
//     return response.status(404).json({
//       success: true,
//       status: 200,
//       data: data
//     });
//   }
//   return response.status(404).json({
//     status: 404,
//     message: 'That parcel is not found!'
//   });
// };
// export default getSpecificResourceWithParcelIdRoute;

import { Client } from 'pg';

const client = new Client();
const getSpecificResourceWithParcelIdRoute = (request, response) => {
  const parcelId = parseInt(request.params.parcelId);
  client.connect()
  .catch(error => {
    console.log(`${ error }`);
    return response.status(500).json({
      status: 500,
      message: 'The server is down at the moment'
    });
  }).then(() => {
    const sql = 'SELECT * FROM senditresources WHERE parcelid=$1';
    const param = [parcelId];
    return client.query(sql, param);
  }).catch(error => {
    console.log(`${ error }`);
    return response.status(500).json({
      status: 500,
      message: 'Server is down, try again later'
    });
  }).then(result => {
    console.log(result);
    if (result.rowCount >= 0) {
      return response.status(200).json({
        status: 200,
        message: 'Successful',
        data: result.rows
      });
    }
    return response.status(404).json({
      status: 404,
      message: `Parcel ${ parcelId } is not Found`
    });
  }).catch(error => {
    console.log(`${ error }`);
    return response.status(500).json({
      status: 500,
      message: 'Oops!'
    });
  });
};
export default getSpecificResourceWithParcelIdRoute;
