import React from "react";
import TodoItem from "./TodoItem";

class Todo extends React.Component {
	render() {
		const { todoData } = this.props;
		return (
			<>
				<ul>
					{/* this.props: dữ liệu được truyền vào từ this.state */}
					{this.props.todoData.map((todo) => (
						<TodoItem key={todo.id} todo={todo} />
					))}
				</ul>
			</>
		);
	}
}

export default Todo;
