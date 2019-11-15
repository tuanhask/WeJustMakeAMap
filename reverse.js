map.on('click', function (e) {
    if(!isRouting) {
        $.ajax({
            url: `https://api.geocode.earth/v1/reverse?api_key=ge-5673e2c135b93a30&point.lat=${e.lngLat.lat}&point.lon=${e.lngLat.lng}&sources=osm`,
            method: "GET",
        }).done(function(data, stt){
            showDetailFeature(data.features[0]);
        }); 
    }
});