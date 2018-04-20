import React, { Component } from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: ${p => p.justify};

  input {
    width: 40px;
    margin: 0 6px;
  }
`;

class CoordinateInput extends Component {
  handleChange = (axis, value) =>
    this.props.onCoordinateChange({
      ...this.props.coordinate,
      [axis]: value
    });

  render() {
    const { displayName, coordinate } = this.props;
    return (
      <div>
        <Row justify="left">
          <label>{displayName}</label>
        </Row>
        <Row justify="center">
          <div>
            <label>x</label>
            <input
              type="number"
              onChange={e => this.handleChange('x', e.target.value)}
              value={coordinate.x}
            />
          </div>
          <div>
            <label>y</label>
            <input
              type="number"
              onChange={e => this.handleChange('y', e.target.value)}
              value={coordinate.y}
            />
          </div>
        </Row>
      </div>
    );
  }
}

export default CoordinateInput;
