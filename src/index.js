import _ from 'lodash';
import './style.css';
import { createApp } from 'vue';
import App from './App.vue';

window.mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1Ijoic21hcnRlcmNvZGluZyIsImEiOiJja25temR0a2YwenF5Mm5ueG50bjdsNXVmIn0.sMr4Bk-voGcnZxwJwmb9Pw';

createApp(App).mount('#app');
