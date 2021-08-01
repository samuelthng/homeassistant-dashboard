import './font.css';
import './index.css';
import { StrictMode } from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@styles/theme';
import { Panel } from '@components/Panel';

const App = () => {
	return (
		<StrictMode>
			<ThemeProvider theme={theme}>
				<div className="App">
					<Panel />
				</div>
			</ThemeProvider>
		</StrictMode>
	);
};
export default App;
