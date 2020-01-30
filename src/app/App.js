import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MainState from '../context/main/MainState';

const App = () => {
	return (
		<MainState>
			<Router>App</Router>
		</MainState>
	);
};

export default App;
