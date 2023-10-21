google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
    // Data for the income chart
    var incomeData = google.visualization.arrayToDataTable([
        ['', ''],
        ['July', 1000],
        ['August', 1170],
        ['September', 660],
        ['October', 1030]
    ]);

    var incomeOptions = {
        chart: {
            title: 'Income',
            subtitle: 'Past 4 Months',
        },
        backgroundColor: '#17171f',
        chartArea: {
            backgroundColor: '#17171f',
        },
        series: {
            0: {
                color: '#4ceda5',
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

    var expenseData = google.visualization.arrayToDataTable([
        ['', ''],
        ['July', 211],
        ['August', 440],
        ['September', 120],
        ['October', 394]
    ]);

    var expenseOptions = {
        chart: {
            title: 'Expenses',
            subtitle: 'Past 4 Months',
        },
        backgroundColor: '#17171f',
        chartArea: {
            backgroundColor: '#17171f',
        },
        series: {
            0: {
                color: '#eb5e5e', 
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

    var incomeChart = new google.charts.Bar(document.getElementById('incomeChart'));
    incomeChart.draw(incomeData, google.charts.Bar.convertOptions(incomeOptions));

    var expenseChart = new google.charts.Bar(document.getElementById('expenseChart'));
    expenseChart.draw(expenseData, google.charts.Bar.convertOptions(expenseOptions));
}
