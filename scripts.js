
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
    ['Year', 'Income'],
    ['July', 1000],
    ['August', 1170],
    ['September', 660],
    ['October', 1030]
]);

var options = {

    chart: {
    title: 'Income Overview',
    subtitle: 'July 2023 - October 2023',
    },

    backgroundColor: '#17171f',

    chartArea: {
    backgroundColor: '#17171f',
    },

    series: {
    0: {
        color: '#5a5ac4',
    },
    },

    bar: { groupWidth: "20%" },
    legend: { position: "none" },
    vAxis: {
    gridlines: {
        color: '#333', 
        },
    },
};

var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
chart.draw(data, google.charts.Bar.convertOptions(options));
}
