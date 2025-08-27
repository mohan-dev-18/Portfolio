 // Mobile menu toggle
        const menuToggle = document.getElementById('menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('change', function () {
            if (this.checked) {
                navLinks.classList.add('active');
                document.body.style.overflow = 'hidden';
            } else {
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.checked = false;
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Tab functionality
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        function activateTab(tabId) {
            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to selected tab
            document.getElementById(tabId).classList.add('active');

            // Trigger animations for the newly active tab
            const activeElements = document.querySelectorAll(`#${tabId} .slide-up, #${tabId} .zoom-in, #${tabId} .rotate-in`);
            activeElements.forEach(el => {
                el.classList.add('show');
            });
        }

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                activateTab(tabId);
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Scroll animations
        const fadeElements = document.querySelectorAll('.fade-in');
        const slideElements = document.querySelectorAll('.slide-up');
        const zoomElements = document.querySelectorAll('.zoom-in');
        const rotateElements = document.querySelectorAll('.rotate-in');

        function checkScroll() {
            // Fade in elements
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight - 100) {
                    element.classList.add('show');
                }
            });

            // Slide up elements
            slideElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight - 100) {
                    element.classList.add('show');
                }
            });

            // Zoom in elements
            zoomElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight - 100) {
                    element.classList.add('show');
                }
            });

            // Rotate in elements
            rotateElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight - 100) {
                    element.classList.add('show');
                }
            });
        }

        // Initialize animations on load
        window.addEventListener('load', function () {
            checkScroll();
            // Activate the first tab by default
            activateTab('about-tab');
        });

        // Check on scroll
        window.addEventListener('scroll', checkScroll);

        // WhatsApp contact form submission
        const contactForm = document.getElementById('contactForm');

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
            const whatsappUrl = `https://wa.me/919025446568?text=${whatsappMessage}`;

            window.open(whatsappUrl, '_blank');

            // Reset form
            contactForm.reset();

            // Show success message
            alert('Thank you for your message! You will be redirected to WhatsApp.');
        });