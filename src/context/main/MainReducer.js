import { CHANGE_LANGUAGE, TOGGLE_NAVIGATION } from '../types';

export default (state, action) => {
	switch (action.type) {
		case CHANGE_LANGUAGE:
			return {
				...state,
				language: action.payload,
			};
		case TOGGLE_NAVIGATION:
			const isNavOpen = !state.isNavOpen;
			return {
				...state,
				isNavOpen: isNavOpen,
			};
		default:
			return state;
	}
};
