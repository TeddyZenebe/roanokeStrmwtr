import React from 'react';
import axios from 'axios'
import xml2string from 'react-xml-parser'

class ForcastData extends React.Component {

    constructor(){
        super()
        this.state={
            newData: {},
            dataPoints :[]
        }
    }
  
  xmlToJson = (xml)=>{ 
       
        let obj = {}
    
          if (xml.nodeType === 1) { 
            // do attributes 
            if (xml.attributes.length > 0) { 
             obj["@attributes"] = {}; 
               for (let i = 0; i < xml.attributes.length; i++) { 
                const attribute = xml.attributes.item(i); 
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue; 
              } 
             } 
           } else if (xml.nodeType === 3) { 
            // text 
            obj = xml.nodeValue; 
           } 
          // do children 
          // If all text nodes inside, get concatenated text from them. 
           var textNodes = [].slice.call(xml.childNodes).filter(function(node) { 
            return node.nodeType === 3; 
          }); 
          if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) { 
            obj = [].slice.call(xml.childNodes).reduce(function(text, node) { 
               return text + node.nodeValue; 
             }, ""); 
           } else if (xml.hasChildNodes()) { 
         for (let i = 0; i < xml.childNodes.length; i++) { 
               var item = xml.childNodes.item(i); 
              var nodeName = item.nodeName; 
               if (typeof obj[nodeName] == "undefined") { 
                 obj[nodeName] = this.xmlToJson(item); 
              } else { 
                if (typeof obj[nodeName].push == "undefined") { 
                  var old = obj[nodeName]; 
                  obj[nodeName] = []; 
                  obj[nodeName].push(old); 
            } 
                obj[nodeName].push(this.xmlToJson(item)); 
              } 
            } 
           } 
           return obj; 
         } 
        
    

    componentDidMount(){
       
        axios.get('https://water.weather.gov/ahps2/hydrograph_to_xml.php?gage=ronv2')
             .then(async(res) => {
                             const xmlString = await new xml2string().parseFromString(res.data);
                             console.log(xmlString) 
                             this.setState({newData:xmlString.children[7].children[14].children[1]})
                             this.setState({dataPoints:xmlString.children[7].children[14].children[0]})
                            })
             .catch((err) => {console.log( err)})
    }
 
    render() {  
           console.log(this.state.dataPoints.value)
           
        return (
        <div>
            <h6>{this.state.dataPoints.value}</h6>
            <h5> Water Depth: {this.state.newData.value} ft</h5>
            
        </div>
        );
    }
    
}
 
export default ForcastData;           

      