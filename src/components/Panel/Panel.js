import React from 'react';

import styled from '@emotion/styled';
import { AlarmCard, DateView, RecallCard, TimeView, WeatherCard } from '@packages/widgets-homekit-react-components/src';
import { PanelSection } from '@packages/widgets-homekit-react-components/src';
import ErrorBoundary from '../ErrorBoundary';
import YeeLightCards from '@components/YeeLightCards';

const PanelContainer = styled.div`
	position: relative;
	height: 100%;
	width: 360px;
	padding: 30px;
	box-sizing: border-box;
	background-color: #20202050;
`;

const cities = ['Montreal,CA', 'Saint-Avold,FR'];

const alarmSensors = [
	'binary_sensor.porte_entree_contact',
	'binary_sensor.porte_balcon_contact',
	'binary_sensor.fenetre_chambre_contact',
];

export function Panel() {
	return (
		<ErrorBoundary>
			<PanelContainer>
				<TimeView />
				<DateView />
				<YeeLightCards />
				<PanelSection>
					<WeatherCard cities={cities} />
				</PanelSection>
				<PanelSection>
					<RecallCard />
				</PanelSection>
				<PanelSection>
					<AlarmCard alarmSensors={alarmSensors} />
				</PanelSection>
			</PanelContainer>
		</ErrorBoundary>
	);
}
