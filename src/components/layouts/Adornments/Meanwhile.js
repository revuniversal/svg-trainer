import React from 'react';
import styled from 'styled-components';

const Text = styled.text`
  font-family: 'Bangers', cursive;
  font-size: ${p => p.fontSize || 14};
`;

const Meanwhile = ({ height, width, x, y, fontSize, children }) => (
  <g height={height} width={width} transform={`translate(${x} ${y})`}>
    <rectangle
      x="0"
      y="0"
      width={width}
      height={height}
      stroke="black"
      stroke-width="1"
      fill="yellow"
    >
      <Text fontSize={fontSize}>{children}</Text>
    </rectangle>
  </g>
);

export default Meanwhile;
