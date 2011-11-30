function initMap() {
	var myCenter = new google.maps.LatLng(47.671468, -122.268670);
	var myOptions = {
		zoom: 14,
		center: myCenter,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var mapDiv = document.getElementById("map");
	var map = new google.maps.Map(mapDiv, myOptions);
	var contentString = '<div id="googleSPCDC">'+
			'<h1>Sand Point Child Development Center</h1>'+
			'<div class="address">'+
			'<p>5837 56th Avenue NE</p>'+
			'<p>Seattle, WA 98105</p>'+
			'<p>206.522.2827</p>'+
			'</div>'+
			'<img src="images/SPCDC.jpg" alt="SPCDC" />'+
			'</div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString,
		disableAutoPan: false
	});
	var marker = new google.maps.Marker({
		position: myCenter,
		map: map,
		title: "Sand Point Child Development Center"
	});
	google.maps.event.addListener(marker, 'click', function() {
		//infowindow.open(map, marker);
		window.open("http://maps.google.com/maps?&q=to:+5837+56th+Avenue+NE,+Seattle,+WA","Get directions to SPCDC");
	});
}

window.onload = function() {
	initMap();
}