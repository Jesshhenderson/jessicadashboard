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
var gradient2017 = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
gradient2017.addColorStop(0, '#CB654F');
gradient2017.addColorStop(1, '#CB904F');

// Gradient color - previous week
var gradient2018 = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
gradient2018.addColorStop(0, '#E9C157');
gradient2018.addColorStop(1, '#EED38A');


var config = {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
              label: '2017',
              data: [50, 60, 55, 51, 47, 53, 50, 48, 41, 46, 62, 71],
              backgroundColor: gradient2017,
              borderColor: 'transparent',
              pointBackgroundColor: '#FFFFFF',
              pointBorderColor: '#FFFFFF',
              lineTension: 0.40,
          },
          {
              label: '2018',
              data: [68, 79, 72, 69, 58, 69, 67, 66],
              backgroundColor: gradient2018,
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