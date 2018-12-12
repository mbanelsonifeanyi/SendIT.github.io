import sendItResourcesArray from '../models/sendItResourcesArray';
export default class SendITResources {
  static addToSendItResources(userName, userEmail, parcelName) {
    return [{ userName, userEmail, parcelName }, ...sendItResourcesArray];
  }

  static getSpecificSendItResourceByUserId(userId) {
    return sendItResourcesArray.filter(sendItResource => sendItResource.userId === userId);
  }

  static getSpecificSendItResourceByParcelId(parcelId) {
    return sendItResourcesArray.filter(sendItResource => sendItResource.parcelId === parcelId);
  }

  static deleteSpecificSendItResourceByParcelId(parcelId) {
    const obj = sendItResourcesArray.find(sendItResource => sendItResource.parcelId === parcelId);
    if (obj) {
      return sendItResourcesArray.filter(sendItResource => sendItResource.parcelId !== parcelId);
    }
  }

  static getAllSendItResources() {
    return sendItResourcesArray;
  }

  static cancelSendItResource(parcelId, cancelled) {
    const obj = sendItResourcesArray.find(sendItResource => sendItResource.parcelId === parcelId);
    if (obj) {
      obj.cancelled = cancelled;
      return obj;
    }
  }
}
