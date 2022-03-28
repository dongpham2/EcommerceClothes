const ctx = document.getElementById('lineChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6','Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'],
        datasets: [{
            label: 'Earning in VND',
            data: [3000, 5000, 6500],
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
// function selectMonth(){
//     if(document.getElementById('m2')){
//         document.getElementById('m2').innerHTML = 
//         '<h5 id="m2" class="act" onclick="selectMonth()">Tháng 2</h5>';
//         document.getElementById('m1').style.border = 'none';
//         document.getElementById('m3').style.border = 'none';
//     }
//     else if(document.getElementById('m3')){
//         document.getElementById('m3').innerHTML = 
//         '<h5 id="m3" class="act" onclick="selectMonth()">Tháng 3</h5>';
//         document.getElementById('m2').style.border = 'none';
//         document.getElementById('m1').style.border = 'none';
//     }
// }
function statisWeek(){
    document.getElementById('lineChart').style.display = 'none';
    document.getElementById('lineChart-1').style.display = 'unset';
    document.getElementById('income-1').innerHTML = '<h3 id="income-1">Tổng thu nhập tuần qua:</h3>';
    document.getElementById('months').style.display = 'unset';
    // document.getElementById('select-month').innerHTML =
    // ;
    const ctx = document.getElementById('lineChart-1').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'],
            datasets: [{
                label: 'Earning in VND',
                data: [1000, 700, 1300],
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
}
function statisMonth() {
    document.getElementById('lineChart-1').style.display = 'none';
    document.getElementById('lineChart').style.display = 'unset';
    document.getElementById('income-1').innerHTML = '<h3 id="income-1">Tổng thu nhập tháng qua:</h3>';
    document.getElementById('months').style.display = 'none';
}