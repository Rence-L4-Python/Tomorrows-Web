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
    worktime: 0,
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
  worktime: 0,
}))
const monthlyData = Array.from({ length: daysInMonth }, (_, i) => ({
  time: `Day ${i + 1}`,
  worktime: 0,
}));
const yearlyData = monthNames.map(month => ({
  time: month,
  worktime: 0,
}))

function getDaysInMonth(year, month){
  return new Date(year, month + 1, 0).getDate();
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

window.addEventListener('DOMContentLoaded', () => renderGraph('daily'));