import '/src/styles/style.css';
import { writeTasks } from './writeTasks.js';
import { addTask } from './addTask.js';

import { javascriptLink } from './javascript-link.js';

const inputTask = document.querySelector('[data-add-task-input]');
inputTask.focus();

let tasks = JSON.parse(localStorage.getItem('tasks'));
// localStorage.clear();
// console.log(tasks)

writeTasks(tasks);
addTask(tasks);
javascriptLink();

