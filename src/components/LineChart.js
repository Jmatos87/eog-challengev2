import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


class ChartComponent extends React.Component {
	constructor() {
    super();
    this.state = {
    };
  }

	render(){
	
		return(
				<LineChart width={600} height={310} data={this.props.rng}
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