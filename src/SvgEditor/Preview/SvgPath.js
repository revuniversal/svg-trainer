// @flow
import React from 'react';
import type { PathProps } from '../../common/PathProps';
import type { Command, Curve, Line } from '../../common/Commands';

function curveToData({ to, handle1: h1, handle2: h2 }: Curve) {
  return `c ${h1.x} ${h1.y} ${h2.x} ${h2.y} ${to.x} ${to.y}`;
}
function lineToData({ to }: Line) {
  return `l ${to.x} ${to.y}`;
}
function commandToData(command: Command) {
  switch (command.commandType) {
    case 'CURVE':
      return curveToData(command);
    case 'LINE':
      return lineToData(command);
    default:
      throw new Error(`Unexpected path command type: ${command.commandType}`);
  }
}

function getDataFromCommands(start, commands, autoClose) {
  return `
      m ${start.x} ${start.y}
      ${commands.map(commandToData).join(' ')}
      ${autoClose ? 'Z' : ''}
    `;
}

const SvgPath = ({
  start,
  commands,
  autoClose,
  stroke,
  fill,
  strokeWidth
}: PathProps) => (
  <path
    d={getDataFromCommands(start, commands, autoClose)}
    stroke={stroke}
    fill={fill}
    strokeWidth={strokeWidth}
  />
);

export default SvgPath;
