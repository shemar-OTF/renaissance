// Het menu gebruikt op desktop en mobiel dezelfde navigatielinks.
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');
const mobileViewport = window.matchMedia('(max-width: 760px)');

if (menuToggle && navigation) {
  document.documentElement.classList.add('js');
  menuToggle.hidden = false;

  function setMenuOpen(isOpen) {
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.querySelector('.menu-label').textContent = isOpen ? 'Sluiten' : 'Menu';
    navigation.classList.toggle('is-open', isOpen);
  }

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!isOpen);
  });

  // Na het kiezen van een pagina blijft het mobiele menu niet in beeld staan.
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      setMenuOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header')) {
      setMenuOpen(false);
    }
  });

  // Sluit ook bij wisselen tussen mobiel en desktop, zodat de status klopt.
  mobileViewport.addEventListener('change', () => {
    const focusWasInNavigation = navigation.contains(document.activeElement);
    setMenuOpen(false);
    if (mobileViewport.matches && focusWasInNavigation) {
      menuToggle.focus();
    }
  });
}

// De slideshow wisselt automatisch elke 6,5 seconde, met pijlen en diakeuze.
const slideshow = document.querySelector('.slideshow');

if (slideshow) {
  const slides = [...slideshow.querySelectorAll('.slide')];
  const dots = [...slideshow.querySelectorAll('.slide-dot')];
  const controls = slideshow.querySelector('.slideshow-controls');
  const status = slideshow.querySelector('#slide-status');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activeSlide = 0;
  let hasKeyboardFocus = false;
  let timer = null;

  function scheduleSlideshow() {
    window.clearInterval(timer);
    timer = null;
    if (!reducedMotion.matches && !hasKeyboardFocus && !document.hidden) {
      timer = window.setInterval(() => showSlide(activeSlide + 1), 6500);
    }
  }

  function showSlide(index, isManual = false) {
    // Door modulo ga je vanaf de laatste dia weer naar de eerste, en andersom.
    activeSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.hidden = i !== activeSlide; });
    dots.forEach((dot, i) => { dot.setAttribute('aria-pressed', String(i === activeSlide)); });

    // Automatische wisselingen geven geen steeds terugkerende schermlezermelding.
    if (isManual) {
      scheduleSlideshow();
      status.textContent = `Dia ${slides[activeSlide].getAttribute('aria-label')}`;
    }
  }

  slideshow.querySelector('#previous-slide').addEventListener('click', () => showSlide(activeSlide - 1, true));
  slideshow.querySelector('#next-slide').addEventListener('click', () => showSlide(activeSlide + 1, true));
  dots.forEach((dot) => {
    dot.addEventListener('click', () => showSlide(Number(dot.dataset.slide), true));
  });

  slideshow.addEventListener('focusin', (event) => {
    // Bij toetsenbordfocus blijft de dia rustig staan; daarna loopt hij weer door.
    hasKeyboardFocus = event.target.matches(':focus-visible');
    scheduleSlideshow();
  });
  slideshow.addEventListener('focusout', (event) => {
    if (!slideshow.contains(event.relatedTarget)) {
      hasKeyboardFocus = false;
      scheduleSlideshow();
    }
  });
  controls.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showSlide(activeSlide + (event.key === 'ArrowRight' ? 1 : -1), true);
    }
  });
  document.addEventListener('visibilitychange', scheduleSlideshow);
  reducedMotion.addEventListener('change', scheduleSlideshow);

  controls.hidden = false;
  scheduleSlideshow();
}
