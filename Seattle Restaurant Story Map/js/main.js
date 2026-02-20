mapboxgl.accessToken = 'pk.eyJ1IjoibWF0aGZhMDMiLCJhIjoiY21reXBpcWs1MDlncDNkb283NjkzemRjdyJ9.1z-iTe7Q_gIPYRqaFojIlw';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-122.335167, 47.608013],
  zoom: 11
});

const scroller = scrollama();

map.on('load', () => {

  // Add GeoJSON source
  map.addSource('restaurants', {
    type: 'geojson',
    data: 'assets/restaurants.geojson'
  });

  // Add restaurant points
  map.addLayer({
    id: 'restaurant-points',
    type: 'circle',
    source: 'restaurants',
    paint: {
      'circle-radius': 12,
      'circle-color': '#e63946',
      'circle-stroke-width': 3,
      'circle-stroke-color': '#ffffff'
    }
  });

  // Scrollama setup
  scroller
    .setup({
      step: ".scene",
      offset: 0.5,
      debug: false
    })
    .onStepEnter(handleStepEnter);
});

// Smooth fly-to function
function handleStepEnter(response) {
  const index = response.index;

  const flyOptions = {
    speed: 0.6,       // slower speed for visible flight
    curve: 1.4,
    essential: true
  };

  if (index === 0) {
    map.flyTo({ center: [-122.33, 47.61], zoom: 11, ...flyOptions });
  } 
  else if (index === 1) {
    map.flyTo({ center: [-122.29786890087615, 47.66180166284353], zoom: 15, ...flyOptions });
  } 
  else if (index === 2) {
    map.flyTo({ center: [-122.33156030718999, 47.602270004767384], zoom: 15, ...flyOptions });
  } 
  else if (index === 3) {
    map.flyTo({ center: [-122.32537381906332, 47.615358375656236], zoom: 15, ...flyOptions });
  } 
  else if (index === 4) {
    map.flyTo({ center: [-122.35647673515153, 47.624891430024775], zoom: 15, ...flyOptions });
  }
}