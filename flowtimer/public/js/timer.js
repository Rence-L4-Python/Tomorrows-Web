window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#timer');
  const playButton = document.querySelector('.timerbuttons button:nth-child(2)');
  const restartButton = document.querySelector('.timerbuttons button:nth-child(1)');

  const totalTime = 25 * 60;
  let remainingTime = totalTime;
  let timerInterval = null;
  let isRunning = false;

  const circle = new ProgressBar.Circle(container, {
    strokeWidth: 3,
    easing: 'linear',
    duration: remainingTime * 1000,
    color: '#00bcd4',
    trailColor: '#eee',
    trailWidth: 3,
    text: {
      value: formatTime(remainingTime),
      className: 'progress-text',
      style: {
        color: '#FFFFFF',
        position: 'absolute',
        left: '50%',
        top: '50%',
        padding: 0,
        margin: 0,
        transform: 'translate(-50%, -50%)',
        fontSize: '24px',
      }
    }
  });

  circle.set(0);

  // formatting text inside timer 
  function formatTime(seconds){
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function startTimer(){
    if(!isRunning){
      timerInterval = setInterval(() => {
        remainingTime--;
        if (remainingTime <= 0){
          remainingTime = 0;
          clearInterval(timerInterval);
          isRunning = false;
          playButton.querySelector('img').src = 'media/play-button.svg';
        }
        circle.set(1 - remainingTime / totalTime);
        circle.setText(formatTime(remainingTime));
      }, 1000);
      isRunning = true;
      playButton.querySelector('img').src = 'media/pause-button.svg';
    } else{
      pauseTimer();
    }
  }

  function pauseTimer(){
    clearInterval(timerInterval);
    isRunning = false;
    playButton.querySelector('img').src = 'media/play-button.svg';
  }

  function restartTimer(){
    clearInterval(timerInterval);
    remainingTime = totalTime;
    circle.set(0);
    circle.setText(formatTime(remainingTime));
    isRunning = false;
    playButton.querySelector('img').src = 'media/play-button.svg';
  }

  playButton.addEventListener('click', startTimer);
  restartButton.addEventListener('click', restartTimer);
});
