// @flow
import React from 'react';
import styled from 'styled-components';
import CommandForm from './Forms/CommandForm';
import CoordinateInput from './Forms/CoordinateInput';
import LabeledInput from './Forms/LabeledInput';
import EditorLayout from './EditorLayout';
import type { Coordinate } from '../../types/Coordinate';
import type { Command } from '../../types/Commands';

const AddButton = styled.button`
  margin: 4px 12px;
`;

interface EditCommand {
  index: number;
  command: Command;
}

interface Props {
  start: Coordinate;
  editStart: Coordinate => void;
  strokeWidth: number;
  editStrokeWidth: number => void;
  autoClose: boolean;
  editAutoClose: boolean => void;
  commands: Command[];
  deleteCommand: number => void;
  addCurve: () => void;
  addLine: () => void;
  editCommand: EditCommand => void;
  sortCommandUp: number => void;
  sortCommandDown: number => void;
}

const Editor = ({
  start,
  editStart,
  strokeWidth,
  editStrokeWidth,
  autoClose,
  editAutoClose,
  commands,
  deleteCommand,
  addCurve,
  addLine,
  editCommand,
  sortCommandUp,
  sortCommandDown
}: Props) => (
  <EditorLayout>
    <EditorLayout.PropertiesHeader>
      <h3>Path Properties</h3>
    </EditorLayout.PropertiesHeader>
    <EditorLayout.PropertiesBody>
      <div>
        <CoordinateInput
          displayName="Starting Point"
          coordinate={start}
          onCoordinateChange={editStart}
        />
      </div>
      <div>
        <LabeledInput
          type="number"
          displayName="Stroke Width"
          value={strokeWidth}
          onChange={editStrokeWidth}
        />
      </div>
      <div>
        <label>
          Autoclose{' '}
          <input type="checkbox" checked={autoClose} onChange={editAutoClose} />
        </label>
      </div>
    </EditorLayout.PropertiesBody>
    <EditorLayout.CommandsHeader>
      <h3>Path Commands</h3>
      <AddButton type="button" onClick={addCurve}>
        + Add Curve
      </AddButton>
      <AddButton type="button" onClick={addLine}>
        + Add Line
      </AddButton>
    </EditorLayout.CommandsHeader>
    <EditorLayout.CommandsBody>
      {commands.map((command, i) => (
        <CommandForm
          key={i}
          index={i}
          command={command}
          canSortUp={i > 0}
          canSortDown={i < commands.length - 1}
          onSortUp={() => sortCommandUp(i)}
          onSortDown={() => sortCommandDown(i)}
          onDelete={() => deleteCommand(i)}
          onEdit={cmd => editCommand({ index: i, command: cmd })}
        />
      ))}
    </EditorLayout.CommandsBody>
  </EditorLayout>
);

export default Editor;
