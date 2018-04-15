import React, { Component } from 'react';
import styled from 'styled-components';
import Editor from './Editor';

const defaultCoordinate = { x: 0, y: 0 };
const defaultCurve = {
  type: 'CURVE',
  to: defaultCoordinate,
  handle1: defaultCoordinate,
  handle2: defaultCoordinate
};

const OutputScreen = styled.div`
  margin: 0 auto;
  margin-top: 1vh;
  background: #dadada;
  width: 50vw;
  height: 40vh;
  border: 1px solid black;

  > svg {
    width: 100%;
    height: 100%;
  }
`;

const FormPanel = styled.div`
  margin: 0 auto;
  margin-top: 1vh;
  margin-bottom: 1vw;
`;

class PathBuilder extends Component {
  state = {
    start: { x: 5, y: 5 },
    stroke: 'black',
    fill: 'white',
    operations: [
      {
        ...defaultCurve,
        to: { x: 0, y: 5 }
      },
      {
        to: { x: 5, y: 0 },
        handle1: { x: 0, y: 5 },
        handle2: { x: 5, y: 5 }
      }
    ],
    autoClose: true
  };

  deleteCurve = (index, curve) => {
    var ops = [...this.state.operations];
    ops.splice(index, 1);
    this.setState({
      operations: ops
    });
  };

  addCurve = curve => {
    this.setState({
      operations: [...this.state.operations, curve]
    });
  };

  editCurve = (index, curve) => {
    let operations = [...this.state.operations];
    operations[index] = curve;

    this.setState({ operations });
  };

  curveToData({ to, handle1: h1, handle2: h2 }) {
    return `c ${h1.x} ${h1.y} ${h2.x} ${h2.y} ${to.x} ${to.y}`;
  }

  mapOperationsToPathData = () => `
      m ${this.state.start.x} ${this.state.start.y}
      ${this.state.operations.map(this.curveToData).join(' ')}
      ${this.state.autoClose ? 'Z' : ''}
    `;

  render() {
    return (
      <React.Fragment>
        <OutputScreen>
          <svg viewBox="0 0 50 40">
            <path
              stroke={this.state.stroke}
              fill={this.state.fill}
              d={this.mapOperationsToPathData()}
            />
          </svg>
        </OutputScreen>
        <FormPanel>
          <Editor
            operations={this.state.operations}
            addOperation={curve => this.addCurve(curve || defaultCurve)}
            editOperation={this.editCurve}
            deleteOperation={this.deleteCurve}
          />
        </FormPanel>
      </React.Fragment>
    );
  }
}

export default PathBuilder;
