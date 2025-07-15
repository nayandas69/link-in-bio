/**
 * Link in Bio - Personal Portfolio Page JavaScript
 * Author: nayandas69
 * GitHub: https://github.com/nayandas69/link-in-bio
 * Email: nayanchandradas@hotmail.com
 * License: MIT
 * Description: A responsive portfolio page with dark mode, blog carousel, and social links
 * 
 * IMPORTANT: Please do not remove this author credit comment.
 * You are free to use and modify this code under MIT license,
 * but please keep the author attribution intact.
 */

document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const blogCarousel = document.querySelector('.blog-carousel');
    const modal = document.getElementById('blogModal');
    const closeModal = modal.querySelector('.close');
    const dotsContainer = document.querySelector('.carousel-dots');

    // Configuration
    const autoplayInterval = 5000; // 5 seconds for carousel autoplay
    let currentSlide = 0;
    let autoplay;

    // Blog data - Contains information for each blog post
    const blogs = [
        {
            title: 'Create a Stunning Animated Navigation Magic Menu',
            description: 'Welcome to our step-by-step tutorial on creating a stunning animated navigation magic menu using HTML, CSS, and JavaScript!',
            video: 'https://www.youtube.com/embed/SRShOP9iKRc',
            thumbnail: 'images/blog1.png'
        },
        {
            title: 'Build a Stylish Password Strength Checker',
            description: 'Welcome to our step-by-step tutorial on building a sleek and functional Password Strength Checker using HTML, CSS, and JavaScript.',
            video: 'https://www.youtube.com/embed/gbfoGJLlXgI',
            thumbnail: 'images/blog2.png'
        },
        {
            title: 'Build a Stunning Creative Portfolio in Just 10 Minutes',
            description: 'In this video, I will show you how to create a beautiful and modern portfolio website in just 10 minutes!',
            video: 'https://www.youtube.com/embed/p2_FN9djQNc',
            thumbnail: 'images/blog3.png'
        }
    ];

    /**
     * Initialize the application
     */
    function init() {
        loadThemePreference();
        populateBlogCarousel();
        setupEventListeners();
        startAutoplay();
    }

    /**
     * Load saved theme preference from localStorage
     * If no preference is saved, defaults to light mode
     */
    function loadThemePreference() {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }

    /**
     * Save theme preference to localStorage
     * @param {string} theme - 'light' or 'dark'
     */
    function saveThemePreference(theme) {
        localStorage.setItem('theme', theme);
    }

    /**
     * Toggle between light and dark mode
     */
    function toggleTheme() {
        body.classList.toggle('dark-mode');

        // Save the current theme preference
        const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        saveThemePreference(currentTheme);
    }

    /**
     * Populate the blog carousel with blog items and navigation dots
     */
    function populateBlogCarousel() {
        // Clear existing content
        blogCarousel.innerHTML = '';
        dotsContainer.innerHTML = '';

        // Create blog items and dots
        blogs.forEach((blog, index) => {
            // Create blog item element
            const blogItem = document.createElement('div');
            blogItem.classList.add('blog-item');
            blogItem.innerHTML = `
                <img src="${blog.thumbnail}" alt="${blog.title}" loading="lazy">
                <h3>${blog.title}</h3>
                <p>${blog.description.substring(0, 50)}...</p>
            `;

            // Add click event to open modal
            blogItem.addEventListener('click', () => openModal(blog));
            blogCarousel.appendChild(blogItem);

            // Create navigation dot
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active'); // First dot is active by default

            // Add click event to navigate to specific slide
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateCarousel();
                restartAutoplay(); // Restart autoplay when user manually navigates
            });
            dotsContainer.appendChild(dot);
        });
    }

    /**
     * Update carousel position and active dot indicator
     */
    function updateCarousel() {
        // Move carousel to current slide
        blogCarousel.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Update active dot
        document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    /**
     * Start automatic carousel rotation
     */
    function startAutoplay() {
        autoplay = setInterval(() => {
            currentSlide = (currentSlide + 1) % blogs.length;
            updateCarousel();
        }, autoplayInterval);
    }

    /**
     * Stop automatic carousel rotation
     */
    function stopAutoplay() {
        if (autoplay) {
            clearInterval(autoplay);
        }
    }

    /**
     * Restart autoplay (useful when user interacts with carousel)
     */
    function restartAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    /**
     * Open modal with blog details
     * @param {Object} blog - Blog object containing title, description, and video
     */
    function openModal(blog) {
        modal.style.display = 'block';
        document.getElementById('blogTitle').innerText = blog.title;
        document.getElementById('blogDescription').innerText = blog.description;

        // Create responsive iframe for video
        document.getElementById('blogVideo').innerHTML = `
            <iframe 
                width="100%" 
                height="315" 
                src="${blog.video}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                loading="lazy">
            </iframe>
        `;

        // Prevent body scrolling when modal is open
        body.style.overflow = 'hidden';
    }

    /**
     * Close modal and clean up
     */
    function closeModalHandler() {
        modal.style.display = 'none';
        document.getElementById('blogVideo').innerHTML = ''; // Remove iframe to stop video
        body.style.overflow = 'auto'; // Restore body scrolling
    }

    /**
     * Setup all event listeners
     */
    function setupEventListeners() {
        // Theme toggle event
        themeToggle.addEventListener('click', toggleTheme);

        // Modal close events
        closeModal.addEventListener('click', closeModalHandler);

        // Close modal when clicking outside of it
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModalHandler();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.style.display === 'block') {
                closeModalHandler();
            }
        });

        // Carousel hover events - pause/resume autoplay
        blogCarousel.addEventListener('mouseenter', stopAutoplay);
        blogCarousel.addEventListener('mouseleave', startAutoplay);

        // Touch events for mobile carousel navigation
        let touchStartX = 0;
        let touchEndX = 0;

        blogCarousel.addEventListener('touchstart', (event) => {
            touchStartX = event.changedTouches[0].screenX;
        });

        blogCarousel.addEventListener('touchend', (event) => {
            touchEndX = event.changedTouches[0].screenX;
            handleSwipe();
        });

        /**
         * Handle swipe gestures on mobile
         */
        function handleSwipe() {
            const swipeThreshold = 50; // Minimum distance for a swipe
            const swipeDistance = touchStartX - touchEndX;

            if (Math.abs(swipeDistance) > swipeThreshold) {
                if (swipeDistance > 0) {
                    // Swipe left - next slide
                    currentSlide = (currentSlide + 1) % blogs.length;
                } else {
                    // Swipe right - previous slide
                    currentSlide = (currentSlide - 1 + blogs.length) % blogs.length;
                }
                updateCarousel();
                restartAutoplay();
            }
        }
    }

    // Initialize the application when DOM is loaded
    init();
});