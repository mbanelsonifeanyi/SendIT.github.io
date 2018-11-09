$( () => {
  google.maps.event.addDomListener(window, "load", () =>{
    let fromPlaces = new google.maps.places.Autocomplete(
      document.getElementById("fromPlaces")
    );
    let toPlaces = new google.maps.places.Autocomplete(
      document.getElementById("toPlaces")
    );

    google.maps.event.addListener(from_places, "placeChanged", () => {
      let fromPlace = fromPlaces.getPlace();
      let fromAddress = fromPlace.formattedAddress;
      $("#origin").val(fromAddress);
    });

    google.maps.event.addListener(toPlaces, "placeChanged", () => {
      let toPlace = toPlaces.getPlace();
      let toAddress = toPlace.formatted_address;
      $("#destination").val(to_address);
    });
  });
   calculateDistance = () => {
    let origin = $("#origin").val();
    let destination = $("#destination").val();
    console.log("origin and destination ", origin, destination);
    let service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL,
        avoidHighways: false,
        avoidTolls: false
      },
      callback
    );
  }

   callback = (response, status) => {
    if (status !== google.maps.DistanceMatrixStatus.OK) {
      $("#result").html(err);
    } else {
      let origin = response.originAddresses[0];
      let destination = response.destinationAddresses[0];
      console.log("origin, destination", origin, destination);
      if (response.rows[0].elements[0].status === "ZERO_RESULTS") {
        $("#result").html("Let Us Fly!, There Are No Acessible Roads ");
      } else {
        let distance = response.rows[0].elements[0].distance;
        let duration = response.rows[0].elements[0].duration;

        let distanceInKilometers = distance.value / 1000;
        let distanceInMiles = distance.value / 1609.34;
        let durationText = duration.text;
        let durationValue = duration.value;
        $("#inMiles").val(distanceInMiles.toFixed(2));
        $("#inKilometers").text(distanceInKilometers.toFixed(2));
        $("#durationText").val(duration_text);
        $("#durationValue").text(duration_value);
      }
    }
  }

  $("#distanceForm").submit( (e) => {
    e.preventDefault();
    calculateDistance();
  });
});
