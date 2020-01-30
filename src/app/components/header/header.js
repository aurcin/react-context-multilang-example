import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LanguageContext from '../../../context/language/LanguageContext';
import Text from '../text';

import './header.css';

const Header = props => {
	const languageContext = useContext(LanguageContext);

	const { isNavOpen, language, toggleNav, changeLanguage } = languageContext;
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
						<Link className='link' to='/portfolio'>
							<Text tid='nav.portfolio' />
						</Link>
					</li>
					<li>
						<Link className='link' to='/about'>
							<Text tid='nav.about' />
						</Link>
					</li>
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
				</ul>
				{/* {isNavOpen && (
					<div className='js-nav nav'>
						<ul className='nav-list'>
							<li>
								<Link className='link' to='/' onClick={toggleNav}>
									{(() => {
										if (language === 'en') {
											return translationEN.nav.home;
										} else {
											return translationLT.nav.home;
										}
									})()}
								</Link>
							</li>

							<li>
								<Link className='link' to='/portfolio' onClick={toggleNav}>
									{(() => {
										if (language === 'en') {
											return translationEN.nav.portfolio;
										} else {
											return translationLT.nav.portfolio;
										}
									})()}
								</Link>
							</li>

							<li>
								<Link className='link' to='/about' onClick={toggleNav}>
									{(() => {
										if (language === 'en') {
											return translationEN.nav.about;
										} else {
											return translationLT.nav.about;
										}
									})()}
								</Link>
							</li>

							<li className='nav-languages'>
								<a className='link' onClick={() => changeLanguage('en')}>
									EN
								</a>

								<span className='nav-divider'>/</span>

								<a className='link' onClick={() => changeLanguage('en')}>
									LT
								</a>
							</li>
						</ul>
					</div>
				)}

				{
					<button
						className={
							isNavOpen ? 'nav-toggler nav-toggler--open' : 'nav-toggler'
						}
						type='button'
						onClick={() => toggleNav}
					>
						<span />
						<span />
						<span />
					</button>
				} */}
			</nav>
		</header>
	);
};

Header.propTypes = {};

export default Header;
