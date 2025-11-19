// Enhanced Website Features
// Sticky Navigation, Email Obfuscation, and other interactive features

(function() {
  'use strict';

  // ==========================================================================
  // STICKY NAVIGATION
  // ==========================================================================
  function initStickyNavigation() {
    const masthead = document.querySelector('.masthead');
    if (!masthead) return;

    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        masthead.classList.add('scrolled');
      } else {
        masthead.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    });
  }

  // ==========================================================================
  // EMAIL OBFUSCATION
  // ==========================================================================
  function initEmailObfuscation() {
    // Method 1: Reverse encoding
    const emailElements = document.querySelectorAll('[data-email]');
    emailElements.forEach(function(element) {
      const encoded = element.getAttribute('data-email');
      const decoded = atob(encoded); // Base64 decode
      
      element.innerHTML = '<a href="mailto:' + decoded + '">' + decoded + '</a>';
    });

    // Method 2: Split encoding
    const emailLinks = document.querySelectorAll('[data-email-user][data-email-domain]');
    emailLinks.forEach(function(element) {
      const user = element.getAttribute('data-email-user');
      const domain = element.getAttribute('data-email-domain');
      const email = user + '@' + domain;
      
      element.setAttribute('href', 'mailto:' + email);
      element.addEventListener('click', function(e) {
        if (!this.hasAttribute('href') || this.getAttribute('href') === '#') {
          e.preventDefault();
          this.setAttribute('href', 'mailto:' + email);
          this.textContent = email;
        }
      });
    });
  }

  // ==========================================================================
  // COPY EMAIL TO CLIPBOARD
  // ==========================================================================
  function initEmailCopy() {
    const emailCopyButtons = document.querySelectorAll('.copy-email');
    emailCopyButtons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const email = this.getAttribute('data-email-full');
        
        // Copy to clipboard
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(email).then(function() {
            showCopyNotification(button);
          });
        } else {
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = email;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.select();
          
          try {
            document.execCommand('copy');
            showCopyNotification(button);
          } catch (err) {
            console.error('Failed to copy email:', err);
          }
          
          document.body.removeChild(textArea);
        }
      });
    });
  }

  function showCopyNotification(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> Copied!';
    button.classList.add('copied');
    
    setTimeout(function() {
      button.innerHTML = originalText;
      button.classList.remove('copied');
    }, 2000);
  }

  // ==========================================================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ==========================================================================
  function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href === '#' || href === '#!') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          
          const offsetTop = target.offsetTop - 80; // Account for sticky nav
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
          
          // Update URL without jumping
          if (history.pushState) {
            history.pushState(null, null, href);
          }
        }
      });
    });
  }

  // ==========================================================================
  // EXTERNAL LINKS - OPEN IN NEW TAB
  // ==========================================================================
  function initExternalLinks() {
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(function(link) {
      const href = link.getAttribute('href');
      
      // Check if link is external
      if (href && (href.startsWith('http://') || href.startsWith('https://')) 
          && !href.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        
        // Add external link icon (optional)
        if (!link.querySelector('.external-icon') && !link.closest('.author__urls')) {
          const icon = document.createElement('i');
          icon.className = 'fas fa-external-link-alt external-icon';
          icon.style.fontSize = '0.7em';
          icon.style.marginLeft = '4px';
          icon.style.opacity = '0.6';
          link.appendChild(icon);
        }
      }
    });
  }

  // ==========================================================================
  // LAZY LOAD IMAGES
  // ==========================================================================
  function initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(function(img) {
        imageObserver.observe(img);
      });
    }
  }

  // ==========================================================================
  // INITIALIZE ALL FEATURES
  // ==========================================================================
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        initStickyNavigation();
        initEmailObfuscation();
        initEmailCopy();
        initSmoothScroll();
        initExternalLinks();
        initLazyLoading();
      });
    } else {
      initStickyNavigation();
      initEmailObfuscation();
      initEmailCopy();
      initSmoothScroll();
      initExternalLinks();
      initLazyLoading();
    }
  }

  // Start initialization
  init();

})();
