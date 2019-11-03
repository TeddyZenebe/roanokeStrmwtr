import React from 'react';
import { Scene } from '@esri/react-arcgis';
import './App.css';

function App() {
  return (
    <div className="App">
      <Scene
        style={{ width: '100vw', height: '100vh' }}
        mapProperties={{ basemap: 'satellite' }}
        viewProperties={{
            center: [-79.9386485, 37.25847085],
        }}
        loaderOptions={{ css: true }}
    />
    </div>
  );
}

export default App;
