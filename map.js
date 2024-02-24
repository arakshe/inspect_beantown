
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

require('dotenv').config();

mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;

const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/streets-v12', // style URL
	center: [-74.5, 40], // starting position [lng, lat]
	zoom: 9, // starting zoom
});