import sendItResources from './sendItResources1';
const getSpecificResourceWithParcelIdRoute = (request, response) => {
  const userId = parseInt(request.params.userId, 10);
  const data = sendItResources.getSpecificSendItResourceByUserId(userId);
  if (data && data.length !== 0) {
    return response.status(404).json({
      success: true,
      status: 200,
      data: data
    });
  }
  return response.status(404).json({
    status: 404,
    message: 'That parcel is not found!'
  });
};
export default getSpecificResourceWithParcelIdRoute;
