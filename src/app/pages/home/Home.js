import React from 'react';

import './home.css';
import Text from '../../components/text';

const Home = props => {
	return (
		<>
			<h1>
				<Text tid='home.h1' />
			</h1>
			<p>
				<Text tid='home.p' />
			</p>
		</>
	);
};

export default Home;
