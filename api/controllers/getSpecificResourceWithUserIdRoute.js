import sendItResources from './sendItResources1';
const getSpecificResourceWithUserIdRoute = (request, response) => {
  const userId = parseInt(request.params.userId, 10);
  const data = sendItResources.getSpecificSendItResourceByUserId(userId);
  if (data) {
    return response.status(404).json({
      success: false,
      status: 200,
      error: 'User has no parcels',
    });
  }
  return response.status(200).json(data);
};
export default getSpecificResourceWithUserIdRoute;
