let chartInstance = null;
export function renderGraph(type = 'daily'){
  const ctx = document.getElementById('acquisitions');

  if (chartInstance){
    chartInstance.destroy();
  }

  let data;

  if (type === 'daily'){
    data = [
      { time: '00:00-01:00', worktime: 0 },
      { time: '01:00-02:00', worktime: 0 },
      { time: '02:00-03:00', worktime: 0 },
      { time: '03:00-04:00', worktime: 0 },
      { time: '04:00-05:00', worktime: 0 },
      { time: '05:00-06:00', worktime: 0 },
      { time: '06:00-07:00', worktime: 0 },
      { time: '07:00-08:00', worktime: 30 },
      { time: '08:00-09:00', worktime: 25 },
      { time: '09:00-10:00', worktime: 52 },
      { time: '10:00-11:00', worktime: 47 },
      { time: '11:00-12:00', worktime: 50 },
      { time: '12:00-13:00', worktime: 0 },
      { time: '13:00-14:00', worktime: 60 },
      { time: '14:00-15:00', worktime: 32 },
      { time: '15:00-16:00', worktime: 10 },
      { time: '16:00-17:00', worktime: 10 },
      { time: '17:00-18:00', worktime: 0 },
      { time: '18:00-19:00', worktime: 42 },
      { time: '19:00-20:00', worktime: 47 },
      { time: '20:00-21:00', worktime: 30 },
      { time: '21:00-22:00', worktime: 0 },
      { time: '22:00-23:00', worktime: 0 },
      { time: '23:00-00:00', worktime: 0 },
    ];
  } else if (type === 'weekly'){
    data = [
      { time: 'Monday', worktime: 240 },
      { time: 'Tuesday', worktime: 320 },
      { time: 'Wednesday', worktime: 420 },
      { time: 'Thursday', worktime: 290 },
      { time: 'Friday', worktime: 140 },
      { time: 'Saturday', worktime: 60 },
      { time: 'Sunday', worktime: 20 },
    ]
  } else if (type === 'monthly'){
    data = Array.from({ length: 30}, (_, i) => ({
      time: `Day ${i + 1}`,
      worktime: Math.floor(Math.random() * 300),
    }));
  } else if (type === 'yearly'){
    data = [
      { time: 'January', worktime: 11000 },
      { time: 'February', worktime: 9727 },
      { time: 'March', worktime: 11200 },
      { time: 'April', worktime: 9600 },
      { time: 'May', worktime: 13904 },
      { time: 'June', worktime: 9503 },
      { time: 'July', worktime: 14000 },
      { time: 'August', worktime: 17000 },
      { time: 'September', worktime: 12000 },
      { time: 'October', worktime: 19000 },
      { time: 'November', worktime: 14060 },
      { time: 'December', worktime: 15200 },
    ]
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