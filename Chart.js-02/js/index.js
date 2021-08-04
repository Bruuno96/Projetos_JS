let array = ['August', 'September', 'October', 'November', 'December']
let ctx = document.getElementById('chart').getContext('2d');
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "custo por cliente",
            backgroundColor: 'rgb(255,99,132)',
            borderColor: [
                'rgb(255,99,132)',
                'rgb(255,99,132)',
                'rgb(255,99,132)',
                'rgb(255,99,132)',
                'rgb(255,99,132)',
                'rgb(255,99,132)',
                'rgb(255,99,132)'
            ],
            data: [0, 10, 54, 28, 20, 3, 45]
        }]
    },

    options: {
        plugins: {
            title: {
                display: true,
                text: 'CAC - CUSTO DE AQUISIÇÃO DE CLIENTE',
            },
            legend: {
                position: 'bottom'
            }
        },

        animation: {
            duration: 3000,
            easing: 'easeOutBounce'
        },

        layout: {
            padding: {
                left: 20,
                right: 20,
                bottom: 20,
                top: 20
            }
        },
        scales: {
            x: {
                grid: {
                    display: true, // nao aparece linha do eixo X
                    borderColor: 'red',
                    drawBorder: false
                }
            },
            y: {
                grid: {
                    display: true, // nao aparece linha do eixo X
                    borderColor: 'red',
                    drawBorder: false
                }
            }
        }
    }
})



const addData = () => {
    let mount = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let sizeData = chart.data.datasets[0].data.length // pegar o tamanho do array do data linha 18: data: [0, 10, 54, 28, 20, 3, 45]
    chart.data.datasets[0].data[sizeData] = Math.random() * 100 // Gerar um numero randomico
    chart.data.labels[sizeData] = `${mount[sizeData]}`
    chart.update()
}

const removeData = () => {
    chart.data.datasets[0].data.pop()
    chart.data.labels.pop();
    chart.update()
}