
    const elements = document.querySelectorAll('.menu-item, .about p, .contact-form');

    
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);  
            }
        });
    };

   
    const observer = new IntersectionObserver(callback, options);

   
    elements.forEach(element => {
        observer.observe(element);
    });

    
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
