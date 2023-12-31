window.addEventListener("deviceorientation", handleOrientation);

function handleOrientation(event) {
  if (event.alpha) {
    // Android devices
    updateCompass(event.alpha);
  } else if (event.webkitCompassHeading) {
    // IOS Devices
    updateCompass(event.webkitCompassHeading);
  } else if (
    event &&
    typeof event.webkitCompassHeading !== "undefined" &&
    event.webkitCompassHeading !== null &&
    typeof event.alpha !== "undefined" &&
    event.alpha !== null &&
    event.alpha >= 0 &&
    event.alpha <= 360
  ) {
    alert(
      "It seems like your device does not have the sensors needed to run this application. Sorry for the inconvenience."
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

  positionElement.textContent = cardinalDirection;
}

// Get the cardinal direction
function getCardinalDirection(heading) {
  var directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "NW", "ENE"];
  var index = Math.round(heading / 45) % 12;
  return directions[index];
}
