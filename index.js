function addTask() {
  const newTaskInput = document.getElementById('newTask');
  const taskList = document.getElementById('taskList');

  if (newTaskInput.value.trim() === '') {
    alert('Please enter a task.');
    return;
  }

  const newTask = document.createElement('li');
  newTask.innerHTML = `
    <input type="checkbox" id="check">
    <span>${newTaskInput.value}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
    <button type="button" id="remove" onclick="removeTask(this)">Remove</button>
  `;

  taskList.appendChild(newTask);
  newTaskInput.value = '';
}

function removeTask(button) {
  const taskList = document.getElementById('taskList');
  const taskItem = button.parentElement;
  taskList.removeChild(taskItem);
}



