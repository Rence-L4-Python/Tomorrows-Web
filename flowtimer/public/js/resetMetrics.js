import { helpers, saveHelpers } from "./helpcounter.js";

export function resetMetrics(){
    helpers.totalTimeWorked = 0;
    helpers.tasksCompleted = 0;
    helpers.longestFocusTime = 0;

    saveHelpers();
}