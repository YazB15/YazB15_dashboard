'use strict';
var canvas = document.getElementById("sales-canvas");
// Apply multiply blend when drawing datasets
var multiply = {
  beforeDatasetsDraw: function(chart, options, el) {
    chart.ctx.globalCompositeOperation = 'multiply';
  },
  afterDatasetsDraw: function(chart, options) {
    chart.ctx.globalCompositeOperation = 'source-over';
  },
};

// Gradient color - this week
var gradientThisWeek = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
gradientThisWeek.addColorStop(0, '#1864ab');
gradientThisWeek.addColorStop(1, '#1864ab');

// Gradient color - previous week
var gradientPrevWeek = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
gradientPrevWeek.addColorStop(0, '#3b5bdb');
gradientPrevWeek.addColorStop(1, '#3b5bdb');


var config = {
    type: 'bar',
    data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
              label: 'This month',
              data: [89, 50, 102, 64],
              backgroundColor: gradientThisWeek,
              borderColor: 'transparent',
              pointBackgroundColor: '#FFFFFF',
              pointBorderColor: '#FFFFFF',
              lineTension: 0.40,
          },
          {
              label: 'Previous month',
              data: [105, 60, 45, 28],
              backgroundColor: gradientPrevWeek,
              borderColor: 'transparent',
              pointBackgroundColor: '#FFFFFF',
              pointBorderColor: '#FFFFFF',
              lineTension: 0.40,
          }
        ]
    },
    options: {
    		elements: { 
        	point: {
          	radius: 0,
          	hitRadius: 5, 
            hoverRadius: 5 
          } 
        },
    		legend: {
        		display: true,
        },
        scales: {
            xAxes: [{
            		display: true,
            }],
            yAxes: [{
            		display: true,
                ticks: {
                	beginAtZero: true,
              	},
            }]
        }
    },
    plugins: [multiply],
};

window.chart = new Chart(canvas, config);