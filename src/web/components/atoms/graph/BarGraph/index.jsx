/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const {
  arrayOf,
  shape,
  string,
  number,
} = PropTypes;

const BAR_GRAPH_WIDTH = 480;
const BAR_GRAPH_HEIGHT = 360;

const BarGraph = ({
  data,
}) => (
  <BarChart
    width={BAR_GRAPH_WIDTH}
    height={BAR_GRAPH_HEIGHT}
    data={data}
  >
    <CartesianGrid strokeDasharray='3 3' />
    <XAxis dataKey='day' />
    <YAxis />
    <Tooltip />
    <Legend />
    {/* <Bar dataKey='walkins' fill='var(--color-space-cadet)' /> */}
  </BarChart>
);

BarGraph.propTypes = {
  data: arrayOf(shape({
    day: string,
    walkins: number,
  })).isRequired,
};

export default BarGraph;
