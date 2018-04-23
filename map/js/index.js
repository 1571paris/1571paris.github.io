mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGFkZHkiLCJhIjoiY2pjcXpha3owMDR0ZzMybnE2bjU0cHlkayJ9.j9UbVyMsnnZVzEjsrjkU9A';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/alexaddy/cjd95jarv9m672rp4xkfiqhye',
  center: [2.348,48.855],
  zoom: 14.8,
  bearing: 100,
  pitch: 0,
  interactive: false

});

var chapters = {
  'zero': {
    //duration: 3500,
    center: [2.351606,48.868982],
    bearing: 0,
    zoom: 16.7,
    pitch: 0,
    speed: 0.2
  },
  'one': {
    //duration: 3500,
    center: [2.350597,48.866932],
    bearing: 0,
    zoom: 16.7,
    pitch: 0,
    speed: 0.2
  },
  'two': {
    bearing: 0,
    center: [2.348844,48.864306],
    zoom: 16.8,
    speed: 0.2,
    pitch: 0
  },
  'three': {
    bearing: 0,
    center: [2.347966,48.861665],
    zoom: 16.8,
    speed: 0.2,
    pitch: 0
  },
  'four': {
    bearing: 0,
    center: [2.347411,48.861139],
    zoom: 16.8,
    speed: 0.2,
    pitch: 0
  },
  'five': {
    bearing: 0,
    center: [2.346631,48.858142],
    zoom: 16.8,
    speed: 0.2,
    pitch: 0
  },
  'six': {
    bearing: 0,
    center: [2.349056,48.857098],
    zoom: 16.8,
    speed: 0.2,
    pitch: 0
  },
  'seven': {
    bearing: 0,
    center: [2.349485,48.852706],
    zoom: 16.8,
    speed: 0.2,
    pitch: 0
  },
};

// On every scroll event, check which element is on screen
window.onscroll = function() {
  var chapterNames = Object.keys(chapters);
  for (var i = 0; i < chapterNames.length; i++) {
    var chapterName = chapterNames[i];
    if (isElementOnScreen(chapterName)) {
      setActiveChapter(chapterName);
      break;
    }
  }
};

var activeChapterName = 'cover';

function setActiveChapter(chapterName) {
  if (chapterName === activeChapterName) return;

  map.flyTo(chapters[chapterName]);

  document.getElementById(chapterName).setAttribute('class', 'active');
  document.getElementById(activeChapterName).setAttribute('class', '');

  activeChapterName = chapterName;
}

function isElementOnScreen(id) {
  var element = document.getElementById(id);
  var bounds = element.getBoundingClientRect();
  return bounds.top < window.innerHeight && bounds.bottom > 0;
}