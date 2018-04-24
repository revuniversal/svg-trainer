import styled from 'styled-components';

const HEADER_ROW_HEIGHT = '26px';
const PROPERTIES_COLUMN_WIDTH = '25%';

const HeaderText = styled.h3`
  float: left;
  line-height: ${HEADER_ROW_HEIGHT};
  height: ${HEADER_ROW_HEIGHT};
  padding: 0;
  margin: 0;
`;

const EditorLayout = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: ${PROPERTIES_COLUMN_WIDTH} auto;
  grid-template-rows: ${HEADER_ROW_HEIGHT} auto;
  grid-template-areas:
    'PropertiesHeader CommandsHeader'
    'PropertiesBody CommandsBody';
  overflow: hidden;
  border-collapse: collapse;
  background-color: ${p => p.theme.panel.primary};
  color: ${p => p.theme.panel.accent};
  font-size: 12px;
  grid-gap: 1px 1px;
  align-items: stretch;
  justify-items: stretch;

  > div {
    background-color: ${p => p.theme.panel.background};
    padding: 0 4px;
  }

  h3 {
    float: left;
    line-height: ${HEADER_ROW_HEIGHT};
    height: ${HEADER_ROW_HEIGHT};
    padding: 0;
    margin: 0;
  }
`;

EditorLayout.PropertiesHeader = styled.div`
  overflow: hidden;
  grid-area: PropertiesHeader;
  > h3 {
    ${HeaderText};
  }
`;

EditorLayout.PropertiesBody = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  grid-area: PropertiesBody;
`;

EditorLayout.CommandsHeader = styled.div`
  overflow: hidden;
  grid-area: CommandsHeader;
`;

EditorLayout.CommandsBody = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  grid-area: CommandsBody;
`;

export default EditorLayout;
