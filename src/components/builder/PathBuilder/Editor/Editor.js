import React, { Component } from 'react';
import styled from 'styled-components';
import CurveForm from './CurveForm';

const Container = styled.div`
  background-color: ${p => p.theme.panel.background};
  color: ${p => p.theme.panel.accent};
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;

  label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.6;
  }
`;

class PathEditor extends Component {
  render() {
    const {
      operations,
      deleteOperation,
      addOperation,
      editOperation
    } = this.props;

    return (
      <Container>
        {operations.map((operation, i) => (
          <CurveForm
            key={i}
            index={i}
            curve={operation}
            onRequestDelete={op => deleteOperation(i, op)}
            onRequestEdit={op => editOperation(i, op)}
          />
        ))}
        <button onClick={() => addOperation()}>Add Curve</button>
      </Container>
    );
  }
}

export default PathEditor;
