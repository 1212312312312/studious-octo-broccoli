const toggleButton = document.getElementById('toggleButton');
const intervalInput = document.getElementById('intervalInput');
const applyButton = document.getElementById('applyButton');
const testVibrationButton = document.getElementById('testVibrationButton');

toggleButton.addEventListener('change', function() {
    if (this.checked) {
        // Change background color to red when off
        document.body.style.backgroundColor = 'red';
    } else {
        // Change background color to blue when off
        document.body.style.backgroundColor = 'blue';
    }
});

applyButton.addEventListener('click', applyVibrationPattern);

testVibrationButton.addEventListener('click', function() {
    const intervalValue = parseInt(intervalInput.value);
    if (!isNaN(intervalValue) && intervalValue > 0) {
        // Define custom vibration pattern with the specified interval
        const vibrationPattern = [intervalValue];
        // Vibrate phone with the custom pattern
        navigator.vibrate(vibrationPattern);
    }
});

function applyVibrationPattern() {
    const intervalValue = parseInt(intervalInput.value);
    if (!isNaN(intervalValue) && intervalValue > 0) {
        // Define custom vibration pattern with the specified interval
        const vibrationPattern = [intervalValue];
        // Vibrate phone with the custom pattern
        navigator.vibrate(vibrationPattern);
    }
}
