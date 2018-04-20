// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import CommandForm from './Forms/CommandForm';
import CoordinateInput from './Forms/CoordinateInput';

import type { Coordinate } from '../../common/Coordinate';
import type { Command } from '../../common/Commands';

const Container = styled.div`
  background-color: ${p => p.theme.panel.background};
  color: ${p => p.theme.panel.accent};
  height: 100%;
  font-size: 12px;
  overflow-x: hidden;
  overflow-y: scroll;

  label {
    user-select: none;
    text-transform: uppercase;
    letter-spacing: 0.6;
  }
`;

const PropertiesPanel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px;

  h3,
  div {
    margin-right: 14px;
  }
`;

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

class PathEditor extends Component<Props> {
  render() {
    const {
      start,
      editStart,
      autoClose,
      editAutoClose,
      commands,
      deleteCommand,
      addCurve,
      addLine,
      editCommand,
      sortCommandUp,
      sortCommandDown
    } = this.props;

    return (
      <Container>
        <PropertiesPanel>
          <h3>Path Properties</h3>

          <div>
            <CoordinateInput
              displayName="Starting Point"
              coordinate={start}
              onCoordinateChange={editStart}
            />
          </div>

          <div>
            <label>
              Autoclose{' '}
              <input
                type="checkbox"
                checked={autoClose}
                onChange={editAutoClose}
              />
            </label>
          </div>
        </PropertiesPanel>

        <hr />

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

        <AddButton type="button" onClick={addCurve}>
          + Add Curve
        </AddButton>
        <AddButton type="button" onClick={addLine}>
          + Add Line
        </AddButton>
      </Container>
    );
  }
}

export default PathEditor;
