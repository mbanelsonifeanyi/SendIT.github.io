import sendItResourcesArray from './sendItResourcesArray';
export default class SendITResources {
	

	static addToSendItResources( userName, userEmail, parcelName ){
		return [{userName: userName, userEmail: userEmail, parcelName: parcelName}, ...sendItResourcesArray
		]
	};
	static getSpecificSendItResourceByUserId(  userId ){
		return sendItResourcesArray
		.filter( sendItResource =>  sendItResource.userId === userId )
	};
	static getSpecificSendItResourceByParcelId(  parcelId ){
		return sendItResourcesArray
		.filter( sendItResource =>  sendItResource.parcelId === parcelId )
	};
	
	static cancelSendItResource( parcelId ){
		return sendItResourcesArray
		.map(sendItResource => sendItResource.parcelId === parcelId ? sendItResource.cancelled = !sendItResource.cancelled : sendItResource)
		
	};
	
	static getAllSendItResources(){
		return sendItResourcesArray
	}
	
}

