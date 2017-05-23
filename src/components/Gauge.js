import React from 'react';
import Gauge from 'react-svg-gauge';

class GaugeComponent extends React.Component {
	constructor() {
    super();
    this.state = {
    };
  }

	render(){
	
		return(
		
				<Gauge value={this.props.rng[this.props.rng.length-1].value} 
				max={1000} width={220} height={130} label="" />

		)
	}
}
export default GaugeComponent;