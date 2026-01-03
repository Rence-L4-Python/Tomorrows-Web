export const helpers = {
    totalTimeWorked: 0,
    tasksCompleted: 0,
    longestFocusTime: 0,
    sessionNumber: 0,
}

export function saveHelpers(){
    localStorage.setItem('helpers', JSON.stringify(helpers));
}
export function loadHelpers(){
    const data = localStorage.getItem('helpers');
    if (data){
        Object.assign(helpers, JSON.parse(data));
    }
}