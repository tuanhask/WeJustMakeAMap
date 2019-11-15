// Custom marker
var iconMarkerEl = document.createElement("div");
iconMarkerEl.innerHTML = "<div class='marker-arrow'></div>" +
  "<div class='marker-pulse'></div>";

var geocoder = new PeliasGeocoder({
  params: {'access-token': 'P4QzOCt4wWfPKfuPuMF1UQSupLKLsO7ZC4DBRF6GAoC0AcaSAKRvD4v2vix948q7'},
  flyTo: 'hybrid',
  wof: true,
  url: 'https://places.jawg.io/v1',
  useFocusPoint: true,
  marker: {
    icon: iconMarkerEl,
    multiple: false
  }
});
map.addControl(geocoder);

document.getElementById('close-detail-button').onclick = function(e) {
  document.getElementById('detail-feature').style.display = "none";
};

function showDetailFeature(feature) {
  console.log(feature);
  document.getElementById('detail-feature').style.display = "block";
  let featureName = document.getElementById("feature-name");
  featureName.innerHTML = feature.properties.name + "<br>"
                        + "<div class='feature-type'>" + feature.geometry.type + "</div>";
  let featureCoordinates = document.getElementById("feature-coordinates");
  featureCoordinates.innerHTML = '<i class="fas fa-compass"></i>  ' + feature.geometry.coordinates[0] + ", " + feature.geometry.coordinates[1];
  let featureLocation = document.getElementById("feature-location");
  featureLocation.innerHTML = '<i class="fas fa-map"></i>  ' + feature.properties.street + ", " + feature.properties.county + ", "
                              + feature.properties.region + ", " + feature.properties.country;
}