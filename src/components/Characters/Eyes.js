import React from 'react';

const Eyes = ({ color = 'black', winkRight }) => (
  <React.Fragment>
    <circle r="2" cy="44" cx="44" fill={color} stroke={color} />
    {winkRight ? (
      <line x1="53" x2="59" y1="44" y2="44" stroke={color} stroke-width="2" />
    ) : (
      <circle r="2" cy="44" cx="56" fill={color} stroke={color} />
    )}
  </React.Fragment>
);

export default Eyes;
