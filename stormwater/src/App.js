import React from 'react';
import { Scene } from '@esri/react-arcgis';
import './App.css';
import GageData from './components/GageData.js'
import Gagehydro from './components/Gagehydrograph.js'


function App() {
  return (
    <div className="App">
      <div className='Map'>
      <Scene
        style={{ width: '100%', height: '100%' }}
        mapProperties={{ basemap: 'satellite' }}
        viewProperties={{
            center: [-79.9386485, 37.25847085],
            zoom: 20
        }}
        loaderOptions={{ css: true }}
    />
      </div>
     <div className='Data'>
       <GageData />
       <Gagehydro />
     </div>
      
    </div>
  );
}

export default App;
