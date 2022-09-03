const ctx = document.getElementById('myChart').getContext('2d');
const earning = document.getElementById('earning').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Instagram', 'Facebook', 'Youtube'],
        datasets: [{
            label: 'Follower',
            data: [10000, 3000, 5000],
            backgroundColor: [
                'rgba(247, 2, 97, 1)',
                'rgba(72, 103, 170, 1)',
                'rgba(255, 0, 0, 1)',
            ],
        }]
    },
    options: {
        Response: true,
    }
});


const myChart2 = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
        datasets: [{
            label: 'Guadagni',
            data: [1200, 1900, 3000, 5000, 2000, 3000, 1200, 1900, 3000, 5000, 2000, 3000],
            backgroundColor: [
                'rgba(133, 102, 197, 1)',
                'rgba(146, 81, 73, 1)',
                'rgba(70, 204, 163, 1)',
                'rgba(73, 66, 67, 1)',
                'rgba(255, 126, 56, 1)',
                'rgba(249, 180, 190, 1)',
                'rgba(229, 61, 66, 1)',
                'rgba(252, 228, 74, 1)',
                'rgba(133, 237, 188, 1)',
                'rgba(174, 236, 249, 1)',
                'rgba(204, 196, 190, 1)',
                'rgba(90, 208, 221, 1)'
            ],
        }]
    },
    options: {
       Response: true,
    }
});