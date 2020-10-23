const button = document.querySelector('.button');

button.addEventListener('click', () => {
    const container = document.querySelector('.container');
    const banner = document.querySelector('.banner');
    const slideshow = document.querySelector('.slideshow-wrapper');
    const slide = document.querySelector('.slideshow');

    container.style.backgroundColor = 'transparent';
    banner.style.display = 'none';
    slideshow.style.opacity = '1';
    slideshow.style.visibility = 'visible';
    slide.style.cssText = 'animation: slideAnim 30s infinite';    
});

