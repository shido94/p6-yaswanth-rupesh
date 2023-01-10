import { DARK_MODE } from '../types';

export const handleDarkMode = (e) => async (dispatch) => {
	//dispatch data to reducer to be accessed as payload.action
	dispatch({
		type: DARK_MODE,
		payload: e,
	});
};
