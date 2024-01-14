var ctx = document.getElementById("myChart4").getContext('2d');
var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ["20","","25","","30","","35","","40","","60","","65"],
		datasets: [{
			label: 'Employer : K 73,500',
			backgroundColor: "rgb(4, 4, 106)",
			data: [25, 30, 35, 40, 45,50, 55, 60,70,75,80,85,99],
		}, {
			label: 'Employee: K 52,500',
			backgroundColor: "rgb(57, 57, 202)",
			data: [25, 30, 35, 40, 45,50, 55, 60,70,75,80,85,99],
		}, {
			label: 'Total Intrest: K 244,313',
			backgroundColor: "rgb(122, 122, 233)",
			data: [25, 30, 35, 40, 45,50, 55, 60,70,75,80,85,99],
		}],
	},
options: {
    tooltips: {
      displayColors: true,
      callbacks:{
        mode: 'x',
      },
    },
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false,
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        type: 'linear',
      }]
    },
		responsive: true,
		maintainAspectRatio: false,
		legend: { position: 'top' },
	}
});





const value = document.querySelector("#value");
const input = document.querySelector("#pi_input");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

const Rvalue = document.querySelector("#R-value");
const Rinput = document.querySelector("#R-input");
Rvalue.textContent = Rinput.value;
Rinput.addEventListener("input", (event) => {
  Rvalue.textContent = event.target.value;
});
