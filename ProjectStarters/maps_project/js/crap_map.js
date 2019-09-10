

function initMap() {

  // Map Options (initial coordinates for UC Irvine)
  var options = {
    zoom: 14,
    center: {lat: 33.6405, lng: -117.8443}
  }

  // New Map
  var map = new google.maps.Map(document.getElementById('map'), options);
  var infoWindow = new google.maps.InfoWindow;


  // ––––––––– Function for adding Marker ––––––––
  // The marker has a cusotm toilet icon, drop animation,
  // coordinates,and name of the bathroom location
  function addMarker(mker){
      var marker = new google.maps.Marker({
          map:map,
          draggable: true,
          icon: 'imgs/toilet.png',
          animation: google.maps.Animation.DROP,
          position: mker.coords
      });

      // Add title/name of bathroom
      var infoWindow = new google.maps.InfoWindow({
          content: mker.content
      });

      // Open info window when marker is clicked
      marker.addListener('click', function(){
          infoWindow.open(map, marker);
      });
  }


  // Event listener to add markers wherever the user clicks on the map
    google.maps.event.addListener(map, 'click',
      function(event){
          addMarker({coords:event.latLng});
      })


  // –––––––– Get user location ––––––––
  // It takes  it takes a while to load user's location, so be patient in case
  // it doesn't load fast enough.

  function getUserLocation(){
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found.');
          infoWindow.open(map);
          map.setCenter(pos);
        }, function() {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
  }


  // Function calls
  // getUserLocation();


}

// Miscellaneous

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}






//
