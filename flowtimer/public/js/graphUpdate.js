import { dailyData, weeklyData, monthlyData, yearlyData } from "./graph.js";

export function addWorkTime(elapsed){
    const minutes = Math.floor(elapsed / 60);
    if (minutes <= 0) return;

    const now = new Date();
    const hour = now.getHours();
    const weekday = now.getDay() - 1;
    const dayOfMonth = now.getDate() - 1;
    const month = now.getMonth();

    dailyData[hour].worktime += minutes;
    weeklyData[weekday].worktime += minutes;
    monthlyData[dayOfMonth].worktime += minutes;
    yearlyData[month].worktime += minutes;

    localStorage.setItem('dailyData', JSON.stringify(dailyData));
    localStorage.setItem('weeklyData', JSON.stringify(weeklyData));
    localStorage.setItem('monthlyData', JSON.stringify(monthlyData));
    localStorage.setItem('yearlyData', JSON.stringify(yearlyData));
}