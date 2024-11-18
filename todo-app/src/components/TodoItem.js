import React from "react";

class TodoItem extends React.Component {
	render() {
		const { id, title, completed } = this.props.todo;
		return (
			<li className="todo-item">
				<input
					type="checkbox"
					checked={completed}
					onChange={() => {
						this.props.handleChange(id);
					}}
				/>
				{this.props.todo.title}
				{/* khi để checked thì trạng thái của check box sẽ phụ thuộc vào state */}
			</li>
		);
	}
}

export default TodoItem;
