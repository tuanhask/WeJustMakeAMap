map.on('click', function (e) {
    console.log(e.lngLat.lat, e.lngLat.lng)
    $.ajax({
        url: `https://api.geocode.earth/v1/reverse?api_key=ge-5673e2c135b93a30&point.lat=${e.lngLat.lat}&point.lon=${e.lngLat.lng}&sources=osm`,
        method: "GET",
    }).done(function(data, stt){
        console.log(data)
        let exact = false
        let features = data.features

        for(let i = 0; i < features.length; i++){
            if(features[i].properties.confidence >= 0.9){
                exact = true;
                break;
            }
        }
        console.log(exact)
        
        if(exact == true){
            document.getElementById('place').style.display = "none"
            let feature = features[0]
            document.getElementById('detail-feature').style.display = "block";
            let featureName = document.getElementById("feature-name");
            featureName.innerHTML = feature.properties.name + "<br>"
                                  + "<div class='feature-type'>" + feature.geometry.type + "</div>";
            let featureCoordinates = document.getElementById("feature-coordinates");
            featureCoordinates.innerHTML = '<i class="fas fa-compass"></i>  ' + feature.geometry.coordinates[0] + ", " + feature.geometry.coordinates[1];
            let featureLocation = document.getElementById("feature-location");
            featureLocation.innerHTML = '<i class="fas fa-map"></i>  ' + feature.properties.street + ", " + feature.properties.county + ", "
                                        + feature.properties.region + ", " + feature.properties.country;
        }else{
            document.getElementById('detail-feature').style.display = "none";
            let lat = features[0].geometry.coordinates[1]
            let lon = features[0].geometry.coordinates[0]
            let info = features[0].properties
            let name = info.name
            let county = info.county
            let region = info.region
            let country = info.country
            console.log(lat, lon, name, county, region, country)

            document.getElementById('place').style.display = "block"
            document.getElementById('placename').innerHTML = name +', '+county+', '+region+', '+country
            document.getElementById('latlon').innerHTML = lat + ", "+lon
        }
    });              
});

document.getElementById('placeclose').addEventListener('click', (e) => {
    document.getElementById('place').style.display = "none"
})
document.getElementById('close-detail-button').onclick = function(e) {
    document.getElementById('detail-feature').style.display = "none";
};
