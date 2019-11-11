import React from 'react'
import axios from 'axios'

class WaterDepth extends React.Component {
    constructor(){
        super()
        this.state={
            newData: {},
           
        }
    }
    componentDidMount(){
       
        axios.get('https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=02055000&parameterCd=00065')
             .then((res) => {this.setState({newData: res.data})})
             .catch((err) => {console.log( err)})
    }

  

    render(){
        if(Object.keys(this.state.newData).length === 0){
            return(
                <div>is loading</div>
            )
        }
        const WaterDepthvalue =this.state.newData.value.timeSeries[0].values[0].value[0].value
        const name = this.state.newData.value.timeSeries[0].sourceInfo.siteName
        const time = `${new Date(this.state.newData.value.timeSeries[0].values[0].value[0].dateTime)}`

        return(<div className='data'>
                 
                 <h3>{name}</h3>
                 <h4>{time}</h4>
                 <h3>Water Depth {WaterDepthvalue} ft</h3>
                 
                
               </div> 
        )
    }
}
export default WaterDepth;


