function createMarker(point,html) {
  var marker = new GMarker(point);
  GEvent.addListener(marker, "click", function() {
    marker.openInfoWindowHtml(html);
  });
  return marker;
}

jQuery(document).ready(function(){
	var map = new GMap2(document.getElementById('map'));
	map.setCenter(new GLatLng(50.87328,-4.491091), 7);
  map.setMapType(G_HYBRID_MAP);
  map.setUIToDefault();
  
  var point = new GLatLng(50.87328,-4.491091);
  var marker = createMarker(point,'Penstowe Holidays<br />Kilkhampton, Bude<br />Cornwall, EX23 9QY, UK<br /><a href="/location-and-area">Click here for more info</a>')
  map.addOverlay(marker);
});