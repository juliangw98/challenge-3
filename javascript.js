var map;

function initMap() {
    var mapStyles = [
        {
            "elementType": "geometry"
            , "stylers": [
                {
                    "color": "#212121"
      }
    ]
  }
        , {
            "elementType": "labels.icon"
            , "stylers": [
                {
                    "visibility": "off"
      }
    ]
  }
        , {
            "elementType": "labels.text.fill"
            , "stylers": [
                {
                    "color": "#757575"
      }
    ]
  }
        , {
            "elementType": "labels.text.stroke"
            , "stylers": [
                {
                    "color": "#212121"
      }
    ]
  }
        , {
            "featureType": "administrative"
            , "elementType": "geometry"
            , "stylers": [
                {
                    "color": "#757575"
      }
                , {
                    "visibility": "off"
      }
    ]
  }
        , {
            "featureType": "administrative.country"
            , "elementType": "labels.text.fill"
            , "stylers": [
                {
                    "color": "#9e9e9e"
      }
    ]
  }
        , {
            "featureType": "administrative.land_parcel"
            , "stylers": [
                {
                    "visibility": "off"
      }
    ]
  }
        , {
            "featureType": "administrative.locality"
            , "elementType": "labels.text.fill"
            , "stylers": [
                {
                    "color": "#bdbdbd"
      }
    ]
  }
        , {
            "featureType": "administrative.neighborhood"
            , "stylers": [
                {
                    "visibility": "off"
      }
    ]
  }
        , {
            "featureType": "poi"
            , "stylers": [
                {
                    "visibility": "off"
      }
    ]
  }
        , {
            "featureType": "poi"
            , "elementType": "labels.text"
            , "stylers": [
                {
                    "visibility": "off"
      }
    ]
  }
        , {
            "featureType": "poi"
            , "elementType": "labels.text.fill"
            , "stylers": [
                {
                    "color": "#757575"
      }
    ]
  }
        , {
            "featureType": "poi.park"
            , "elementType": "geometry"
            , "stylers": [
                {
                    "color": "#181818"
      }
    ]
  }
        , {
            "featureType": "poi.park"
            , "elementType": "labels.text.fill"
            , "stylers": [
                {
                    "color": "#616161"
      }
    ]
  }
        , {
            "featureType": "poi.park"
            , "elementType": "labels.text.stroke"
            , "stylers": [
                {
                    "color": "#1b1b1b"
      }
    ]
  }
        , {
            "featureType": "road"
            , "stylers": [
                {
                    "visibility": "off"
      }
    ]
  }
        , {
            "featureType": "road"
            , "elementType": "geometry.fill"
            , "stylers": [
                {
                    "color": "#2c2c2c"
      }
    ]
  }
        , {
            "featureType": "road"
            , "elementType": "labels"
            , "stylers": [
                {
                    "visibility": "off"
      }
    ]
  }
        , {
            "featureType": "road"
            , "elementType": "labels.icon"
            , "stylers": [
                {
                    "visibility": "off"
      }
    ]
  }
        , {
            "featureType": "road"
            , "elementType": "labels.text.fill"
            , "stylers": [
                {
                    "color": "#8a8a8a"
      }
    ]
  }
        , {
            "featureType": "road.arterial"
            , "elementType": "geometry"
            , "stylers": [
                {
                    "color": "#373737"
      }
    ]
  }
        , {
            "featureType": "road.highway"
            , "elementType": "geometry"
            , "stylers": [
                {
                    "color": "#3c3c3c"
      }
    ]
  }
        , {
            "featureType": "road.highway.controlled_access"
            , "elementType": "geometry"
            , "stylers": [
                {
                    "color": "#4e4e4e"
      }
    ]
  }
        , {
            "featureType": "road.local"
            , "elementType": "labels.text.fill"
            , "stylers": [
                {
                    "color": "#616161"
      }
    ]
  }
        , {
            "featureType": "transit"
            , "stylers": [
                {
                    "visibility": "off"
      }
    ]
  }
        , {
            "featureType": "transit"
            , "elementType": "labels.text.fill"
            , "stylers": [
                {
                    "color": "#757575"
      }
    ]
  }
        , {
            "featureType": "water"
            , "elementType": "geometry"
            , "stylers": [
                {
                    "color": "#000000"
      }
    ]
  }
        , {
            "featureType": "water"
            , "elementType": "labels.text"
            , "stylers": [
                {
                    "visibility": "off"
      }
    ]
  }
        , {
            "featureType": "water"
            , "elementType": "labels.text.fill"
            , "stylers": [
                {
                    "color": "#3d3d3d"
      }
    ]
  }
]
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -8.860481
            , lng: -140.142088
        }
        , zoom: 3
        , styles: mapStyles
    });
    var landingPlaces = [
        {
            name: 'Orlando, NASA'
            , location: {
                lat: 28.614458
                , lng: -80.694108
            }
        , }, {
            name: 'Waiora, RocketLabLaunch'
            , location: {
                lat: -39.261392
                , lng: 177.865157
            }
        , }
                , {
            name: 'Brownsville , Homebase'
            , location: {
                lat: 25.999869
                , lng: -97.16748319999999
            }
        , }
, ];
    var locationOne = new google.maps.Marker({
        position: landingPlaces[0].location
        , map: map
        , label: 'O'
        , name: 'Orlando'
        , animation: google.maps.Animation.DROP
    , });
    var locationTwo = new google.maps.Marker({
        position: landingPlaces[1].location
        , map: map
        , name: 'Mahia'
        , label: 'M'
        , animation: google.maps.Animation.DROP
    , });
    var locationThree = new google.maps.Marker({
        position: landingPlaces[2].location
        , map: map
        , label: 'H'
        , name: 'Homebase'
        , animation: google.maps.Animation.DROP
    , });
}

function getAPIdata(stad) {
    var url = "http://api.openweathermap.org/data/2.5/weather";
    var apiKey = "b0c8dafa512a0134e90df6ece3c2b7a2";
    var city = stad;
    // construct request
    var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
    // get current weather
    fetch(request)
        // parse to JSON format
        .then(function (response) {
            return response.json();
        })
        // render weather per day
        .then(function (response) {
            // render weatherCondition
            onAPISucces(response);
        })
        // catch error
        .catch(function (error) {
            onAPIError(error);
        });
}

function onAPISucces(response) {
    // get type of weather in string format
    var type = response.weather[0].description;
    // get temperature in Celcius
    var degC = Math.floor(response.main.temp - 273.15);
    // render weather in DOM
    var weatherBox = document.getElementById('weather');
    weatherBox.innerHTML = degC + "&#176;C <br>" + type;
}

function onAPIError(error) {
    console.error('Fetch request failed', error);
    var weatherBox = document.getElementById('weather');
    weatherBox.innerHTML = 'No weather data available <br /> Did you enter a valid city?';
}
// init data stream
document.getElementById("getWeather0").onclick = function () {
    getAPIdata('Brownsville');
};

document.getElementById("getWeather1").onclick = function () {
    getAPIdata('Orlando');
};
document.getElementById("getWeather2").onclick = function () {
    getAPIdata('Wairoa');
};