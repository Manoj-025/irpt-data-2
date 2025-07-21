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

 // Open popup on card click
    document.querySelectorAll('.service-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelector('#popupModal').style.display = 'flex';
        showStep(0); // Reset to step 1
      });
    });

    // Close popup
    document.querySelector('#closePopup').addEventListener('click', () => {
      document.querySelector('#popupModal').style.display = 'none';
    });

    // Form steps logic 
    let current = 0;
    const steps = document.querySelectorAll('.step');
    const sections = document.querySelectorAll('.step-section');

    function showStep(index) {
      sections.forEach(sec => sec.classList.remove('active'));
      sections[index].classList.add('active');

      steps.forEach((step, i) => {
        step.classList.remove('active', 'completed');
        if (i < index) step.classList.add('completed');
        if (i === index) step.classList.add('active');
      });
      current = index;
    }

    document.querySelectorAll('.next').forEach(btn => {
      btn.addEventListener('click', () => {
        if (current < sections.length - 1) showStep(current + 1);
      });
    });

    document.querySelectorAll('.prev').forEach(btn => {
      btn.addEventListener('click', () => {
        if (current > 0) showStep(current - 1);
      });
    });

    // Option select toggle
    document.querySelectorAll('.options').forEach(group => {
      const options = group.querySelectorAll('.option');
      options.forEach(option => {
        option.addEventListener('click', () => {
          options.forEach(o => o.classList.remove('active'));
          option.classList.add('active');
        });
      });
    });

// form summition




// Form submission
//  document.querySelector('form').addEventListener('submit', function(e) {

//  alert('Thank you for your message! We will contact you within 24 hours to discuss your data recovery needs.');
//  });
var form = document.getElementById('submit');
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("submit")),
    }).then(
        response => response.json()
    )
        .then((html) => {
            alert('Submitted !!Thank you ' + document.getElementById('uname').value)
            window.location.href = '';
            location.reload();
        });
});
var form = document.getElementById('db-form');
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("db-form")),
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
