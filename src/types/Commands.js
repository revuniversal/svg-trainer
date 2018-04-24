// @flow
import type { Coordinate } from './Coordinate';

export type CommandType = 'CURVE' | 'LINE';

export type CoordinateKey = 'to' | 'handle1' | 'handle2';

export interface Curve {
  commandType: 'CURVE';
  to: Coordinate;
  handle1: Coordinate;
  handle2: Coordinate;
}

export interface Line {
  commandType: 'LINE';
  to: Coordinate;
}

export type Command = Curve | Line;
