var canvas = document.getElementById("sales-by-day");
var jsonfile = {
    "jsonarray": [{
        "day": "Week 1",
        "sales": 89
    }, {
        "day": "Week 2",
        "sales": 50
    }, {
        "day": "Week 3",
        "sales": 102
    }, {
        "day": "Week 4",
        "sales": 64
    
    }]
};

var labels = jsonfile.jsonarray.map(function (e) {
    return e.day;
});
var data = jsonfile.jsonarray.map(function (e) {
    return e.sales;
});;

var ctx = canvas.getContext('2d');
var config = {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Total sales for month',
            data: data,
            backgroundColor: '#3b5bdb'
            
        }]
    }
};

var chart = new Chart(ctx, config);

