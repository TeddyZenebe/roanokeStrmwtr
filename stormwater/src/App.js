import React from 'react';
import { Scene } from '@esri/react-arcgis';
import './App.css';
import Gagehydro from './components/Gagehydrograph.js'
import Detailcontainer from './components/Detailcontainer'


class App extends React.Component {
  constructor(props){
     super(props)
     this.state ={
      DetailcontainerCSS : 'Detailcontainer',
      name:'Data',
      //toggle: true,
      toggle2:true
     }
  }
    onclickhandeler = (e)=>{
      e.preventDefault();
      if(this.state.toggle){
        this.setState({DetailcontainerCSS: 'Detailcontainer'})
        this.setState({toggle:!(this.state.toggle)})
      }else{
      this.setState({DetailcontainerCSS: 'Detailcontainer1'})
      this.setState({toggle:(!this.state.toggle)})}
    }

    graphToggle = (e)=>{
      e.preventDefault()
      if(this.state.toggle2){
        this.setState({name: 'Data1'})
        this.setState({toggle2:!(this.state.toggle2)})
      }else{
      this.setState({name: 'Data'})
      this.setState({toggle2:!(this.state.toggle2)})}
    }

    render(){
        return (
          <div className="App" >
            <div className='Map'>
            <Scene
              style={{ width: '100%', height: '100%' }}
              mapProperties={{ basemap: 'satellite' }}
              viewProperties={{
                  center: [-79.938406, 37.259254],
                  zoom: 20
              }}
              loaderOptions={{ css: true }}
          />
          </div>
          <div className={this.state.DetailcontainerCSS}> 
            <Detailcontainer  graphToggle={this.graphToggle} />
          </div>
          <div className={this.state.name}>
            <Gagehydro className='Graph'/>
          </div>
            
        </div>
        );
}
}

export default App;
