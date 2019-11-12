

function initMap() {

  // STEP 1: Configure Map Options (initial coordinates for UC Irvine)


  // STEP 2: Initiate New Map


  // STEP 3: Function to add marker
  // ––––––––– Function for adding Marker ––––––––
  // The marker has a cusotm toilet icon, drop animation,
  // coordinates,and default name of the bathroom location
  function addMarker(mker){

  }


// STEP 4: Update content of Marker
  function updateContent(infoWindow){

  }


    // STEP 5: Event listener to add marker
    // Event listener to add markers wherever the user double clicks on the map
    google.maps.event.addListener()







  // OPTIONAL: Get user location.

  // –––––––– Get user location ––––––––
  // It takes  it takes a while to load user's location, so be patient in case
  // it doesn't load fast enough.

  function getUserLocation(){
     
  }


  // Function calls
  // getUserLocation();


}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}






//
