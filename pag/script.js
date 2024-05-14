window.onload = function() {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');

    images.forEach(img => {
        const clone = img.cloneNode(true);
        carousel.appendChild(clone);
    });
}