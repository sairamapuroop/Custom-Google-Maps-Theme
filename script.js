//toggle dark/light mode 

const darkButton = document.querySelector("#dark");
const radioButtons = document.querySelectorAll(".toggle__wrapper input");

const enableDarkMode = () => {
	document.body.classList = "dark";
};

const disableDarkMode = () => {
	document.body.classList = "";
};

radioButtons.forEach((button) => {
	button.addEventListener("click", () => {
		if (darkButton.checked) {
			enableDarkMode();
		} else {
			disableDarkMode();
		}
	});
});





//maps javascript api .

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.66781739276253, lng: 135.43052363274217 },
    zoom: 18, //0 - 22
    mapId: "d9c32ef102ce8c3f",
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  });

  //Name
  //lat and lng
  //image Url
  //scaledSize width, height
  const markers = [
    {
      title: "Yoshi's House",
      lat: 34.66766387924806,
      lng: 135.43090264980793,
      url: "yoshi_house.svg",
      width: 38,
      height: 31,
    },
    {
      title: "You Are Here",
      lat: 34.66767112713121,
      lng: 135.4297887322531,
      url: "pointer.svg",
      width: 30,
      height: 47.8,
    },
    {
      title: "Ghost House",
      lat: 34.66832715150856,
      lng: 135.43292762674864,
      url: "ghosthouse.svg",
      width: 40,
      height: 48,
    },
    {
      title: "Castle",
      lat: 34.66775608022106,
      lng: 135.43139547897843,
      url: "castle.svg",
      width: 40,
      height: 53,
    },
    {
      title: "Warp Pipe",
      lat: 34.66739738878135,
      lng: 135.43225049775214,
      url: "pipe.svg",
      width: 38,
      height: 42.5,
    },
    {
      title: "Star World",
      lat: 34.667959023359266,
      lng: 135.42866400953733,
      url: "star.svg",
      width: 38,
      height: 38,
    },
    {
      title: "Donut Plains",
      lat: 34.66830355359945,
      lng: 135.4320565322381,
      url: "hill_with_eyes.svg",
      width: 50,
      height: 60.7,
    },
    {
      title: "Donut Plains",
      lat: 34.66829411443392,
      lng: 135.43231361996433,
      url: "hill_with_eyes.svg",
      width: 50,
      height: 60.7,
    },
    {
      title: "Donut Plains",
      lat: 34.6683781779677,
      lng: 135.43217016043528,
      url: "hill_with_eyes.svg",
      width: 50,
      height: 60.7,
    },
  ];

  //using javascript map method!
  markers.map((currMarker) => {
    const marker = new google.maps.Marker({
      position: { lat: currMarker.lat, lng: currMarker.lng },
      map,
      title: currMarker.title,
      icon: {
        url: currMarker.url,
        scaledSize: new google.maps.Size(currMarker.width, currMarker.height),
      },
      animation: google.maps.Animation.DROP,
    });

    const infowindow = new google.maps.InfoWindow({
      content: currMarker.title,
    });
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  });
}

//34.66766387924806, 135.43090264980793

//using regular javascript for loop!

// for (let i = 0; i < markers.length; i++) {
//   const currMarker = markers[i];

//   const marker = new google.maps.Marker({
//     position: { lat: currMarker.lat, lng: currMarker.lng },
//     map,
//     title: currMarker.title,
//     icon: {
//       url: currMarker.url,
//       scaledSize: new google.maps.Size(currMarker.width, currMarker.height),
//     },
//     animation: google.maps.Animation.DROP,
//   });

//   const infowindow = new google.maps.InfoWindow({
//     content: currMarker.title,
//   });
//   marker.addListener("click", () => {
//     infowindow.open({
//       anchor: marker,
//       map,
//       shouldFocus: false,
//     });
//   });
// }
