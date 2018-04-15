import React from 'react';

const Head = ({
  fill = 'white',
  stroke = 'black',
  cx = 0,
  cy = 0,
  children
}) => (
  <g transform={`translate(${cx} ${cy})`}>
    <ellipse rx="22" ry="28" stroke={stroke} fill={fill} cx="50" cy="50" />
    {children}
  </g>
);

export default Head;
