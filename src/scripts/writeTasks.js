export function writeTasks(tasks) {
	let tasksWrapper = document.querySelector('[data-tasks-list]');

	if (!tasks) {
		tasksWrapper.innerHTML = `<li>No tasks added yet</li>`;
	} 
	else 
	{
		let taskHTML = ``;
		tasks.forEach(task => taskHTML += `<li>${task.text}</li>`);
		tasksWrapper.innerHTML = taskHTML;
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}
}