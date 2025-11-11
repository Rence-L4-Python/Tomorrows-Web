// background
const img = new Image();
img.src = 'media/daniel-leone-unsplash.jpg';
img.onload = function(){
  const main = document.querySelector('main');
  main.style.backgroundImage = `url('${img.src}')`;
}