


// Home Page Charts

let ctx = document.getElementById("myChart");
let myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Mobile", "Detskop", "Tablet"],
        datasets: [{
            label: "Technologies",
            backgroundColor: ["#83DADA", "#F44A3E", "#429474"],
            data: [258, 3554, 566]
        }]
    },
    options: {
        title: {
            display: true,
            text: "Technologies"
        }
    }
});
let ctx2 = document.getElementById("myChart2");
let myPieChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ["00:00", "08:00", "16:00", "23:59"],
        datasets: [{
            data: [25, 45, 15, 68],
            label: "Hits",
            borderColor: "#F44A3E",
            fill: false
        }]
    },
    options: {
        title: {
            display: true,
            text: "Daily Hits"
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
let ctx3 = document.getElementById("myChart3");
let myPieChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ["January", "February", "March "],
        datasets: [{
            data: [350, 289, 651],
            label: "Hits",
            borderColor: "#429474",
            fill: false
        }]
    },
    options: {
        title: {
            display: true,
            text: "Last 3 Months"
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
let ctx4 = document.getElementById("myChart4");
let myPieChart4 = new Chart(ctx4, {
    type: 'doughnut',
    data: {
        labels: ["USA", "Canada", "India", "Germany"],
        datasets: [{
            label: "Country",
            backgroundColor: ["#83DADA", "#429474", "#B88740", "#F44A3E"],
            data: [258, 3554, 566, 245]
        }]
    },
    options: {
        title: {
            display: true,
            text: "Best Countries"
        }
    }
});
