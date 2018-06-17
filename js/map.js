$('#map').gmap3({
    map: {
        options: {
            center: [54.163420, 15.500016],
            zoom: 15,
            panControl: false,
            zoomControl: false
        }
    },
    marker: {
        values:[{
            latLng: [54.164853, 15.484334],
            data: 'Pensjonat i Restauracja Posejdon, Bałtycka 20'
        }],
		options: {
            icon: new google.maps.MarkerImage('images/map_marker.png', new google.maps.Size(70, 47, "px", "px"))
        },
        events:{
            click: function(marker, event, context) {
                var map = $(this).gmap3('get'),
                    infowindow = $(this).gmap3({get:{name:'infowindow'}});
                if (infowindow) {
                    infowindow.open(map, marker);
                    infowindow.setContent(context.data);
                } else {
                    $(this).gmap3({
                        infowindow: {
                            anchor: marker,
                            options: {content: context.data}
                        }
                    });
                }
            }
        }
    }
});