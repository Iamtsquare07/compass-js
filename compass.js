window.addEventListener("deviceorientation", handleOrientation);

function handleOrientation(event) {
  if (event.webkitCompassHeading) {
    // IOS Devices
    updateCompass(event.webkitCompassHeading);
  } else if (event.alpha) {
    // Android devices
    updateCompass(event.alpha);
  } else {
    alert(
      "It seems like your device does not have the sensors needed to run this application. Sorry for the inconvenience"
    );
  }
}

function updateCompass(heading) {
  var compassElement = document.querySelector(".circle");
  var headingElement = document.getElementById("heading");
  var positionElement = document.getElementById("position");

  // Convert the heading to degrees
  var degrees = Math.round(heading);

  headingElement.textContent = degrees;

  // Rotate the compass circle to match the heading
  compassElement.style.transform = "rotate(" + degrees + "deg)";

  // Calculate the cardinal direction
  var cardinalDirection = getCardinalDirection(degrees);

  // Update the position field
  positionElement.textContent = cardinalDirection;
}

// Function to get the cardinal direction
function getCardinalDirection(heading) {
  var directions = [
    "N",
    "NE",
    "E",
    "SE",
    "S",
    "SW",
    "W",
    "NW",
    "EW",
    "ENE",
    "ESE",
    "WSW",
  ];
  var index = Math.round(heading / 45) % 12;
  return directions[index];
}
