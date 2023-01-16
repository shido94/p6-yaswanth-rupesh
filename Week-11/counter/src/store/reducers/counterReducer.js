import { INCREASE_COUNTER, SUBTRACT_COUNTER, RESET_COUNTER } from '../types';

const INITIAL_STATE = {
	steps: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case INCREASE_COUNTER:
			return {
				...state,
				steps: state.steps + 1,
			};
		case SUBTRACT_COUNTER:
			return {
				...state,
				steps: state.steps > 0 ? state.steps - 1 : 0,
			};

		case RESET_COUNTER:
			return {
				...state,
				steps: 0,
			};

		default:
			return state;
	}
};

export default reducer;
