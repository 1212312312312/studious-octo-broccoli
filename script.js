const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('change', function() {
    if (this.checked) {
        // Change background color to red when off
        document.body.style.backgroundColor = 'red';
        // Check if the device supports vibration
        if ("vibrate" in navigator) {
            // Define custom vibration pattern (modify as needed)
            const vibrationPattern = [1000, 100, 500, 200, 1000]; // Example pattern: 1 second, short pause, 0.5 second, short pause, 1 second
            // Vibrate phone with the custom pattern
            navigator.vibrate(vibrationPattern);
        }
    } else {
        // Change background color to blue when off
        document.body.style.backgroundColor = 'blue';
        // Stop vibration when button is turned off
        navigator.vibrate(0);
    }
});
