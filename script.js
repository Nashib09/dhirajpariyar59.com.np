document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Active link highlighting on click
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu on click if open
            if(navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    console.log("Dashboard UI Loaded Successfully for Dhiraj Pariyar!");
});