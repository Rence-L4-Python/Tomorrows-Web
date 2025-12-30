import { helpers, saveHelpers } from "./helpcounter.js";
import { saveSettings, settings } from "./settings.js";

export function resetMetrics(){
    helpers.totalTimeWorked = 0;
    helpers.tasksCompleted = 0;
    helpers.longestFocusTime = 0;
    helpers.sessionNumber = 0;
    
    saveHelpers();
}

export function resetSettings(){
    settings.fmRatio = 5;
    settings.cdTimer = 60;
    settings.pmLength = 1500;
    settings.pmSB = 300;
    settings.pmLB = 900;
    settings.pmSesh = 4;
    
    saveSettings();
}