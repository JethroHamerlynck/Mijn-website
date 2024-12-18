let map = L.map('apMap').setView([51.229819, 4.417122], 16)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


let apMarker = L.marker([51.229819, 4.417122]).addTo(map).bindPopup("Ellermanstraat 61").openPopup();