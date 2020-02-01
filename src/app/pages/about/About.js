import React from 'react';

import './about.css';
import Text from '../../components/text';

const About = props => {
	return (
		<>
			<h2>
				<Text tid='about.h' />
			</h2>
			<p>
				<Text tid='about.p1' />
			</p>
			<p>
				<Text tid='about.p2' />
			</p>
		</>
	);
};

export default About;
