import './style.css';
import { editTodos } from './todoActions.js';
import { renderElements } from './displayController.js';
editTodos.addProject('Project1');
editTodos.addProject('Project2');
editTodos.addProject('Project3');
editTodos.addTodo('title1', 'lorem', '1/10/24', 'High', 'Project1');
editTodos.addTodo('title1', 'lorem', '1/10/24', 'High', 'Project1');
editTodos.addTodo('title1', 'lorem', '1/10/24', 'High', 'Project1');

editTodos.getTodo('Project1', 'title1');
editTodos.getTodos();

editTodos.getProjects();
renderElements.renderProjectTodos('Project1');

renderElements.renderAddTodoModal();