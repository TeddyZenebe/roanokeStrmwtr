import React from 'react';
import { loadModules } from 'esri-loader';
 
export default class Gagepoint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            graphic: null
        };
    }
 
    render() {
        return null;
    }
 
    componentWillMount() {
        loadModules(['esri/Graphic']).then(([ Graphic ]) => {
            
            const polygon = {
                type: "point", // autocasts as new Polygon()
                longitude: -79.9386485,
                latitude: 37.25847085
            };
 
            // Create a symbol for rendering the graphic
            const fillSymbol = {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: [227, 139, 79, 0.8],
                outline: { // autocasts as new SimpleLineSymbol()
                color: [255, 255, 255],
                width: 1
                }
            };
 
            // Add the geometry and symbol to a new graphic
            const graphic = new Graphic({
                geometry: polygon,
                symbol: fillSymbol
            });
 
            this.setState({ graphic });
            this.props.view.graphics.add(graphic);
        }).catch((err) => console.error(err));
    }
 
    componentWillUnmount() {
        this.props.view.graphics.remove(this.state.graphic);
    }
}