function updateCSSVariables() {
    const cloud = document.querySelector('.cloud');
    const cloudWidth = cloud.offsetWidth;
    const windowWidth = window.innerWidth;
    const startMargin = -cloudWidth;
    const endMargin = windowWidth;

    // Update CSS variables
    document.documentElement.style.setProperty('--start-margin', `${startMargin}px`);
    document.documentElement.style.setProperty('--end-margin', `${endMargin}px`);
  }

  // Call the function on page load and window resize
  window.addEventListener('load', updateCSSVariables);
  window.addEventListener('resize', updateCSSVariables);