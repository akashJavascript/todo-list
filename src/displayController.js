import { editTodos } from './todoActions.js';
const renderElements = (function () {
  const renderProjectSidebar = function () {
    const projectsList = document.querySelector('.projects-list');
    console.log(projectsList);
    projectsList.innerHTML = '';
    const projects = editTodos.getProjects();
    console.log(projects);
    projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.textContent = project;
      projectElement.classList.add('project');
      projectsList.appendChild(projectElement);
    });
  };
  return {
    renderProjectSidebar,
  };
})();
export { renderElements };
