        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;

        // Check for saved user preference
        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('dark-mode');
            themeToggle.classList.add('active');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            themeToggle.classList.toggle('active');

            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });

        // Mobile Menu Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Close mobile menu if open
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Scroll to Top Button
        const scrollTopBtn = document.getElementById('scrollTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        });
        
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Language Toggle
        const languageToggle = document.getElementById('languageToggle');
        const languageOptions = document.getElementById('languageOptions');
        
        languageToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            languageOptions.classList.toggle('active');
        });
        
        document.addEventListener('click', (e) => {
            if (!languageToggle.contains(e.target) && !languageOptions.contains(e.target)) {
                languageOptions.classList.remove('active');
            }
        });
        
        const languageOptionsList = document.querySelectorAll('.language-option');
        
        languageOptionsList.forEach(option => {
            option.addEventListener('click', () => {
                // Remove active class from all options
                languageOptionsList.forEach(opt => opt.classList.remove('active'));
                // Add active class to clicked option
                option.classList.add('active');
                
                // Change language
                const lang = option.getAttribute('data-lang');
                if (lang === 'ne') {
                    body.classList.add('language-nepali');
                } else {
                    body.classList.remove('language-nepali');
                }
                
                // Close dropdown
                languageOptions.classList.remove('active');
            });
        });

        // Create floating particles
        const particlesContainer = document.getElementById('particles');
        const particleCount = 20;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random size between 2px and 6px
            const size = Math.random() * 4 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random position
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Random animation duration between 10s and 20s
            const duration = Math.random() * 10 + 10;
            particle.style.animationDuration = `${duration}s`;
            
            // Random delay
            particle.style.animationDelay = `${Math.random() * 10}s`;
            
            particlesContainer.appendChild(particle);
        }

        // Animate elements when scrolling
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.section-title, .services-grid, .portfolio-grid, .testimonial-slider');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.style.animation = 'fadeInUp 1s forwards';
                }
            });
        };
        
        window.addEventListener('scroll', animateOnScroll);
        // Run once on page load
        animateOnScroll();