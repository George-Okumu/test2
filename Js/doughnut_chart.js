let myChart = document.getElementById('doughnut_chart').getContext('2d');
let doughnut_chart = new Chart(myChart, {
    type: 'doughnut',
    data: {
        labels: [],
        datasets: [{
            label: 'Field Size',
            data: [2, 3, 5],
            backgroundColor: [
                '#414141',
                '#E5DB24',
                '#168D4B'
            ],
            borderColor: [
                '#414141',
                '#E5DB24',
                '#168D4B'
            ],
            borderWidth: 1,
            hoverOffset: 2,
            hoverBorderColor: '#fff'
        }]
    },
    options: {

    }
});