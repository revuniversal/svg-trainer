// @flow
import React from 'react';
import SvgEditorLayout from './SvgEditorLayout';
import ConnectedPreview from './Preview/ConnectedPreview';
import ConnectedEditor from './Editor/ConnectedEditor';

const SvgEditor = (props: any) => (
  <SvgEditorLayout>
    <SvgEditorLayout.PreviewPanel>
      <ConnectedPreview />
    </SvgEditorLayout.PreviewPanel>
    <SvgEditorLayout.EditorPanel>
      <ConnectedEditor />
    </SvgEditorLayout.EditorPanel>
  </SvgEditorLayout>
);

export default SvgEditor;
