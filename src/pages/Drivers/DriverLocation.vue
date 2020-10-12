<template>
    <div class="content">
        <gmap-map
          :center="center"
          :zoom="16"
          style="width:100%;  height: 700px;"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="center=m.position"
          ></gmap-marker>
        </gmap-map>
    </div>
</template>

<script>
//import { API_KEY } from "../API_KEY";
//import {Loader, LoaderOptions} from 'google-maps';
import { isEmpty } from "../../helpers/Common";

//const loader = new Loader(API_KEY);
export default {
  /*
  |--------------------------------------------------------------------------
  | Component > data
  |--------------------------------------------------------------------------
  */
  data() {
    return {
      driver: {},
      center: {lat:45.4250497, lng:-75.718355},
      markers: [],
      places: [],
      currentPlace: null
    };
  },
  /*
  |--------------------------------------------------------------------------
  | Component > methods
  |--------------------------------------------------------------------------
  */
  methods:{
    getDriverId() {
      let _this = this;
      let id =  this.$route.params.id;

      axios.get(`https://api.instantavite.com/api/drivers/${id}`)
      .then( (result) => {
        _this.driver = result.data;
        _this.addMarker();
      });
    },
    addMarker(){
      if(!isEmpty(this.driver.coordinates)){
        let value = this.driver.coordinates.split(",")
        const marker = {
          lat: parseFloat(value[0]),
          lng: parseFloat(value[1])
        };
        this.markers.push({ position: marker });
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }

  },
  /*
  |--------------------------------------------------------------------------
  | Component > mounted
  |--------------------------------------------------------------------------
  */
  mounted() {
    const _this = this;
    this.getDriverId();
    this.geolocate();
    /* loader.load().then(function (google) {
      var map = new google.maps.Map(document.getElementById("map"))
        
        var myLatlng = new google.maps.LatLng(45.4250497,-75.718355);
        var mapOptions = {
          zoom: 13,
          center: myLatlng,
          scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
          styles: [
            {
              featureType: "water",
              stylers: [
                { saturation: 43 },
                { lightness: -11 },
                { hue: "#0088ff" }
              ]
            },
            {
              featureType: "road",
              elementType: "geometry.fill",
              stylers: [
                { hue: "#ff0000" },
                { saturation: -100 },
                { lightness: 99 }
              ]
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#808080" }, { lightness: 54 }]
            },
            {
              featureType: "landscape.man_made",
              elementType: "geometry.fill",
              stylers: [{ color: "#ece2d9" }]
            },
            {
              featureType: "poi.park",
              elementType: "geometry.fill",
              stylers: [{ color: "#ccdca1" }]
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#767676" }]
            },
            {
              featureType: "road",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#ffffff" }]
            },
            { featureType: "poi", stylers: [{ visibility: "off" }] },
            {
              featureType: "landscape.natural",
              elementType: "geometry.fill",
              stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
            },
            { featureType: "poi.park", stylers: [{ visibility: "on" }] },
            {
              featureType: "poi.sports_complex",
              stylers: [{ visibility: "on" }]
            },
            { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
            {
              featureType: "poi.business",
              stylers: [{ visibility: "simplified" }]
            }
          ]
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
          position: myLatlng,
          title: "Driver"
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);
    }); */
  }
};
</script>
