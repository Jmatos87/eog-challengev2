import React from 'react';

import Header from './components/Header.js';
import ChartComponent from './components/LineChart.js';
import GaugeComponent from './components/Gauge.js';

import {Responsive, WidthProvider} from 'react-grid-layout';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

 var layout = {
     lg: [
        { i: '1', x: 0, y: 0, w: 5, h: 2 },
        { i: '2', x: 0, y: 2, w: 2, h: 1 }
      ]
    };



class App extends React.Component {
  constructor() {
    super();
    this.state = {
        
    };
    
  }
 
  render() {

    return (
      

    	<div id="wrapper">
        <Header/>

        <ResponsiveReactGridLayout className="layout" layouts={layout}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
        useCSSTransforms={true}>

           <div key="1" >
              <ChartComponent rng={this.props.rng}/>
           </div>
           <div key="2">
              <GaugeComponent rng={this.props.rng}/>
           </div>

        </ResponsiveReactGridLayout>
      </div>
      
    );
  }
}
export default App;