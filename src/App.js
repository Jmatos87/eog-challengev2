import React from 'react';

import ChartComponent from './components/LineChart.js';
import GaugeComponent from './components/Gauge.js';

import {Responsive, WidthProvider} from 'react-grid-layout';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

//Initialize Grid Component

const ResponsiveReactGridLayout = WidthProvider(Responsive);

//Define component grid dimensions

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
        <div>
          <AppBar
           title="EOG Random Number Generator"
           style={{"backgroundColor":"red"}}
           showMenuIconButton={false}/>

           <ResponsiveReactGridLayout className="layout" layouts={layout}
            breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
            cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
            useCSSTransforms={true}>

           <Paper key="1" >
              <ChartComponent rng={this.props.rng}/>
           </Paper>

           <Paper key="2">
              <GaugeComponent rng={this.props.rng}/>
           </Paper>

        </ResponsiveReactGridLayout>

        </div>
    );
  }
};
export default App;