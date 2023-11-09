window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
    if (event.webkitCompassHeading) {
        updateCompass(event.webkitCompassHeading);
    } else {
        updateCompass(event.alpha);
    }
}

function updateCompass(heading) {
    var compassElement = document.querySelector('.circle');
    var headingElement = document.getElementById('heading');

    // Convert the heading to degrees
    var degrees = Math.round(heading);

    // Update the displayed heading
    headingElement.textContent = degrees;

    // Rotate the compass circle to match the heading
    compassElement.style.transform = 'rotate(' + degrees + 'deg)';
}
