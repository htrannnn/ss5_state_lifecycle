import React from "react";
import Header from "./Header";
import { getAllTask } from "../defaultData/todoData";
import Todo from "./Todo";

class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoData: getAllTask(), //lấy dữ liệu từ TodoData
		};
	}

	render() {
		return (
			<>
				<Header />
				{/* nhúng Header.js vào thẳng file component cha là TodoApp.js, sau đó nhúng component cha vào App.js, nên không cần nhúng từng file component con vào App.js nữa */}
				<Todo todoData={this.state.todoData} />
				{/* this.state: nơi chứa dữ liệu */}
			</>
		);
	}
}

export default TodoApp;
