import styled from 'styled-components';

const SvgEditorLayout = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 280px auto;
  grid-gap: 1px 1px;
  height: 100%;
  width: 100%;
  justify-items: stretch;
  align-items: stretch;
  background: ${p => p.theme.panel.primary};

  label {
    user-select: none;
    text-transform: uppercase;
    letter-spacing: 0.6;
  }

  svg#Preview {
    height: 272px;
    width: 98%;
    margin: 3px 1%;
    border: 1px dashed ${p => p.theme.panel.primary};
    background: white;
  }
`;
SvgEditorLayout.PreviewPanel = styled.div`
  background: ${p => p.theme.panel.background};
  grid-column: 1 2;
  grid-row: 1 2;
  overflow: hidden;
`;
SvgEditorLayout.EditorPanel = styled.div`
  background: ${p => p.theme.panel.background};
  grid-column: 1 2;
  grid-row: 2 3;
  overflow: hidden;
`;

export default SvgEditorLayout;
