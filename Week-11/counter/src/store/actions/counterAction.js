import { INCREASE_COUNTER, RESET_COUNTER, SUBTRACT_COUNTER } from '../types';

export const addCounter = () => {
	return {
		type: INCREASE_COUNTER,
	};
};

export const decreaseCounter = () => {
	return {
		type: SUBTRACT_COUNTER,
	};
};

export const resetCounter = () => {
	return {
		type: RESET_COUNTER,
	};
};
