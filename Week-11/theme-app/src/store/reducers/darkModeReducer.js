import { DARK_MODE } from '../types';

// initial state
const initialState = {
	isDarkMode: false,
};

const darkModeReducer = (state = initialState, action) => {
	switch (action.type) {
		case DARK_MODE:
			return {
				...state,
				// getting value from the action file and changing isDarkMode State.
				isDarkMode: action.payload,
			};
		default:
			return state;
	}
};

export default darkModeReducer;
