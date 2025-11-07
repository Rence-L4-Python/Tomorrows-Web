window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#timer');

  const circle = new ProgressBar.Circle(container, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 5000,
    color: '#00bcd4',
    trailColor: '#eee',
    trailWidth: 6,
  });

  circle.set(0);

  circle.animate(1.0);

  // testing only, loop every 6 seconds
  setInterval(() => {
    circle.set(0);
    circle.animate(1);
  }, 6000);
});
