// @flow
import type { Command } from '../types/Commands';
import type { Coordinate } from '../types/Coordinate';
import type { Color } from '../types/Color';
import type { PathProps } from '../types/PathProps';

export type PathCommandName =
  | 'editStart'
  | 'editStroke'
  | 'editFill'
  | 'editStrokeWidth'
  | 'addCurve'
  | 'addLine'
  | 'editCommand'
  | 'deleteCommand'
  | 'sortCommandUp'
  | 'sortCommandDown';
export type State = PathProps;
export type Actions = { [PathCommandName]: Function };
export type PathModel = {
  state: State,
  reducers: Actions
};

export type EditCommandPayload = {
  index: number,
  command: Command
};

const currentPath: PathModel = {
  state: {
    stroke: '#000000',
    fill: '#FFFFFF',
    strokeWidth: 1,
    start: { x: 0, y: 0 },
    commands: [],
    autoClose: true
  },
  reducers: {
    editStart(state: State, { x, y }: Coordinate) {
      let start = { x, y };
      return { ...state, start };
    },
    editFill(state: State, fill: Color) {
      return { ...state, fill };
    },
    editStroke(state: State, stroke: Color) {
      return { ...state, stroke };
    },
    editStrokeWidth(state: State, strokeWidth: number) {
      return { ...state, strokeWidth };
    },
    addCurve: function(state: State) {
      let commands = [...state.commands];
      commands.push({
        commandType: 'CURVE',
        to: { x: 0, y: 0 },
        handle1: { x: 0, y: 0 },
        handle2: { x: 0, y: 0 }
      });

      return { ...state, commands };
    },
    addLine(state) {
      let commands = [...state.commands];
      commands.push({
        commandType: 'LINE',
        to: { x: 0, y: 0 }
      });

      return { ...state, commands };
    },
    editCommand(state, { index, command }: EditCommandPayload) {
      let commands = [...state.commands];
      commands[index] = { ...command };

      return { ...state, commands };
    },
    deleteCommand(state, index: number) {
      let commands = [...state.commands];
      commands.splice(index, 1);

      return { ...state, commands };
    },
    sortCommandUp(state, index: number) {
      if (index === 0) return state;

      let commands = [...state.commands];
      let shifted = commands[index - 1];
      commands[index - 1] = commands[index];
      commands[index] = shifted;

      return { ...state, commands };
    },
    sortCommandDown(state, index: number) {
      if (index >= state.commands.length) return state;

      let commands = [...state.commands];
      let shifted = commands[index + 1];
      commands[index + 1] = commands[index];
      commands[index] = shifted;

      return { ...state, commands };
    }
  }
};

export default currentPath;
