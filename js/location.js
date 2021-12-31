function mapLoad  () {
  
let directionsMap;
let directionsService;
let directionsDisplay;
let start;
let destination;



function getDirections(){
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude);
    start = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    mapDirections(start);
  });
}

function mapDirections(start){
  console.log('mapDirections');
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  destination = new google.maps.LatLng(46.261446, -74.5097236);
  directionsMap = new google.maps.Map(document.querySelector('#directions-map'));
  directionsDisplay.setMap(directionsMap);
  calcRoute(start, destination);
}

function calcRoute(start, destination) {
  console.log('calcRoute()');
  let request = {
      origin: start,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING //BICYCLING TRANSIT WALKING 
  };
  directionsService.route(request, function(response, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(response);
      // directionsInfo.innerHTML = '';
      let starter = new google.maps.Marker({
        position: start,
        map: directionsMap,
        label: 'you are here'
        
      });

      let marker = new google.maps.Marker({
        position: destination,
        map: directionsMap,

      });

    }
  });
}
getDirections();

};
mapLoad();