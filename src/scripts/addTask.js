import { writeTasks } from './writeTasks.js';

export function addTask(tasks) {
	const addTaskButton = document.querySelector('[data-add-task-button]');
	const inputTask = document.querySelector('[data-add-task-input]');

	let tasksQuantity = 0;
	if(tasks) {
		tasksQuantity = tasks.length;
	} else {
		tasks = [];
	}

	addTaskButton.addEventListener('click', () => {
		if(inputTask.value) {
			tasks.push({
				id: tasksQuantity ++, 
				text: `${inputTask.value}`, 
				completed: false
			});
	
			inputTask.value = '';
			inputTask.focus();
			writeTasks(tasks);
		}
		else
		{
			inputTask.focus();
		}
	});
}