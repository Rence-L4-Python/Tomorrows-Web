import { settingsHelper, loadSettings } from "./settings.js";

let timerInterval = null;
let isRunning = false;
let remainingTime;
let totalTime;
let circle = null;
let playButton = null;
let timerSelect = null;
let container= null;
let sessionNumber = 1;

// formatting text inside timer, MM:SS format

function formatTime(seconds){
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    const mm = String(mins).padStart(2, '0');
    const ss = String(secs).padStart(2, '0');

    return `${mm}:${ss}`;
  }

// start timer
export function startTimer(){
  if (isRunning){
    pauseTimer();
    return;
  }

  isRunning = true;
  playButton.querySelector('img').src = 'media/pause-button.svg';

  timerInterval = setInterval(function(){
    circle.set(1 - remainingTime / totalTime);
    circle.setText(formatTime(remainingTime));

    if (remainingTime <= 0){
      remainingTime = 0;
      clearInterval(timerInterval);
      isRunning = false;
      playButton.querySelector('img').src = 'media/play-button.svg';

      if (timerSelect.value !== 'timer-countdown'){
        showSessionFinishModal(sessionNumber);
        sessionNumber++;
      }

      return;
    }

    remainingTime--;
  }, 1000) // runs every second, so remainingTime decreases by 1 every second
}

// pause timer
export function pauseTimer(){
  clearInterval(timerInterval);
  isRunning = false;
  playButton.querySelector('img').src = 'media/play-button.svg';
}

// restart timer
function restartTimer(){
  clearInterval(timerInterval);
  remainingTime = totalTime;
  circle.set(0);
  circle.setText(formatTime(remainingTime));
  isRunning = false;
  playButton.querySelector('img').src = 'media/play-button.svg';
}

  // finish timer
  function finishTimer(){
    clearInterval(timerInterval);
    remainingTime = 0;
    circle.set(1);
    circle.setText(formatTime(remainingTime));
    isRunning = false;
    playButton.querySelector('img').src = 'media/play-button.svg';
    
    if (timerSelect.value !== 'timer-countdown'){
      showSessionFinishModal(sessionNumber);
      sessionNumber++;
    }
  }

  // when finished, display a message/modal that the timer is complete. Should be clicked to dismiss.
  function showSessionFinishModal(sessionNumber){
    const template = document.getElementById('session-finish-template');
    const modal = template.content.cloneNode(true);

    document.body.appendChild(modal);
  
    const overlay = document.querySelector('.modal-overlay');
    const modalText = overlay.querySelector('.modal-text');
    const startBreakButton = overlay.querySelector('#start-break-btn');
    const skipBreakButton = overlay.querySelector('#skip-break-btn');

    modalText.textContent = `Session ${sessionNumber} is over!`;

    startBreakButton.addEventListener('click', () =>{
      overlay.remove();
      startBreak();
    })

    skipBreakButton.addEventListener('click', () =>{
      overlay.remove();
      restartTimer();
    })
  }

    function updateTimerMode(selected){
    remainingTime = getTimerDuration(selected);
    totalTime = remainingTime;

    if(circle){
      circle.set(0);
      circle.setText(formatTime(remainingTime));
    }
  }

  // init progress bar circle

  function initializeCircle(){
    circle = new ProgressBar.Circle(container, {
      strokeWidth: 3,
      trailWidth: 3,
      color: '#00bcd4',
      trailColor: '#FFF',
      easing: 'linear',
      duration: 1000,
      text:{
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
    })
    circle.set(0);
  }

    function getTimerDuration(selected){
    switch(selected){
      case "timer-flowmodoro":
        return 0;
      case "timer-pomodoro":
        return settingsHelper('pmLength') * 60;
      case "timer-countdown":
        return settingsHelper('cdTimer');
      default:
        return 0;
    }
  }

// attempt at reworking

window.addEventListener('DOMContentLoaded', () => {
  loadSettings(); 

  container = document.querySelector('#timer');
  playButton = document.getElementById('play-btn');
  const restartButton = document.getElementById('restart-btn');
  const finishButton = document.getElementById('finish-btn');
  timerSelect = document.getElementById('timerselector');

  // make timer selection work and display different times based on selection
  if (timerSelect){
    timerSelect.value = settingsHelper('currentTimerType', 'timer-flowmodoro');
  }

  remainingTime = getTimerDuration(timerSelect.value);
  totalTime = remainingTime;

  // 

  timerSelect.addEventListener('change', () =>{
    const selected = timerSelect.value;
    updateTimerMode(selected);
  })

  // initialize break when startBreakButton is clicked
  function startBreak(){}
  
  initializeCircle();
  playButton.addEventListener('click', startTimer);
  restartButton.addEventListener('click', restartTimer);
  finishButton.addEventListener('click', finishTimer);
})