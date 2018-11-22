import express from 'express'
import { check, validationResult } from 'express-validator/check';
import sendItResources from '../controller/sendItResources1'
console.log(sendItResources.prototype.sendItResourcesArray)
//  Instantiating
const router = express.Router()


/*  These are API routes. */

router.get('/parcels', (request, response) => {
  response.status(200).json(sendItResources.getAllSendItResources())
})

router.get('/parcels/:parcelId', (request, response) => {
  const parcelId = parseInt(request.params.parcelId, 10)
  const data = sendItResources.getSpecificSendItResourceByParcelId(parcelId)
  if (data.length === 0) {
    return response.status(404).json({
      success: false,
      error: 'Your Parcel is not found!'
    })
  }
  return response.status(200).json(data)
})

router.get('/users/:userId/parcels', (request, response) => {
  const userId = parseInt(request.params.userId, 10)
  const data = sendItResources.getSpecificSendItResourceByUserId(userId)
  if (data.length === 0) {
    return response.status(404).json({
      success: false,
      error: 'User has no parcels',
    })
  }
  return response.status(200).json(data);
})

router.delete('/parcels/:parcelId', (request, response) => {
  const obj = sendItResources.prototype.sendItResourcesArray.find(sendItResource => sendItResource.parcelId === parcelId);
  const parcelId = parseInt(request.params.parcelId, 10)
  console.log(obj)
  const data = sendItResources.deleteSpecificSendItResourceByParcelId(parcelId)
  if (parcelId !== obj.parcelId) {
    return response.status(404).json({
      success: false,
      error: 'That order does not exist'
    })
  }
  return response.status(200).json(data)
})

router.put('/parcels/:parcelId/:cancelled', (request, response) => {
  // const parcelId = parseInt(request.params.parcelId, 10)
  // const cancelled = request.body.cancelled
  const { parcelId, cancelled } = {
    parcelId: parseInt(request.params.parcelId, 10),
    cancelled: request.body.cancelled
  };
  // const result = sendItResources.getSpecificSendItResourceByParcelId(parcelId);
  const data = sendItResources.cancelSendItResource(parcelId, cancelled);
  // console.log(sendItResources.cancelSendItResource(1, 'something'));
  if (data.length === 0) {
    return response.status(404).json({
      success: false,
      error: 'No Parcels, You can create one',
    })
  }
  return response.status(200).json(data);
})

router.post('/parcels', [
  check('userName').isLength({ min: 1 }).withMessage('Username cannot be empty'),
  check('userEmail').isLength({ min: 1 }).withMessage('UserEmail cannot be blank'),
  check('parcelName').isLength({ min: 1 }).withMessage('Parcel name cannot be blank'),
], (request, response) => {
  const errors = validationResult(request)
  if (!errors.isEmpty()) {
    return response.status(400).json({
      success: false,
      error: 'Some credential are blank',
      errors: errors.array(),
    })
  }
  // const userName = request.body.userName;
  // const userEmail = request.body.userEmail;
  // const parcelName = request.body.parcelName;
  const { userEmail, userName, parcelName } = {
    userEmail: request.body.userEmail,
    userName: request.body.userName,
    parcelName: request.body.parcelName
  }
  const data = sendItResources.addToSendItResources(userName, userEmail, parcelName)
  return response.status(201).json(data)
})

export default router
