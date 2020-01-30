import React, { useReducer } from 'react';

import MainContext from './MainContext';
import MainReducer from './MainReducer';

import { TOGGLE_NAVIGATION, CHANGE_LANGUAGE } from '../types';

const MainState = props => {
	const initialState = {
		isNavOpen: false,
		language: 'lt',
	};
	const [state, dispatch] = useReducer(MainReducer, initialState);

	const changeLanguage = lang => {
		dispatch({
			type: CHANGE_LANGUAGE,
			payload: lang,
		});
	};

	const toggleNav = () => {
		dispatch({
			type: TOGGLE_NAVIGATION,
		});
	};

	return (
		<MainContext.Provider
			value={{
				isNavOpen: state.isNavOpen,
				language: state.language,
				changeLanguage,
				toggleNav,
			}}
		>
			{props.children}
		</MainContext.Provider>
	);
};

export default MainState;
