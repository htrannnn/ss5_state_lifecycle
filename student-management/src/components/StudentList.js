import React from "react";
import { addStudent, getAllStudent } from "../service/studentService";
import AddComponent from "./AddComponent";

class StudentList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			studentList: getAllStudent(),
		};
	}

	handleAddStudent = (student) => {
		addStudent(student);
		this.setState({
			...this.state,
			studentList: getAllStudent(),
		});
	};

	render() {
		return (
			<>
				<h1 className="ms-2">StudentList</h1>
				<AddComponent handleAddStudent={this.handleAddStudent} />
				<table className="table table-light">
					<thead>
						<tr>
							<th>Name</th>
							<th>Phone</th>
							<th>Email</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{this.state.studentList.map((e, i) => (
							<tr key={e.name}>
								<td>{e.name}</td>
								<td>{e.phone}</td>
								<td>{e.email}</td>
								<td>
									<button className="btn btn-secondary rounded-0 me-1">Edit</button>
									<button className="btn btn-secondary rounded-0">Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</>
		);
	}
}
export default StudentList;
