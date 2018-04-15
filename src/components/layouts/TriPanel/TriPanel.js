import React from 'react';
import styled from 'styled-components';
import Panel from './Panel';

const Container = styled.div`
  margin: 0 auto;
`;
const PanelContainer = styled.svg`
  width: 100vw;
  height: 33vh;
  text-align: center;
`;

const TriPanel = ({ children }) => (
  <Container>
    <PanelContainer viewBox="0 0 300 100">{children}</PanelContainer>
  </Container>
);

TriPanel.Panel = Panel;

export default TriPanel;
