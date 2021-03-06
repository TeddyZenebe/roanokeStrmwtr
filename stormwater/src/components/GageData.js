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
       
        axios.get('https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=02055000&parameterCd=00060')
             .then((res) => {this.setState({newData: res.data})})
             .catch((err) => {console.log( err)})
    }

  

    render(){
        if(Object.keys(this.state.newData).length === 0){
            return(
                <div>is loading</div>
            )
        }
        const time =`${new Date(this.state.newData.value.timeSeries[0].values[0].value[0].dateTime)}`
        const discharge =this.state.newData.value.timeSeries[0].values[0].value[0].value
        const name = this.state.newData.value.timeSeries[0].sourceInfo.siteName
       
        return(<div className='data'>
                 
                 <h5>{name}</h5>
                 <h6>{time}</h6>
                 <h5>Discharge {discharge} ft3/s</h5>
                 
                
               </div> 
        )
    }
}
export default GageData;


