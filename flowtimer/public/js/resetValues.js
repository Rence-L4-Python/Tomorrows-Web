import { helpers, saveHelpers } from "./helpcounter.js";
import { saveSettings, settings } from "./settings.js";
import { dailyData, weeklyData, monthlyData, yearlyData, renderGraph } from "./graph.js";

export function resetMetrics(){
    helpers.totalTimeWorked = 0;
    helpers.tasksCompleted = 0;
    helpers.longestFocusTime = 0;
    helpers.sessionNumber = 0;
    
    saveHelpers();

    for (let i = 0; i < dailyData.length; i++){
       dailyData[i].worktime = 0;
    }
    for (let i = 0; i < weeklyData.length; i++){
       weeklyData[i].worktime = 0;
    }
    for (let i = 0; i < monthlyData.length; i++){
       monthlyData[i].worktime = 0;
    }
    for (let i = 0; i < yearlyData.length; i++){
       yearlyData[i].worktime = 0;
    }

    localStorage.setItem('dailyData', JSON.stringify(dailyData));
    localStorage.setItem('weeklyData', JSON.stringify(weeklyData))
    localStorage.setItem('monthlyData', JSON.stringify(monthlyData))
    localStorage.setItem('yearlyData', JSON.stringify(yearlyData))
    
    renderGraph();
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