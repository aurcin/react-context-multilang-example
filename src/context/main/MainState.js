import React, { useReducer } from 'react';

import mainContext from './MainContext';
import MainReducer from './MainReducer';

//import { SET_ALERT } from '../types';

const MainState = props => {
	const initialState = {
		text: 'labas',
	};
	const [state, dispatch] = useReducer(MainReducer, initialState);

	// const setAlert = (msg, type, timeout = 5000) => {
	// 	const id = uuid.v4();
	// 	dispatch({
	// 		type: SET_ALERT,
	// 		payload: { msg, type, id },
	// 	});

	// 	setTimeout(
	// 		() =>
	// 			dispatch({
	// 				type: REMOVE_ALERT,
	// 				payload: id,
	// 			}),
	// 		timeout,
	// 	);
	// };

	return (
		<mainContext.Provider
			value={{
				text: state.text,
				// setAlert,
			}}
		>
			{props.children}
		</mainContext.Provider>
	);
};

export default MainState;
