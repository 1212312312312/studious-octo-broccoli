const toggleButton = document.getElementById('toggleButton');
const intervalInput = document.getElementById('intervalInput');
const applyButton = document.getElementById('applyButton');

toggleButton.addEventListener('change', function() {
    if (this.checked) {
        // Change background color to red when off
        document.body.style.backgroundColor = 'red';
        // Check if the device supports vibration
        if ("vibrate" in navigator) {
            // Vibrate phone with the default pattern
            applyVibrationPattern();
        }
    } else {
        // Change background color to blue when off
        document.body.style.backgroundColor = 'blue';
        // Stop vibration when button is turned off
        navigator.vibrate(0);
    }
});

applyButton.addEventListener('click', applyVibrationPattern);

function applyVibrationPattern() {
    const intervalValue = parseInt(intervalInput.value);
    if (!isNaN(intervalValue) && intervalValue > 0) {
        // Define custom vibration pattern with the specified interval
        const vibrationPattern = [intervalValue];
        // Vibrate phone with the custom pattern
        navigator.vibrate(vibrationPattern);
    }
}
