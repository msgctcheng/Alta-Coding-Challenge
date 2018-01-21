

// Initialize Google Map but ran into bugs getting it to appear in both tabs.

function initMap() {
    var losAngeles = {lat: 34.052, lng: -118.24};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: losAngeles
    });
    var marker = new google.maps.Marker({
      position: losAngeles,
      map: map
    });
  }
  


