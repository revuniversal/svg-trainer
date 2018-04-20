// @flow
import React from 'react';
import styled from 'styled-components';
import CurveForm from './CurveForm';
import LineForm from './LineForm';
import type { Command } from '../../../common/Commands';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px;

  &:not(last-child) {
    user-select: none;
    border-bottom: 1px solid ${p => p.theme.panel.accent};
  }

  div,
  h3 {
    margin-right: 14px;
    flex-basis: 15%;
  }
`;

const ButtonLink = styled.a`
  margin: 0 4px;
  text-decoration: none;
  cursor: pointer;
  color: ${p =>
    p.active ? p.theme.panel.accent : p.theme.panel.passiveAccent};
`;

interface Props {
  command: Command;
  onEdit: Command => void;
  onDelete: () => void;
  canSortUp: boolean;
  onSortUp: () => void;
  canSortDown: boolean;
  onSortDown: () => void;
}

function CommandForm({
  command,
  canSortUp,
  onSortUp,
  canSortDown,
  onSortDown,
  onDelete,
  onEdit
}: Props) {
  return (
    <Container>
      <div>
        <ButtonLink active onClick={onDelete}>
          &times;
        </ButtonLink>
        <span> | </span>
        <ButtonLink active={canSortUp} onClick={onSortUp}>
          &uarr;
        </ButtonLink>
        <ButtonLink active={canSortDown} onClick={onSortDown}>
          &darr;
        </ButtonLink>
        <label>{command.commandType}</label>
      </div>
      {(function() {
        switch (command.commandType) {
          case 'CURVE':
            return <CurveForm curve={command} onChange={onEdit} />;
          case 'LINE':
            return <LineForm line={command} onChange={onEdit} />;
          default:
            return <h3>Unknown Path Command Type {command.commandType}</h3>;
        }
      })()}
    </Container>
  );
}

export default CommandForm;
