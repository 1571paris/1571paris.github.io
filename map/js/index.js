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
  'one': {
    bearing: 100,
    center: [2.350,48.852],
    zoom: 16.8,
    pitch: 0,
    speed: 0.2
    //duration: 4000

  },
  'two': {
    //duration: 3500,
    center: [2.345,48.863],
    bearing: 100,
    zoom: 16.7,
    pitch: 8,
    speed: 0.2
  },
  'three': {
    bearing: 150,
    center: [2.354,48.854],
    zoom: 16.8,
    speed: 0.6,
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