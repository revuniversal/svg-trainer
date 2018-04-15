import React, { Component } from 'react';
import styled from 'styled-components';
import CoordinateInput from './CoordinateInput';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4px;

  &:not(last-child) {
    border-bottom: 1px solid ${p => p.theme.panel.accent};
  }
`;

class CurveForm extends Component {
  state = { curve: null };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.curve) {
      return { curve: nextProps.curve };
    } else {
      return null;
    }
  }

  handleDelete = e => this.props.onRequestDelete(this.state.curve);

  handleCoordinateChange = (key, value) => {
    const curve = {
      ...this.state.curve,
      [key]: value
    };

    this.setState({ curve }, this.commitChanges);
  };

  commitChanges = () => this.props.onRequestEdit(this.state.curve);

  render() {
    const { to, handle1, handle2 } = this.state.curve;

    return (
      <Container>
        <button type="button" onClick={this.handleDelete}>
          &times;
        </button>
        <label>Curve</label>
        <CoordinateInput
          displayName="To"
          coordinate={to}
          onCoordinateChange={c => this.handleCoordinateChange('to', c)}
        />
        <CoordinateInput
          displayName="Handle 1"
          coordinate={handle1}
          onCoordinateChange={c => this.handleCoordinateChange('handle1', c)}
        />
        <CoordinateInput
          displayName="Handle 2"
          coordinate={handle2}
          onCoordinateChange={c => this.handleCoordinateChange('handle2', c)}
        />
      </Container>
    );
  }
}

export default CurveForm;
