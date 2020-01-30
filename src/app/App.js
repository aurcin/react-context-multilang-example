import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';

import MainState from '../context/main/MainState';

const App = () => {
	return (
		<MainState>
			<Router>
				<Header />
				<div className='container'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/portfolio' component={Portfolio} />
						<Route exact path='/about' component={About} />
					</Switch>
				</div>
				<Footer />
			</Router>
		</MainState>
	);
};

export default App;
