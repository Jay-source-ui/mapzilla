function getLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                showMap(latitude, longitude);
            },
            (error) => {
                alert("Error getting location: " + error.message);
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showMap(latitude, longitude) {
    const mapDiv = document.getElementById("map");
    mapDiv.innerHTML = `
        <iframe 
            width="100%" 
            height="400" 
            src="https://www.google.com/maps?q=${latitude},${longitude}&z=14&output=embed"
            frameborder="0"
            allowfullscreen>
        </iframe>`;
}
