import React from 'react';
import axios from 'axios'


class HydroData extends React.Component {

	constructor(){
        super()
        this.state={
            newData: [],
            dataPoints :[]
        }
    }
    componentDidMount(){
       
        axios.get('https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02055000&period=P2D&parameterCd=00065&siteStatus=all')
             .then((res) => {this.setState({newData: res.data.value.timeSeries[0].values[0].value})})
             .catch((err) => {console.log( err)})
    }
	 
	
        
    
	
 
	render() {	
           console.log(this.state.newData)

		return (
		<div>
			{}
		</div>
		);
	}
	
}
 
export default HydroData;           