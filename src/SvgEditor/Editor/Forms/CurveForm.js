// @flow
import React, { Component, Fragment } from 'react';
import CoordinateInput from './CoordinateInput';
import type { Curve } from '../../../types/Commands';
import type { Coordinate } from '../../../types/Coordinate';

interface Props {
  curve: Curve;
  onChange: Curve => void;
}

interface State {
  curve: Curve;
}

class CurveForm extends Component<Props, State> {
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (nextProps.curve != null) {
      return { curve: nextProps.curve };
    } else {
      return null;
    }
  }

  handleCoordinateChange = (
    key: 'to' | 'handle1' | 'handle2',
    value: Coordinate
  ) => {
    const curve = {
      ...this.state.curve,
      [key]: value
    };

    this.setState({ curve });
    this.props.onChange(curve);
  };

  render() {
    const { curve } = this.props;

    return (
      <Fragment>
        <CoordinateInput
          displayName="To"
          coordinate={curve.to}
          onCoordinateChange={c => this.handleCoordinateChange('to', c)}
        />
        <CoordinateInput
          displayName="Handle 1"
          coordinate={curve.handle1}
          onCoordinateChange={c => this.handleCoordinateChange('handle1', c)}
        />
        <CoordinateInput
          displayName="Handle 2"
          coordinate={curve.handle2}
          onCoordinateChange={c => this.handleCoordinateChange('handle2', c)}
        />
      </Fragment>
    );
  }
}

export default CurveForm;
