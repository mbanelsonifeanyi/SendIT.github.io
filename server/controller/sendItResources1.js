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
    return sendItResourcesArray.filter(sendItResource => sendItResource.parcelId !== parcelId);
  }

  static getAllSendItResources() {
    return sendItResourcesArray;
  }

  static cancelSendItResource(parcelId, cancelled) {
    const obj = sendItResourcesArray.find(sendItResource => sendItResource.parcelId === parcelId);
    // console.log(obj)
    if (obj) {
      return { name: obj.name, email: obj.email, userId: obj.userId }
      console.log(obj)
    }
    return sendItResourcesArray.filter(sendItResource => sendItResource.parcelId === parcelId && sendItResource.cancelled === true)
  }
}
SendITResources.prototype.sendItResourcesArray = [{ name: 'change another thing1', email: 'time', cancelled: false, userId: 1, parcelId: 4 },
  { name: 'something1', email: 'time1', cancelled: false, userId: 2, parcelId: 2 },
  { name: 'mba nelson ifeany/ bootcamp cycle38', email: 'time2', cancelled: false, userId: 3, parcelId: 3 },
  { name: 'Joshua Andela', email: 'time', cancelled: false, userId: 1, parcelId: 4 }
];
let sendItResourcesArray  =  SendITResources.prototype.sendItResourcesArray
