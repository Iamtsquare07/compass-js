window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
    if (event.webkitCompassHeading) {
        // IOS Devices
        updateCompass(event.webkitCompassHeading);
    } else {
        updateCompass(event.alpha);
    }
}

function updateCompass(heading) {
    var compassElement = document.getElementById('compass');
    var headingElement = document.getElementById('heading');

    // Convert the heading to degrees
    var degrees = Math.round(heading);

    headingElement.textContent = degrees;

    // Rotate the compass element to simulate a compass needle
    compassElement.style.transform = 'rotate(' + degrees + 'deg)';
}
