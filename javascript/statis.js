const ctx = document.getElementById('lineChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6','Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'],
        datasets: [{
            label: 'Earning in VND',
            data: [4000, 5000, 6500],
            backgroundColor: [
                'rgba(0, 138, 138, 1)'
            ],
            borderColor: [
                'rgba(0, 138, 138, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});
