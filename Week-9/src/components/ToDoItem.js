import React from 'react';

export const ToDoItem = (props) => {
	const { toDoItem, onDelete, onCheck, onUncheck } = props;
	const onChange = (event) => {
		if (event.target.checked) {
			onCheck();
		} else {
			onUncheck();
		}
	};

	const style = {};
	if (toDoItem.done) {
		style['textDecoration'] = 'line-through';
	}

	return (
		<div className="todo-item">
			<div className="todo-item-list">
				<div className="left-container">
					<input
						type="checkbox"
						checked={toDoItem.done}
						onChange={onChange}
					/>
					<span style={style} className="to-do-item-name">
						{toDoItem.name}
					</span>
				</div>

				<button onClick={(event) => onDelete()} className="remove-item">
					x
				</button>
			</div>
		</div>
	);
};
