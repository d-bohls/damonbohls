
document.addEventListener(
  'DOMContentLoaded',
  function ()
  {
    particleground(
      document.getElementById('particles'),
      {
        dotColor: '#5cbdaa80',
        lineColor: '#5cbdaa80',
        density: 8000,
      });
  },
  false);