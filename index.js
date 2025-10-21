const testimonialSwiper = new Swiper('.testimonial-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
 function switchLanguage(lang) {
      const html = document.documentElement;
      const elements = document.querySelectorAll('[data-' + lang + ']');
      const placeholderElements = document.querySelectorAll('[data-' + lang + '-placeholder]');
      
      if (lang === 'ar') {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        document.getElementById('currentLang').textContent = 'ع';
      } else {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        document.getElementById('currentLang').textContent = 'En';
      }
      
      elements.forEach(element => {
        const text = element.getAttribute('data-' + lang);
        if (text) {
          if (element.tagName === 'BUTTON') {
            element.innerHTML = text;
          } else {
            element.textContent = text;
          }
        }
      });
      
      placeholderElements.forEach(element => {
        const placeholder = element.getAttribute('data-' + lang + '-placeholder');
        if (placeholder) {
          element.setAttribute('placeholder', placeholder);
        }
      });
    }
    
    function toggleTheme() {
      const html = document.documentElement;
      const themeIcon = document.getElementById('themeIcon');
      
      if (html.getAttribute('data-bs-theme') === 'dark') {
        html.setAttribute('data-bs-theme', 'light');
        themeIcon.className = 'bi bi-sun-fill';
        localStorage.setItem('theme', 'light');
      } else {
        html.setAttribute('data-bs-theme', 'dark');
        themeIcon.className = 'bi bi-moon-fill';
        localStorage.setItem('theme', 'dark');
      }
    }
    
    // Load saved theme on page load
    document.addEventListener('DOMContentLoaded', function() {
      const savedTheme = localStorage.getItem('theme') || 'light';
      const html = document.documentElement;
      const themeIcon = document.getElementById('themeIcon');
      
      html.setAttribute('data-bs-theme', savedTheme);
      themeIcon.className = savedTheme === 'dark' ? 'bi bi-moon-fill' : 'bi bi-sun-fill';
    });