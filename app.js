let hamburger = document.querySelector('.toggle');
let links = document.querySelector('.links');

hamburger.addEventListener('click', function toggleNav() {
  hamburger.classList.toggle('active')
  links.classList.toggle('activeDisplay')
  
});
