import React, { useReducer } from 'react';

import LanguageContext from './LanguageContext';
import LanguageReducer from './LanguageReducer';

import { CHANGE_LANGUAGE } from '../types';
import { dictionaryList, languageOptions } from '../../languages/languages';

const LanguageState = props => {
	const initialState = {
		language: languageOptions[0],
		dictionary: dictionaryList[languageOptions[0].id],
	};
	const [state, dispatch] = useReducer(LanguageReducer, initialState);

	const changeLanguage = lang => {
		dispatch({
			type: CHANGE_LANGUAGE,
			payload: lang,
		});
	};

	return (
		<LanguageContext.Provider
			value={{
				language: state.language,
				dictionary: state.dictionary,
				changeLanguage,
			}}
		>
			{props.children}
		</LanguageContext.Provider>
	);
};

export default LanguageState;
