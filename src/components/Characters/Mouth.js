import React from 'react';

const Mouth = ({
  stroke = 'black',
  fill = 'black',
  smiling = false,
  surprised = false
}) => (
  <React.Fragment>
    {smiling ? (
      <path d="m 40 60 c 0 10 20 10 20 0 z" stroke={stroke} fill={fill} />
    ) : surprised ? (
      <ellipse cx="50" cy="60" rx="4" ry="3" fill={fill} stroke={stroke} />
    ) : (
      <line x1="40" x2="60" y1="60" y2="60" stroke-width="2" stroke={stroke} />
    )}
  </React.Fragment>
);

export default Mouth;
