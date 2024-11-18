import React from "react";

class AddTodo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			title: "",
		};
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleAddTodo(this.state); //truyền state hiện tại lên component cha
	};

	render() {
		const { title } = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
				<div className="input-group">
					<input type="text" className="form-control" onChange={this.handleChange} value={title} name="title" placeholder="Add new task" />
					<input type="submit" value="Submit" className="input-group-text btn btn-secondary rounded-0" id="basic-addon2" />
				</div>
			</form>
		);
	}
}

export default AddTodo;
