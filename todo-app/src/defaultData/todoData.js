const todoData = [
	{
		id: 1,
		title: "Wash the dishes",
		completed: true,
	},
	{
		id: 2,
		title: "Do laundry",
		completed: false,
	},
	{
		id: 3,
		title: "Throw garbage",
		completed: false,
	},
];

export function getAllTask() {
	return [...todoData]; //trả về bản sao của todoData để tránh file gốc bị sửa đổi ngoài ý muốn
}

export function addTodo(data) {
	todoData.push(data);
}
