// Hamburger Nav Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});




// Function to toggle accessibility panel visibility
function toggleAccessibilityPanel() {
    var panel = document.getElementById('accessibilityPanel');
    panel.classList.toggle('open');
}

// Function to adjust text size
function adjustTextSize(size) {
    if (size === 'small') {
        document.body.classList.add('small-text');
        document.body.classList.remove('large-text');
    } else if (size === 'large') {
        document.body.classList.add('large-text');
        document.body.classList.remove('small-text');
    } else {
        document.body.classList.remove('small-text');
        document.body.classList.remove('large-text');
    }
}

// Function to set contrast
function setContrast(level) {
    if (level === 'high') {
        document.body.classList.add('high-contrast');
    } else {
        document.body.classList.remove('high-contrast');
    }
}

// Function to toggle screen reader
function toggleScreenReader() {
    alert('Screen Reader functionality has been toggled.');
}

// Default closed state
document.addEventListener("DOMContentLoaded", function() {
    var panel = document.getElementById('accessibilityPanel');
    panel.classList.remove('open');
});


