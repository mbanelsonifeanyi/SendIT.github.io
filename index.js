$(function() {
  google.maps.event.addDomListener(window, "load", function() {
    let fromPlaces = new google.maps.places.Autocomplete(
      document.getElementById("from_places")
    );
    let toPlaces = new google.maps.places.Autocomplete(
      document.getElementById("to_places")
    );

    google.maps.event.addListener(from_places, "place_changed", function() {
      let fromPlace = from_places.getPlace();
      let fromAddress = from_place.formatted_address;
      $("#origin").val(from_address);
    });

    google.maps.event.addListener(to_places, "place_changed", function() {
      let toPlace = toPlaces.getPlace();
      let toAddress = toPlace.formatted_address;
      $("#destination").val(to_address);
    });
  });
  function calculateDistance() {
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

  function callback(response, status) {
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
        $("#in-mile").val(distanceInMiles.toFixed(2));
        $("#in-kilo").text(distanceInKilometers.toFixed(2));
        $("#duration_text").val(duration_text);
        $("#duration_value").text(duration_value);
      }
    }
  }

  $("#distance_form").submit(function(e) {
    e.preventDefault();
    calculateDistance();
  });
});
