import { renderElements } from './displayController.js';
const editTodos = (function () {
  let todos = {};
  const addProject = function (projectName) {
    todos[projectName] = [];
    renderElements.renderProjectSidebar();
  };
  const addTodo = function (title, description, dueDate, priority, project) {
    todos[project].push({ title, description, dueDate, priority });
  };
  const getTodos = function () {
    return todos;
  };
  const getTodo = function (project, title) {
    return todos[project].find(todo => todo.title === title);
  };
  const deleteTodo = function (project, title) {
    todos[project] = todos[project].filter(todo => todo.title !== title);
  };
  const editTodo = function (
    project,
    title,
    newTitle = undefined,
    newDescription = undefined,
    newDueDate = undefined,
    newPriority = undefined
  ) {
    const todo = todos[project].find(todo => todo.title === title);
    if (newTitle !== undefined) {
      todo.title = newTitle;
    }
    if (newDescription !== undefined) {
      todo.description = newDescription;
    }
    if (newDueDate !== undefined) {
      todo.dueDate = newDueDate;
    }
    if (newPriority !== undefined) {
      todo.priority = newPriority;
    }
  };
  const getProjects = function () {
    return Object.keys(todos);
  };
  return {
    addTodo,
    getTodos,
    addProject,
    getTodo,
    deleteTodo,
    editTodo,
    getProjects,
  };
})();

export { editTodos };
