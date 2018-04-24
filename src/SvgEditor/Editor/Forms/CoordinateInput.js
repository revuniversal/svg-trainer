import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-right: 14px;
  &:last-child {
    margin-right: 0;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-right: 0;

  input {
    width: 40px;
    margin: 0;
  }

  label:not(first-child) {
    margin-left: 4px;
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
      <Container>
        <Row>
          <label>{displayName}</label>
        </Row>
        <Row>
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
      </Container>
    );
  }
}

export default CoordinateInput;
