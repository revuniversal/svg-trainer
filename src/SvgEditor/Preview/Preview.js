import React from 'react';
import SvgPath from './SvgPath';

const Preview = ({ paths }) => (
  <svg viewBox="0 0 50 40">
    <SvgPath {...paths[0]} />
  </svg>
);

export default Preview;
