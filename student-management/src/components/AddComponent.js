import React from "react";
import { addStudent } from "../service/studentService";

class AddComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			phone: "",
			email: "",
		};
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			...this.state, //sao chép toàn bộ trạng thái
			[name]: value,
			//computed property name, [name]: biến chứa tên của thuộc tính muốn cập nhật, value: giá trị mới muốn gán cho thuộc tính
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.handleAddStudent(this.state);
	};

	render() {
		const { name, phone, email } = this.state;

		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<div className="row ms-2">
						<label className="col-sm-1">Name:</label>
						<div className="col-sm-4">
							<input type="text" name="name" onChange={this.handleChange} value={name} className="form-control"></input>
						</div>
					</div>
					<div className="row ms-2 mt-2">
						<label className="col-sm-1">Phone:</label>
						<div className="col-sm-4">
							<input type="text" name="phone" onChange={this.handleChange} value={phone} className="form-control"></input>
						</div>
					</div>
					<div className="row ms-2 mt-2">
						<label className="col-sm-1">Email:</label>
						<div className="col-sm-4">
							<input type="text" name="email" onChange={this.handleChange} value={email} className="form-control"></input>
						</div>
					</div>
					<button type="submit" className="btn btn-secondary mt-3 ms-3 rounded-0">
						Submit
					</button>
				</form>
			</>
		);
	}
}

export default AddComponent;
