import React from 'react';

const Panel = ({
  children,
  panelNumber,
  fill = 'white',
  stroke = 'black',
  meanwhile = null
}) => (
  <g transform={`translate(${(panelNumber - 1) * 100} 0)`}>
    <rect
      x="1"
      y="1"
      width="98"
      height="98"
      stroke-width="1"
      stroke={stroke}
      fill={fill}
    />
    {meanwhile != null && <Meanwhile />}
    {children}
  </g>
);

export default Panel;
