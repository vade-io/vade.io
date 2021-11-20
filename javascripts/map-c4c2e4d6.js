function initMap() {
  if (!document.getElementById('map')) {
    return;
  }

  var map = L.map('map').setView([47.1783285, 8.5224418], 9);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([47.1783285, 8.5224418]).addTo(map)
      .bindPopup('<img src="/images/logo_vade_io-b4b2e5bd.svg" alt="vade.io GmbH" />')
      .openPopup();
};
