//@flow
import React from 'react';
import { connect } from 'react-redux';
import Editor from './Editor';

function mapState({ currentPath }) {
  return {
    start: currentPath.start,
    commands: currentPath.commands,
    autoClose: currentPath.autoClose,
    strokeWidth: currentPath.strokeWidth,
    stroke: currentPath.stroke,
    fill: currentPath.fill
  };
}

function mapDispatch({ currentPath }) {
  return currentPath;
}

const ConnectedEditor = props => <Editor {...props} />;

export default connect(mapState, mapDispatch)(ConnectedEditor);
