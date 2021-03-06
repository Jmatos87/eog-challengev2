import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

//Width and height are important because they have to be close to what the user will see on 
//their grid

class ChartComponent extends React.Component {
	constructor() {
    super();
    this.state = {
    };
  }

	render(){
	
		return(
			<LineChart width={550} height={310} data={this.props.rng}
	          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

	          <XAxis dataKey="index"/>
	          <YAxis />
	          <CartesianGrid strokeDasharray="3 3" />
	          <Tooltip />
	          <Legend />
	          <Line type="monotone" dataKey="value" 
	          stroke="#8884d8" isAnimationActive={false} />
	          
	        </LineChart> 
		)
	}
}
export default ChartComponent;