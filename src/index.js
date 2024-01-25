import './style.css';
import { editTodos } from './todoActions.js';
import { renderElements } from './displayController.js';

editTodos.addProject('project1');
editTodos.addProject('project2');
editTodos.addProject('project3');
editTodos.addTodo(
  'title1',
  'description1',
  'dueDate1',
  'priority1',
  'project1'
);

editTodos.getTodo('project1', 'title1');
editTodos.getTodos();

editTodos.getProjects();
