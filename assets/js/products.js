const productsChart = document.getElementById('products').getContext('2d')
const products = new Chart(productsChart,{
    type:'line',
    data:{
        labels:['mon','tue','wed','thu','fri','sat','sun'],
        datasets:[{
            data:[5,7,4,15,9,5,23],
            borderColor:['rgb(59,197,154,1)'],
            borderWidth:2
        }]
    },
    options:{
        elements:{
            point:{
                radius:0
            }
        },
        scales:{
            x:{
                display:false
            },
            y:{
                display:false
            }
        },
        plugins:{
            legend:{
                display:false 
            }
        }
    }
})