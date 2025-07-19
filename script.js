// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
//nav
const nav = document.querySelector('.nav-container');

        // Fade in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Header scroll effect
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            const header = document.querySelector('.header');
            
            if (currentScroll > 100) {
                header.style.background = 'rgba(161, 160, 160, 0.26)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = 'linear-gradient(135deg, #efefefa6 0%, #b7d1d69b 100%)';
                header.style.backdropFilter = 'none';
            }
            
            lastScroll = currentScroll;
        });
        

        // Form submission
      //  document.querySelector('form').addEventListener('submit', function(e) {
            
          //  alert('Thank you for your message! We will contact you within 24 hours to discuss your data recovery needs.');
      //  });
        var form = document.getElementById('db-form');
form.addEventListener("submit", e => {
e.preventDefault();
fetch(form.action, {
method: "POST",
body: new FormData (document.getElementById("db-form")),
}).then(
response => response.json()
)
.then((html) => {
alert('Submitted !!Thank you ' + document.getElementById('uname').value)
window.location.href = '';
location.reload();
});
});

        // Add dynamic animations
        const cards = document.querySelectorAll('.service-card, .badge, .testimonial');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
        //cliek feature on product cards
        
        document.querySelectorAll('.device-card').forEach(card => {
            card.addEventListener('click', () => {
                console.log("clik");
                
                document.querySelector('.afterselect').style.display = 'block';
            });
        });
         document.querySelectorAll('.btn').forEach(card => {
            card.addEventListener('click', () => {
                console.log("clik");
                
                document.querySelector('.afterselect').style.display = 'none';
            });
        });