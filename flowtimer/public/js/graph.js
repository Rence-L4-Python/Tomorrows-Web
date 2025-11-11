(async function() {
  const data = [
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

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.time),
        datasets: [
          {
            label: 'Total time worked in minutes',
            data: data.map(row => row.worktime)
          }
        ]
      }
    }
  );
})();
