import React from 'react';
import styled from '@emotion/styled'
import { DateView, TimeView, Title } from '../Common';

const PanelContainer = styled.div`
  height: 100%;
  width: 380px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #20202050;
  text-transform: capitalize;
`;

const PanelSection = styled.div`
  height: 20px;
  margin-top: 20px;
`

export function Panel() {
  return (
    <PanelContainer>
      <TimeView />
      <DateView />

      <PanelSection>
        <Title>Météo</Title>
      </PanelSection>
      <PanelSection>
        <Title>Rappels</Title>
      </PanelSection>
      <PanelSection>
        <Title>Alarme</Title>
      </PanelSection>
    </PanelContainer>
  );
};