import { editTodos } from './todoActions.js';
import { parse, format, isValid } from 'date-fns';
const renderElements = (function () {
  const renderProjectSidebar = function () {
    const projectsList = document.querySelector('.projects-list');
    projectsList.innerHTML = '';
    const projects = editTodos.getProjects();
    projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.textContent = project;
      projectElement.classList.add('project');

      projectsList.appendChild(projectElement);
      projectElement.addEventListener('click', () => {
        renderProjectTodos(project);
      });
    });
  };
  const renderProjectTodos = function (project) {
    let projectBody = document.querySelector('.project-body');
    projectBody.innerHTML = '';
    const todos = editTodos.getTodos();
    const projectTodos = todos[project];
    projectTodos.forEach(todo => {
      const todoElement = document.createElement('div');
      todoElement.classList.add('todo');
      const todoTitle = document.createElement('div');
      todoTitle.classList.add('todo-title');
      todoTitle.textContent = todo.title;
      const todoDueDate = document.createElement('div');
      todoDueDate.classList.add('todo-dueDate');
      todoDueDate.textContent = todo.dueDate;
      const todoPriority = document.createElement('div');
      todoPriority.classList.add('todo-priority');
      todoPriority.textContent = todo.priority;
      const todoEdit = document.createElement('div');
      todoEdit.classList.add('todo-edit');
      todoEdit.textContent = 'Edit';
      const todoDelete = document.createElement('div');
      todoDelete.classList.add('todo-delete');
      todoDelete.textContent = 'Delete';
      todoElement.appendChild(todoTitle);
      todoElement.appendChild(todoDueDate);
      todoElement.appendChild(todoPriority);
      todoElement.appendChild(todoEdit);
      todoElement.appendChild(todoDelete);
      projectBody.appendChild(todoElement);
      todoDelete.addEventListener('click', () => {
        editTodos.deleteTodo(project, todo.title);
        renderProjectTodos(project);
      });
      todoEdit.addEventListener('click', () => {
        // renderEditTodoForm(project, todo.title);
      });
    });
  };
  const renderAddTodoModal = function () {
    const createTodoBtn = document.querySelector('.create-todo-btn');
    console.log(createTodoBtn)
    createTodoBtn.addEventListener('click', () => {
      const modal = document.querySelector('.modal');
      modal.style.visibility = 'visible'; 
      let projects = editTodos.getProjects();
      const projectInput = document.querySelector('#project-input');
      projectInput.innerHTML = '';
      projects.forEach(project => {
        const projectOption = document.createElement('option');
        projectOption.value = project;
        projectOption.textContent = project;
        projectInput.appendChild(projectOption);
      });
      const elementsExceptModal = document.querySelectorAll('body *:not(.modal):not(.modal *)');
      elementsExceptModal.forEach(element => {
        element.style.filter = 'blur(5px)';
      });
      const submitTodoBtn = document.querySelector('.submit-todo-btn');
      submitTodoBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const title = document.querySelector('#title-input').value;
        const description = document.querySelector('#description-input').value;
        console.log(document.querySelector('#due-date-input'))
        const dueDate = document.querySelector('#due-date-input').value;
        console.log(dueDate)
          const date = parse(dueDate, 'yyyy-MM-dd', new Date());
          console.log(date)
          if (!isValid(date)) {
            alert('Invalid date');
            return;
          }
          const formattedDate = format(date, 'MM/dd/yyyy');
        const priority = document.querySelector('#priority-input').value;
        const project = document.querySelector('#project-input').value;
        editTodos.addTodo(
          title,
          description,
          formattedDate,
          priority,
          project
        );
          document.querySelector('#title-input').value = '';
          document.querySelector('#description-input').value = '';  
          document.querySelector('#due-date-input').value = '';
        renderProjectTodos(project);    
            modal.style.visibility = 'hidden';
        elementsExceptModal.forEach(element => {
          element.style.filter = 'blur(0px)';
        });
      });
      
    });
  };
  return {
    renderProjectSidebar,
    renderProjectTodos,
    renderAddTodoModal,
  };
})();
export { renderElements };
