import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';

import Languagestate from '../context/language/LanguageState';

const App = () => {
	return (
		<Languagestate>
			<Router>
				<Header />
				<div className='container block'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/about' component={About} />
					</Switch>
				</div>
				<Footer />
			</Router>
		</Languagestate>
	);
};

export default App;
