import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import LanguageContext from '../../../context/language/LanguageContext';
import Text from '../text';

import './header.css';

const Header = () => {
	const languageContext = useContext(LanguageContext);

	const { changeLanguage } = languageContext;
	return (
		<header className='block red'>
			<nav>
				<ul>
					<li>
						<Link className='link' to='/'>
							<Text tid='nav.home' />
						</Link>
					</li>
					<li>
						<Link className='link' to='/about'>
							<Text tid='nav.about' />
						</Link>
					</li>
				</ul>
			</nav>
			<div className='lang-menu'>
				<button
					onClick={() => {
						changeLanguage('lt');
					}}
				>
					LT
				</button>
				<button
					onClick={() => {
						changeLanguage('en');
					}}
				>
					EN
				</button>
			</div>
		</header>
	);
};

export default Header;
