import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import PropTypes from "prop-types";

// const [count, setCount] = useState(0);

export default class Example extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    var data = [
      {
        name: 1, value: 10
      },
      {
        name: 2, value: this.props.value
      }

    ]

    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }
}
