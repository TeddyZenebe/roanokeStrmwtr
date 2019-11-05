import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react'

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
var dataPoints =[
    { x: new Date(2019, 9, 27), y: 1.5 },
    { x: new Date(2019, 9, 28), y: 2 },
    { x: new Date(2019, 9, 29), y: 3 },
    { x: new Date(2019, 9, 30), y: 4 },
    { x: new Date(2019, 9, 31), y: 5 },
    { x: new Date(2019, 10, 1), y: 4.5 },
    { x: new Date(2019, 10, 2), y: 3 },
    { x: new Date(2019, 10, 3), y: 3 },
    { x: new Date(2019, 10, 4), y: 2 },
    { x: new Date(2019, 10, 5), y: 1 }
    ];

class Gagehydro extends React.Component {
 
	render() {	
		const options = {
			theme: "light2",
			title: {
				text: "Roanoke Hydro"
			},
			axisY: {
				title: "Water Depth",
				suffix: "ft",
				includeZero: false
            },
            axisX: {
				title: "date time",
                includeZero: false 
            },
			data: [{
				type: "line",
				xValueFormatString: "MMM DD",
				yValueFormatString: "ft#,##0.00",
				dataPoints: dataPoints
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options} 
				//  onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
	
	// componentDidMount(){
	// 	var chart = this.chart;
	// 	fetch('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
	// 	.then(function(response) {
    //         console.log(response)
	// 		return response.json();
	// 	})
	// 	.then(function(data) {
	// 		for (var i = 0; i < data.length; i++) {
	// 			dataPoints.push({
	// 				x: new Date(data[i].x),
	// 				y: data[i].y
	// 			});
	// 		}
	// 		chart.render();
	// 	});
	// }
}
 
export default Gagehydro;           