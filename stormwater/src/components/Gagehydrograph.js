import React from 'react';
import axios from 'axios'
import CanvasJSReact from '../assets/canvasjs.react'

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
 


class Gagehydro extends React.Component {

	constructor(){
        super()
        this.state={
			newData: [],
        }
    }
   
	componentDidMount(){
       
        axios.get('https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02055000&period=P2D&parameterCd=00065&siteStatus=all')
             .then((res) => {this.setState({newData: res.data.value.timeSeries[0].values[0].value})})
             .catch((err) => {console.log( err)})
    }
 
	render() {	

		if(this.state.newData.length ===0){
			return <div>is loding</div>
		}
		
		const dataPoints = this.state.newData.map((elm)=>{return { x: new Date(elm.dateTime), y: Number(elm.value)}})
		console.log(dataPoints)
		const options = {
			height:250,
			animationEnabled: true,
			title: {
				text: "Roanoke Hydro"
			},
			axisY: {
				title: "Gage Height, ft",
				suffix: "ft",
				includeZero: false
            },
            axisX: {
				title: "timeline",
				includeZero: false,
				interval: 1,
				intervalType: "day"
            },
			data: [{
				type: "spline",
				xValueFormatString: "DDD HH:mm:ss",
				yValueFormatString: "#0.00ft",
				dataPoints: dataPoints
			}]
		}
		return (
		<div className='Canavas'>
			<CanvasJSChart options = {options} />	
		</div>
		);
	}
	
}
 
export default Gagehydro;           