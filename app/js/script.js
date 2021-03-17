console.log("Hej smukke!");
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        //TODO tilføj flere barcharts der tilhører 1 label https://jsfiddle.net/ytkqwL9x/1/ --> https://stackoverflow.com/questions/44284889/chartjs-multiple-barcharts-corresponding-to-one-label
        labels: ['18 - 24', '25 - 34', '35 - 44', '45 - 54', '55 - 64', '65 - 74', '75 eller ældre'],
        datasets: [{
            data: [34.8, 26.5, 19.9, 22.1, 14.8, 18.5, 19.2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(0, 0, 0, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(0, 0, 0, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        //Slow aspect ratio fra så jeg kan kontrollere bredde&højde
        maintainAspectRatio: false,
        legend: {
            //Slår legend (forklaring på datasets) fra
            display: false,
        },
        title: {
            display: false,
            //Laver datatypen til en array så jeg kan splitte titlen op på 2 linjer
            text: ['Procentdel af voksne der har været', 'mere deprimeret på grund af COVID-19'],
            position: 'top',
            fontSize: 22
        },
        tooltips: {

            backgroundColor: ['#FEFEFE'],
            bodyFontColor: ['#000000'],
            titleFontColor: ['#000000'],
            callbacks: {
                label: function (tooltipItem, data) {
                    return ' ' + data['datasets'][0]['data'][tooltipItem['index']] + '% mere deprimeret';
                }
            }
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Percentdel af voksne'
                },
                ticks: {
                    beginAtZero: true,
                    callback: function (value) {
                        //Tilføjer % efter værdierne på y-aksen
                        return value + "%";
                    }
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Alder på voksne'
                }
            }]
        }
    }
});