export default class SendITResources {
	constructor(){
	}
	increment ( ...msg ) {
		console.log( ...msg )
	};
	addToSendItResources = ( userName, userEmail, parcelName ) => {
		return SendITResources.sendItResourcesArray = [{
			name: userName, email: userEmail, parcelName:parcelName
		}, ...SendITResources.sendItResourcesArray]
	};
	getSpecificSendItResource = (  userId ) => {
		return SendITResources.sendItResourcesArray = SendITResources.sendItResourcesArray
		.filter( sendItResource =>  sendItResource.userId === userId )
	};
	getSpecificSendItResource = (  parcelId ) => {
		return SendITResources.sendItResourcesArray = SendITResources.sendItResourcesArray
		.filter( sendItResource =>  sendItResource.parcelId === parcelId )
	};
	
	cancelSendItResource = ( parcelId, cancelled ) => {
		return SendITResources.sendItResourcesArray = SendITResources.sendItResourcesArray
		.map( sendItResource => sendItResource.parcelId === parcelId ? { ...sendItResource, cancelled: cancelled } : sendItResource )
	};
	
	updateASpecificSendItResource = ( param, param1 ) => {
		return SendITResources.sendItResourcesArray = SendITResources.sendItResourcesArray
		.map( sendItResource => sendItResource.name === param ? { ...sendItResource, email: param1 } : sendItResource)
	};
	
	getAllSendItResources = ( ) => {
		return SendITResources.sendItResourcesArray
	}
	
	
	
	
	
	
	
	getResumeData(){
    $.ajax({
      url:'./resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        console.log( data );
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

}

SendITResources.sendItResourcesArray = [ { name: 'something', email: 'time', cancelled: false, userId: 1, parcelId: 1},
 { name: 'something1', email: 'time1', cancelled: false, userId: 2, parcelId: 2 }, 
 { name: 'something2', email: 'time2', cancelled: false, userId: 3, parcelId: 3},
  { name: 'something', email: 'time', cancelled: true, userId: 1, parcelId: 1}	
 ]
SendITResources.myArray = [ 1, 2, 3]


