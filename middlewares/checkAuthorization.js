import jwt from 'jsonwebtoken';

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;
const checkAuthorizationFunction = (request, response, next) => {
  const bearerToken = request.headers.authorization;
  const token = bearerToken.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_PRIVATE_KEY);
    console.log('The decoded token is: ', decoded);
    next();
    // return response.status(200).json({
    //   status: 200,
    //   message: 'Authentication Successful!'
    // });
  }
  catch (error) {
    console.log('This is what went wrong:', error.message);
    return response.status(401).json({
      status: 401,
      message: 'Unauhtorized!'
    });
  }
};
export default checkAuthorizationFunction;
