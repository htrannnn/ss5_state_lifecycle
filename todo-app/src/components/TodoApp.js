import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./Header";
import { addTodo, getAllTask } from "../defaultData/todoData";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoData: getAllTask(), //lấy dữ liệu từ TodoData
		};
	}

	handleCheckboxChange = (id) => {
		console.log("clicked id = " + id);
		this.setState({
			...this.state,
			todoData: this.state.todoData.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
			//để nút check hoạt động
		});
	};

	handleAddTodo = (data) => {
		addTodo(data);
		this.setState({
			...this.state,
			todoData: getAllTask(),
		});
	};
	render() {
		return (
			<>
				<Header />
				{/* nhúng Header.js vào thẳng file component cha là TodoApp.js, sau đó nhúng component cha vào App.js, nên không cần nhúng từng file component con vào App.js nữa */}
				<AddTodo handleAddTodo={this.handleAddTodo} />
				<Todo todoData={this.state.todoData} handleChange={this.handleCheckboxChange} />
				{/* this.state: nơi chứa dữ liệu */}
			</>
		);
	}
}

export default TodoApp;
