import regeneratorRuntime from 'regenerator-runtime';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { CardContainer } from 'homekit-react-components';
import { WeatherRow } from './WeatherRow';
import { CardTitle } from '../CardTitle';
import { getWeather } from '../../stores/weather';

const WeatherCardContainer = styled(CardContainer)`
	width: 100%;
	height: initial;
	padding: 0px;
	cursor: unset;
`;

async function loadWeathers(cities) {
	const promises = cities.map(city => getWeather(city));
	const results = await Promise.all(promises);
	return results;
}
export function WeatherCard(props) {
	const [weather, setWeather] = useState();

	useEffect(() => {
		loadWeathers(props.cities).then(results => {
			setWeather(results);
		});
	}, []);

	return (
		<WeatherCardContainer>
			<CardTitle>Météo</CardTitle>
			{weather && weather.map(w => <WeatherRow key={w.city} weather={w} />)}
		</WeatherCardContainer>
	);
}
