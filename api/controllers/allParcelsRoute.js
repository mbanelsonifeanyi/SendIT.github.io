import sendItResources from './sendItResources1';

const Og = {
  allParcelsRoute: (request, response) => {
    const data = sendItResources.getAllSendItResources();
    if (data) {
      return response.status(200).json({
        status: 200,
        data: data
      });
    }
    return response.status(500).json({
      status: 500,
      message: 'The server is down, try again later'
    });
  }
};
export default Og;

// import { Client } from 'pg';

// const client = new Client();
// const Og = {
//   allParcelsRoute: (request, response) => {
//     client.connect()
//     .catch(error => {
//         console.log(error);
//         return response
//         .status(500)
//         .json({
//           status: 500,
//           message: 'The server is down, try again later'
//         });
//     })
//     .then(() => {
//       return client.query('SELECT * FROM senditresources;');
//     })
//     .catch(error => {
//       console.log(error);
//       return response.status(500).json({
//         status: 500,
//         message: 'The server is down'
//       });
//     })
//     .then(result => {
//       const data = [...result.rows];
//       return response.status(200).json(data);
//     }).catch(error => {
//       return response.status(500).json(error);
//     });
//   }
// };
// export default Og;
