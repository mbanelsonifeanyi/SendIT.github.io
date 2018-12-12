const allowCrossOriginAccess = (request, response, next) => {
  response.header('Access-Contrlol-Allow-Origin', '*');
  // response.header('Access-Contrlol-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (request.method === 'OPTIONS') {
    response.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
    return response.status(200).json({});
  }
  next();
};
export default allowCrossOriginAccess;
