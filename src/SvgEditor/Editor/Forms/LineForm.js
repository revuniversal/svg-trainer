/// @flow
import React, { Component, Fragment } from 'react';
import CoordinateInput from './CoordinateInput';
import type { Line } from '../../../common/Commands';
import type { Coordinate } from '../../../common/Coordinate';

interface Props {
  line: Line;
  onChange: Line => void;
}
interface State {
  line: Line;
}

class CurveForm extends Component<Props, State> {
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (nextProps.line != null) {
      return { line: nextProps.line };
    } else {
      return null;
    }
  }

  handleCoordinateChange = (value: Coordinate) => {
    const line = { ...this.state.line, to: value };

    this.setState({ line });
    this.props.onChange(line);
  };

  render() {
    return (
      <Fragment>
        <CoordinateInput
          displayName="To"
          coordinate={this.props.line.to}
          onCoordinateChange={this.handleCoordinateChange}
        />
      </Fragment>
    );
  }
}

export default CurveForm;
