function currentLocationMapClick(e) {
  if (currentLocationMarker) {
    map.removeLayer(currentLocationMarker);
  }
  if (currentLocationAccuracy) {
    map.removeLayer(currentLocationAccuracy);
  }
  currentLocationMarker = L.marker(e.latlng);
  currentLocationMarker.bindPopup("<b>Current location</b><br>Lat : " + e.latlng.lat + "<br>Lng : " + e.latlng.lng );
  map.addLayer(currentLocationMarker);
}

function onCurrentLocationFound(e) {
  var radius = e.accuracy;

  currentLocationMarker = L.marker(e.latlng);
  currentLocationMarker.bindPopup("You are within " + radius + " meters from this point<br>Lat : " + e.latlng.lat + "<br>Lng : " + e.latlng.lng).openPopup();
  map.addLayer(currentLocationMarker);

  currentLocationAccuracy = L.circle(e.latlng, radius);
  map.addLayer(currentLocationAccuracy);
}

function onCurrentLocationError(e) {
  alert("Kindly select your location on the map or reload and allow to \"know your location\"");
}