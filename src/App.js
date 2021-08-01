import './font.css';
import './index.css';
import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@styles/theme';
import { Panel } from '@components/Panel';

export default class App extends React.Component {
	render() {
		return (
			<React.StrictMode>
				<ThemeProvider theme={theme}>
					<div className="App">
						<Panel />
					</div>
				</ThemeProvider>
			</React.StrictMode>
		);
	}
}
