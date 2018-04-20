// @flow
import React, { Fragment } from 'react';
import styled from 'styled-components';
import ConnectedPreview from './Preview/ConnectedPreview';
import ConnectedEditor from './Editor/ConnectedEditor';

const OutputScreen = styled.div`
  margin: 0 auto;
  margin-top: 1vh;
  background: #dadada;
  width: 50vmin;
  height: 40vmin;
  border: 1px solid black;

  svg {
    margin: 1vmin;
    width: 48vmin;
    height: 38vmin;
    border: 1px dashed ${p => p.theme.panel.passiveAccent};
  }
`;

const FormPanel = styled.div`
  margin: 0 auto;
  margin-top: 1vh;
  margin-bottom: 1vw;
`;

const PathBuilder = (props: any) => (
  <Fragment>
    <OutputScreen>
      <div>
        <ConnectedPreview />
      </div>
    </OutputScreen>
    <FormPanel>
      <ConnectedEditor />
    </FormPanel>
  </Fragment>
);

export default PathBuilder;
