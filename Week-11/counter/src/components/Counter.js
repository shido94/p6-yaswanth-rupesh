import React from 'react';

import Button from './Button';
import { connect } from 'react-redux';

import {
	addCounter,
	decreaseCounter,
	resetCounter,
} from '../store/actions/counterAction';

function Counter(props) {
	return (
		<div className="Counter">
			<header>Counter</header>
			<h1>{props.steps}</h1>
			<div className="row">
				<div className="mt-2">
					<Button variant="plusBtn" onClick={props.increase}>
						Add
					</Button>
				</div>

				<div className="mt-2">
					<Button variant="minusBtn" onClick={props.subtract}>
						Subtract
					</Button>
				</div>
			</div>

			<div className="mt-2">
				<Button variant="resetBtn" onClick={props.reset}>
					Reset
				</Button>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		steps: state.stepper.steps,
	};
};
// map dispatching actions

const mapDispatchToProps = (dispatch) => {
	return {
		increase: () => dispatch(addCounter()),
		subtract: () => dispatch(decreaseCounter()),
		reset: () => dispatch(resetCounter()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
