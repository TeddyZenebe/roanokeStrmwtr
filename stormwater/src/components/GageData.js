import React from 'react'
import axios from 'axios'


class GageData extends React.Component {
    constructor(){
        super()
        this.state={
            newData: {},
           
        }
    }
    componentDidMount(){
       
        axios.get('https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=02055000&parameterCd=00060,00065')
             .then((res) => {this.setState({newData: res.data})})
             .catch((err) => {console.log( err)})
    }

  

    render(){
        if(Object.keys(this.state.newData).length === 0){
            return(
                <div>is loading</div>
            )
        }
        const time =this.state.newData.value.timeSeries[0].values[0].value[0].dateTime
        const discharge =this.state.newData.value.timeSeries[0].values[0].value[0].value
        const name = this.state.newData.value.timeSeries[0].sourceInfo.siteName
        console.log(time)
        console.log(discharge)
        return(<div className='data'>
                 
                 <h3>{name}</h3>
                 <h3>recorded time {time}</h3>
                 <h3>recorded discharge {discharge} ft3/s</h3>
                 
                
               </div> 
        )
    }
}
export default GageData;