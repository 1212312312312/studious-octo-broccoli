const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('change', function() {
    if (this.checked) {
        // Change background color to red when off
        document.body.style.backgroundColor = 'red';
        // Check if the device supports vibration
        if ("vibrate" in navigator) {
            // Vibrate phone when button is pressed
            navigator.vibrate([100]);
            // Continuously vibrate phone when button is on
            const vibrationInterval = setInterval(() => {
                navigator.vibrate([100]);
            }, 1000);
            // Store the interval ID to clear it later
            this.dataset.vibrationInterval = vibrationInterval;
        }
    } else {
        // Change background color to blue when off
        document.body.style.backgroundColor = 'blue';
        // Stop continuous vibration
        const vibrationInterval = parseInt(this.dataset.vibrationInterval);
        clearInterval(vibrationInterval);
    }
});
