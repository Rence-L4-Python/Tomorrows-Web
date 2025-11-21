import {settings, loadSettings, saveSettings} from './settings.js';

window.addEventListener('DOMContentLoaded', () => {
    loadSettings();

    const flowmoratio = document.getElementById('setting-flowmodoro');
    const countdownlength = document.getElementById('setting-countdown');
    const pomolength = document.getElementById('setting-pomodoro');
    const pomoshortbreak = document.getElementById('setting-shortbreak');
    const pomolongbreak = document.getElementById('setting-longbreak');
    const pomosesh = document.getElementById('setting-sessions');
    const currentTimerType = document.getElementById('timerselector');

    if (flowmoratio) flowmoratio.value = settings.fmRatio;
    if (countdownlength) countdownlength.value = settings.cdTimer;
    if (pomolength) pomolength.value = settings.pmLength;
    if (pomoshortbreak) pomoshortbreak.value = settings.pmSB;
    if (pomolongbreak) pomolongbreak.value = settings.pmLB;
    if (pomosesh) pomosesh.value = settings.pmSesh;
    if (currentTimerType) currentTimerType.value = settings.currentTimerType;

    if (flowmoratio) flowmoratio.addEventListener('input', e => {
        settings.fmRatio = Number(e.target.value);
        saveSettings();
    })

    if (countdownlength) countdownlength.addEventListener('input', e => {
        settings.cdTimer = Number(e.target.value);
        saveSettings();
    })

    if (pomolength) pomolength.addEventListener('input', e => {
        settings.pmLength = Number(e.target.value);
        saveSettings();
    })

    if (pomoshortbreak) pomoshortbreak.addEventListener('input', e => {
        settings.pmSB = Number(e.target.value);
        saveSettings();
    })

    if (pomolongbreak) pomolongbreak.addEventListener('input', e => {
        settings.pmLB = Number(e.target.value);
        saveSettings();
    })

    if (pomosesh) pomosesh.addEventListener('input', e => {
        settings.pmSesh = Number(e.target.value);
        saveSettings();
    })

    if (currentTimerType) currentTimerType.addEventListener('change', e => {
        settings.currentTimerType = e.target.value;
        saveSettings();
    })
})