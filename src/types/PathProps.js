// @flow
import type { Coordinate } from './Coordinate';
import type { Command } from './Commands';
import type { Color } from './Color';

export interface PathProps {
  start: Coordinate;
  commands: Array<Command>;
  autoClose: boolean;
  strokeWidth: number;
  stroke: Color;
  fill: Color;
}
