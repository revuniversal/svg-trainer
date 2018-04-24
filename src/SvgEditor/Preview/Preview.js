import React from 'react';
import SvgPath from './SvgPath';

const Preview = ({ paths }) => (
  <svg id="Preview" viewBox="0 0 50 50">
    <SvgPath {...paths[0]} />
  </svg>
);

export default Preview;
