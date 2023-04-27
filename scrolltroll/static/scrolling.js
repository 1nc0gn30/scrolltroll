const image = document.querySelector('.scrolling-image');

window.addEventListener('scroll', () => {
  const offset = window.scrollY;
  const position = offset / 10;
  image.style.transform = `translate(${position}px, 0)`;

  const body = document.querySelector('body');
  const windowHeight = window.innerHeight;
  const imageCount = Math.floor(windowHeight / 200); // Change 200 to adjust the spacing between images

  for (let i = 1; i < imageCount; i++) {
    const clone = image.cloneNode(true);
    clone.style.transform = `translate(${position + i * 30}px, ${i * 30}px)`; // Change 50 to adjust the spacing between images
    body.appendChild(clone);
  }
});
