

function initMap() {

  // Map Options
  var options = {
    zoom: 14,
    center: {lat: 33.6405, lng: -117.8443}
  }

  // New Map
  var map = new google.maps.Map(document.getElementById('map'), options);


  /*
  // Add marker with custom icon
  var marker = new google.maps.Marker({
      map:map,
      draggable: true,
      icon: 'imgs/toilet.png',
      animation: google.maps.Animation.DROP,
      position:{lat:33.644096,lng: -117.8443}
  });

  // Infowindow when you click on Marker
  var infoWindow = new google.maps.InfoWindow({
      content: '<h3> Bathroom </h3>'
  });

  marker.addListener('click', function() {
      infoWindow.open(map, marker)
  })
  */

  addMarker({lat:33.644096,lng: -117.8443});
  addMarker({lat:33.644096,lng: -117.8490});


  // Function for adding Marker
  function addMarker(coords){
      var marker = new google.maps.Marker({
          map:map,
          draggable: true,
          icon: 'imgs/toilet.png',
          animation: google.maps.Animation.DROP,
          position: coords
      });
  }




}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}
