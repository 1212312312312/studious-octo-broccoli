const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('change', function() {
    if (this.checked) {
        // Change background color to red when off
        document.body.style.backgroundColor = 'red';
        // Vibrate phone when button is pressed
        navigator.vibrate([100]);
        // Continuously vibrate phone when button is on
        setInterval(() => {
            navigator.vibrate([100]);
        }, 1000);
    } else {
        // Change background color to blue when off
        document.body.style.backgroundColor = 'blue';
        // Stop continuous vibration
        clearInterval();
    }
});
