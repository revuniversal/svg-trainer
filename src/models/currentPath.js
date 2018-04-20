// @flow
import type { Command } from '../common/Commands';
import type { PathProps } from '../common/PathProps';

export type PathCommandName =
  | 'addCurve'
  | 'addLine'
  | 'editStart'
  | 'editCommand'
  | 'deleteCommand'
  | 'sortCommandUp'
  | 'sortCommandDown';
export type PathState = PathProps;
export type PathAction = (state: PathState, payload?: any) => PathState;
export type PathActions = { [PathCommandName]: Function };
export type PathModel = {
  state: PathState,
  reducers: PathActions
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
    addCurve: function(state) {
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
    editStart(state, newStart) {
      let start = { ...newStart };
      return { ...state, start };
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
