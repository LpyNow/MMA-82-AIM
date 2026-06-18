window.HELP_IMPROVE_VIDEOJS = false;

const GITHUB_STAR_BADGE_JSON_URL = 'https://img.shields.io/github/stars/LpyNow/MMA-82.json';

function toggleMoreWorks() {
  const dropdown = document.getElementById('moreWorksDropdown');
  const button = document.querySelector('.more-works-btn');

  if (!dropdown || !button) {
    return;
  }

  dropdown.classList.toggle('show');
  button.classList.toggle('active');
}

function setCopyButtonState(button, copied) {
  const copyText = button ? button.querySelector('.copy-text') : null;

  if (!button || !copyText) {
    return;
  }

  button.classList.toggle('copied', copied);
  copyText.textContent = copied ? 'Copied' : 'Copy';
}

function fallbackCopyText(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.setAttribute('readonly', '');
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}

function copyBibTeX() {
  const bibtexElement = document.getElementById('bibtex-code');
  const button = document.querySelector('.copy-bibtex-btn');

  if (!bibtexElement || !button) {
    return;
  }

  const bibtexText = bibtexElement.textContent.trim();
  const showCopiedState = () => {
    setCopyButtonState(button, true);
    window.setTimeout(() => setCopyButtonState(button, false), 2000);
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(bibtexText).then(showCopiedState).catch(() => {
      fallbackCopyText(bibtexText);
      showCopiedState();
    });
    return;
  }

  fallbackCopyText(bibtexText);
  showCopiedState();
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function setupScrollToTopButton() {
  const scrollButton = document.querySelector('.scroll-to-top');

  if (!scrollButton) {
    return;
  }

  const toggleScrollButton = () => {
    scrollButton.classList.toggle('visible', window.pageYOffset > 300);
  };

  toggleScrollButton();
  window.addEventListener('scroll', toggleScrollButton, { passive: true });
}

function setupVideoAutoplayWhenVisible() {
  const videos = document.querySelectorAll('video[autoplay]');

  if (!videos.length || !('IntersectionObserver' in window)) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;

      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.5 });

  videos.forEach((video) => observer.observe(video));
}

function setupMoreWorksDismissal() {
  document.addEventListener('click', (event) => {
    const container = document.querySelector('.more-works-container');
    const dropdown = document.getElementById('moreWorksDropdown');
    const button = document.querySelector('.more-works-btn');

    if (container && dropdown && button && !container.contains(event.target)) {
      dropdown.classList.remove('show');
      button.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (event) => {
    const dropdown = document.getElementById('moreWorksDropdown');
    const button = document.querySelector('.more-works-btn');

    if (event.key === 'Escape' && dropdown && button) {
      dropdown.classList.remove('show');
      button.classList.remove('active');
    }
  });
}

function setupGitHubStarCount() {
  const countElement = document.getElementById('github-star-count');

  if (!countElement || !window.fetch) {
    return;
  }

  window.fetch(GITHUB_STAR_BADGE_JSON_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Unable to load GitHub star badge');
      }

      return response.json();
    })
    .then((badge) => {
      const starCount = badge.message || badge.value;

      if (!starCount) {
        throw new Error('Missing GitHub star count');
      }

      countElement.textContent = starCount;
      countElement.setAttribute('aria-label', `${starCount} GitHub stars`);
    })
    .catch(() => {
      countElement.textContent = '--';
    });
}

document.addEventListener('DOMContentLoaded', () => {
  setupScrollToTopButton();
  setupVideoAutoplayWhenVisible();
  setupMoreWorksDismissal();
  setupGitHubStarCount();

  if (window.bulmaSlider && typeof window.bulmaSlider.attach === 'function') {
    window.bulmaSlider.attach();
  }
});
