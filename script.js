const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.querySelector("button");
const pendingTasksList = document.getElementById("pending-tasks");
const completedTasksList = document.getElementById("completed-tasks");

function addTask() {
  const taskName = newTaskInput.value.trim();

  if (taskName !== "") {
    const newTaskItem = document.createElement("li");
    const taskCheckbox = document.createElement("input");
    const taskLabel = document.createElement("label");
    const taskDate = document.createElement("span");
    const taskTime = document.createElement("span");
    const deleteButton = document.createElement("button");

    taskCheckbox.type = "checkbox";
    taskLabel.textContent = taskName;
    const now = new Date();
    taskDate.textContent = now.toLocaleDateString();
    taskTime.textContent = now.toLocaleTimeString();
    deleteButton.textContent = "Delete";
    newTaskItem.appendChild(taskCheckbox);
    newTaskItem.appendChild(taskLabel);
    newTaskItem.appendChild(taskDate);
    newTaskItem.appendChild(document.createTextNode(" "));
    newTaskItem.appendChild(taskTime);
    newTaskItem.appendChild(deleteButton);
    pendingTasksList.appendChild(newTaskItem);

    deleteButton.addEventListener("click", deleteTask);
    taskCheckbox.addEventListener("change", completeTask);

    newTaskInput.value = "";
  }
}

function deleteTask(event) {
  const taskItem = event.target.parentNode;
  const taskList = taskItem.parentNode;

  taskList.removeChild(taskItem);
}

function completeTask(event) {
  const taskItem = event.target.parentNode;
  const taskList = taskItem.parentNode;
  const completedTasksList = document.getElementById("completed-tasks");

  if (event.target.checked) {
    taskList.removeChild(taskItem);
    completedTasksList.appendChild(taskItem);
  }
  else {
    completedTasksList.removeChild(taskItem);
    pendingTasksList.appendChild(taskItem);
  }
}

addTaskButton.addEventListener("click", addTask);


