export function writeTasks(tasks) {
	let tasksWrapper = document.querySelector('[data-tasks-list]');

	if (tasks.length == 0) {
		tasksWrapper.innerHTML = `<li>No tasks added yet</li>`;
	} 
	else 
	{
		let taskHTML = ``;
		tasks.forEach(task => taskHTML += `<li>${task.text}</li>`);
		tasksWrapper.innerHTML = taskHTML;
	}
}