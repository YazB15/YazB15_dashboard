// CHART DOC

'use strict';

var ctx = document.getElementById("myChart").getContext("2d");
var ctx2 = document.getElementById("myChart2").getContext("2d");
var ctx3 = document.getElementById("myChart3").getContext("2d");

var data = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        label: 'Sales',
        data: [
            5, 2, 4, 10, 6, 5, 15
        ],
        backgroundColor: '#1864ab'
      },
      {
        label: 'Orders',
        data: [
            0, 4, 7, 2, 7, 9, 0
        ],
        backgroundColor: '#74c0fc'
      }
    ]
}

var data2 = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        label: 'Sales',
        data: [
            0, 2, 7, 12, 6, 4, 9
        ],
        backgroundColor: '#1864ab'
      },
      {
        label: 'Orders',
        data: [
            0, 0, 3, 7, 2, 5, 0
        ],
        backgroundColor: '#74c0fc'
      }
    ]
}
var data3 = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        label: 'Sales',
        data: [
            2, 6, 3, 8, 2, 5, 12
        ],
        backgroundColor: '#1864ab'
      },
      {
        label: 'Orders',
        data: [
            0, 1, 3, 7, 2, 0, 2
        ],
        backgroundColor: '#74c0fc'
      }
    ]
}

var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                },
              
            }]
        }
    }
});

var myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: data2,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                },
              
            }]
        }
    }
});


var myChart3 = new Chart(ctx3, {
    type: 'bar',
    data: data3,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                },
              
            }]
        }
    }
});