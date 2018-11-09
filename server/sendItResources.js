export default class SendITResources {
	i = 0
	sendItResourcesArray = []
	increment () {
		return i++
	}
	addToSendItResources () {
		this.sendItResourcesArray = [{
			userId: this.i,
			userName: userName,
			userEmail: userEmail,
			parcelId: this.i,
			parcelName: parcelName,
			cancelled: false
		}, ...this.sendItResourcesArray]
	}
	
	deleteSendItResource (  resourceToBeDeleted ) {
		this.sendItResourcesArray = this.sendItResourcesArray.filter( sendItResource =>  sendItResource !== resourceToBeDeleted )
	}
	
	cancelSendItResource ( resoureToBeCancelled, cancelled ) {
		this.sendItResourcesArray = this.sendItResourcesArray
		.map( sendItResource => sendItResource === resoureToBeCancelled ? { ...sendItResource, cancelled: cancelled } : sendItResource )
	}
	
	getAllSendItResources () {
		this.sendItResourcesArray = this.sendItResourcesArray.map( sendItResource => sendItResource )
	}
}