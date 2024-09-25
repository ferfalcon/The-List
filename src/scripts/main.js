import '/src/styles/style.css';
import { tasks } from '/src/data/data.js';
import { writeTasks } from './writeTasks.js';
import { addTask } from './addTask.js';

import { javascriptLink } from './javascript-link.js';

writeTasks(tasks);
addTask(tasks);
javascriptLink();