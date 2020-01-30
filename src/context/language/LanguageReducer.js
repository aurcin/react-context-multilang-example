import { CHANGE_LANGUAGE } from '../types';
import { dictionaryList } from '../../languages/languages';

export default (state, action) => {
	switch (action.type) {
		case CHANGE_LANGUAGE:
			return {
				...state,
				language: action.payload,
				dictionary: dictionaryList[action.payload],
			};

		default:
			return state;
	}
};
