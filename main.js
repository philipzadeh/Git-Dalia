// Get all nav links
const navLinks = document.querySelectorAll('.nav-link');

// Loop through each nav link
navLinks.forEach(navLink => {
    // Add event listener for click event
    navLink.addEventListener('click', function() {
        // Remove fill-white and fill-blue classes from all SVGs
        document.querySelectorAll('.nav-link svg').forEach(svg => {
            svg.classList.remove('fill-white', 'fill-blue');
        });

        // Delay the execution of the class assignment
        setTimeout(() => {
            // Add fill-white or fill-blue class to the clicked SVG
            const svg = this.querySelector('svg');
            if (this.classList.contains('active')) {
                svg.classList.add('fill-white');
            } else {
                svg.classList.add('fill-blue');
            }
        }, 10); // Delay of 0 milliseconds
    });
});
