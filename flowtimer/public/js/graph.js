import { helpers, loadHelpers } from './helpcounter.js';
import { resetMetrics } from './resetMetrics.js'; 
import { formatHMS } from './timeFormat.js';

let chartInstance = null;
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const daysInMonth = getDaysInMonth(year, month);
//////////

const dailyData = Array.from({ length: 24 }, (_, hour) => {
  const start = String(hour).padStart(2,'0');
  const end = String((hour + 1) % 24).padStart(2,'0');

  return{
    time: `${start}:00-${end}:00`,
    worktime: Math.floor(Math.random() * 61), // placeholder random data
  }
});

const weekdayNames = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
]
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]

const weeklyData = weekdayNames.map(day => ({
  time: day,
  worktime: Math.floor(Math.random() * 421), // placeholder random data
}))
const monthlyData = Array.from({ length: daysInMonth }, (_, i) => ({
  time: `Day ${i + 1}`,
  worktime: Math.floor(Math.random() * 421), // placeholder random data
}));
const yearlyData = monthNames.map(month => ({
  time: month,
  worktime: Math.floor(Math.random() * 12631), // placeholder random data
}))

function getDaysInMonth(year, month){
  return new Date(year, month + 1, 0).getDate();
}

//////////

function currentDateInfo(){
  const format = now.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  document.getElementById('currentworkday').textContent = `(${format})`;
}

function loadDatafromHelpers(){
  document.getElementById('timeworked').textContent = formatHMS(helpers.totalTimeWorked);
  document.getElementById('numtaskcompleted').textContent = helpers.tasksCompleted;
  document.getElementById('longestfocustime').textContent = formatHMS(helpers.longestFocusTime);
  document.getElementById('amntsessions').textContent = helpers.sessionNumber;
}

//////////
export function renderGraph(type = 'daily'){
  const ctx = document.getElementById('acquisitions');

  if (chartInstance){
    chartInstance.destroy();
  }

  let data;

  if (type === 'daily'){
    data = dailyData;
  } else if (type === 'weekly'){
    data = weeklyData;
  } else if (type === 'monthly'){
    data = monthlyData;
  } else if (type === 'yearly'){
    data = yearlyData;
  }

  chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(row => row.time),
      datasets: [
        {
          label: 'Total time worked in minutes',
          data: data.map(row => row.worktime),
          backgroundColor: '#4F46E5',
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const resetButton = document.getElementById('resetMetricsButton')
  resetButton.addEventListener("click", () => {
    if (window.confirm("Do you really want to reset your data? This will clear EVERYTHING on the metrics page!")) {
      resetMetrics();
      loadDatafromHelpers();
    }
  })
  renderGraph('daily');
  currentDateInfo();
  loadHelpers();
  loadDatafromHelpers();
})