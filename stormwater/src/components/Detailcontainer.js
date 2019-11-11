import React from 'react'
import GageData from './GageData'
import WaterDepth from './WaterDepth.js'

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
                  <h2>Forcasted water level</h2>
              </div>
            </div>
        )
    }
}

export default Detailcontainer;
           