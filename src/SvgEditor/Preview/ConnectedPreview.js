// @flow
import React from 'react';
import { connect } from 'react-redux';
import Preview from './Preview';

function mapState(state) {
  return {
    paths: [state.currentPath]
  };
}

/**
 *
 */
const ConnectedPreview = props => <Preview {...props} />;

export default connect(mapState, null)(ConnectedPreview);
