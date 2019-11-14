import React from 'react'
import GageData from './GageData'
import WaterDepth from './WaterDepth.js'
import ForcastData from './ForcastData'

class Detailcontainer extends React.Component {
    
    render(){
        return (
            <div className='bigcontainer'>
              <div className='datacontaner' onClick={this.props.graphToggle}>
                  <WaterDepth />
              </div>
              <div className='datacontaner'>
                  <GageData />
              </div>
              <div className='datacontaner'>
                  <h4>Forcasted water level</h4>
                  <ForcastData />
              </div>
            </div>
        )
    }
}

export default Detailcontainer;
           