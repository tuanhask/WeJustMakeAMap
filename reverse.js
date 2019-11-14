map.on('click', function (e) {
    console.log(e.lngLat.lat, e.lngLat.lng)
    $.ajax({
        url: `https://api.geocode.earth/v1/reverse?api_key=ge-5673e2c135b93a30&point.lat=${e.lngLat.lat}&point.lon=${e.lngLat.lng}&sources=osm`,
        method: "GET",
    }).done(function(data, stt){
        let info = data.features[0].properties
        let name = info.name
        let county = info.county
        let region = info.region
        let country = info.country

        document.getElementById('place').style.display = "block"
        document.getElementById('placename').innerHTML = name +', '+county+', '+region+', '+country
    });              
});
document.getElementById('placeclose').addEventListener('click', (e) => {
    document.getElementById('place').style.display = "none"
})