export const DoughnutData = {
	labels: [
		'金錢',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

export const RadarData = {
  labels : ["金錢","能力","情緒","人脈", "健康"],
	datasets : [
		{
      label: '前世',
       backgroundColor: 'rgba(179,181,198,0.2)',
       borderColor: 'rgba(179,181,198,1)',
       pointBackgroundColor: 'rgba(179,181,198,1)',
       pointBorderColor: '#fff',
       pointHoverBackgroundColor: '#fff',
       pointHoverBorderColor: 'rgba(179,181,198,1)',
			data : [65,59,90,81,56]
		},
		{
      label: '本世',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
			data : [28,48,40,19,96]
		}
	]
}
