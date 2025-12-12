let settings = {
    fmRatio: 5, // Flowmodoro Ratio
    cdTimer: 60, // Countdown Timer
    pmLength: 25, // Pomodoro Length
    pmSB: 5, // Pomodoro short break
    pmLB: 15, // Pomodoro Long break
    pmSesh: 4, // Pomodoro Sessions until Long Break
    themeIndex: 0, // Background image
    currentTimerType: 'timer-flowmodoro' // Default timer
}

export{settings};

// localStorage functionalities for the app to work
export function saveSettings(){
    localStorage.setItem('timerSettings', JSON.stringify(settings));
}

export function loadSettings(){
    const saved = localStorage.getItem('timerSettings');
    if (saved){
        Object.assign(settings, JSON.parse(saved));
    }
}

export function settingsHelper(key, defaultValue){
    loadSettings();
    if (settings[key] !== undefined){
        return settings[key];
    }
    else{
        return defaultValue;
    }
}