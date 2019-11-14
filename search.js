// Custom marker
var iconMarkerEl = document.createElement("div");
iconMarkerEl.innerHTML = "<div class='marker-arrow'></div>" +
  "<div class='marker-pulse'></div>";

map.addControl(new PeliasGeocoder({
  params: {'access-token': 'P4QzOCt4wWfPKfuPuMF1UQSupLKLsO7ZC4DBRF6GAoC0AcaSAKRvD4v2vix948q7'},
  flyTo: 'hybrid',
  wof: true,
  url: 'https://places.jawg.io/v1',
  useFocusPoint: true,
  marker: {
    icon: iconMarkerEl,
    multiple: false
  }
}));

var detailFeature = document.createElement("div");
function showDetailFeature(feature) {
  console.log(feature);
}