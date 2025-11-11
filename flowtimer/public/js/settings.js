let fmRatio = 5; // Flowmodoro Ratio
let cdTimer = 60; // Countdown Timer
let pmLength = 25; // Pomodoro Length
let pmSB = 5; // Pomodoro short break
let pmLB = 15; // Pomodoro Long break
let pmSesh = 4; // Pomodoro Sessions until Long Break

let settings = {
    fmRatio,
    cdTimer,
    pmLength,
    pmSB,
    pmLB,
    pmSesh
}

export{settings};

export function saveSettings(){
    localStorage.setItem('timerSettings', JSON.stringify(settings));
}

export function loadSettings(){
    const saved = localStorage.getItem('timerSettings');
    if (saved){
        Object.assign(settings, JSON.parse(saved));
    }
}