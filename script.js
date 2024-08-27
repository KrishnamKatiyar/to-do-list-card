function addTask() {
    const taskInput = document.getElementById('new-task'); 
    const taskText = taskInput.value.trim(); 

    if (taskText === "") { 
        alert("Please enter a task");
        return;
    }

    const taskItem = document.createElement('li'); 
    taskItem.innerHTML = `
        ${taskText} 
        <button onclick="finishTask(this)">Finish</button>
    `; 

    document.getElementById('todo-list').appendChild(taskItem); 
    taskInput.value = ''; 
}

function finishTask(button) {
    const taskItem = button.parentElement; 
    button.remove(); 
    document.getElementById('finished-list').appendChild(taskItem); 
}