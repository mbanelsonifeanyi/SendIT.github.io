const errorHandlerObject = {
  allErrorsHandlerFunction: (request, response, next) => {
    const error = new Error('Not Found!, Check the URL and try again!');
    error.status = 404;
    next(error);
  },
  allErrorsHandlerMessageFunction: (error, request, response, next) => {
    response.status(error.status || 500);
    return response.json({
      error: {
        status: 404,
        message: error.message
      }
    });
  }
};
export default errorHandlerObject;
